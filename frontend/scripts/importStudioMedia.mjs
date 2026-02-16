import { promises as fs } from "fs";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

const SOURCE_DIR = "/Users/filippodibenedetto/Desktop/STUDIO PINOLI SOCIAL 3";
const OUTPUT_ROOT = path.resolve("frontend/public/media/studio-pinoli-social-3");
const OUTPUT_IMAGES = path.join(OUTPUT_ROOT, "images");
const OUTPUT_VIDEOS = path.join(OUTPUT_ROOT, "videos");
const MANIFEST_PATH = path.resolve("frontend/src/data/studioSocialMedia.json");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".heic", ".gif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".m4v", ".avi", ".webm"]);

const STOP_WORDS = new Set([
  "studio",
  "pinoli",
  "social",
  "copy",
  "post",
  "reel",
  "stories",
  "storia",
  "feed",
  "settimana",
  "contenuti",
  "contnuti",
  "campagna",
  "promozionale",
  "open",
  "day",
  "foto",
  "video",
  "maggio",
  "medicina",
  "estetica",
]);

function slugify(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 80);
}

function tokenise(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token && token.length > 2 && !STOP_WORDS.has(token));
}

async function walkFiles(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await walkFiles(fullPath);
      out.push(...nested);
      continue;
    }

    out.push(fullPath);
  }

  return out;
}

async function ensureCleanOutput() {
  await fs.rm(OUTPUT_ROOT, { recursive: true, force: true });
  await fs.mkdir(OUTPUT_IMAGES, { recursive: true });
  await fs.mkdir(OUTPUT_VIDEOS, { recursive: true });
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
}

async function probeMedia(filePath) {
  try {
    const { stdout } = await execFileAsync("ffprobe", [
      "-v",
      "error",
      "-select_streams",
      "v:0",
      "-show_entries",
      "stream=width,height",
      "-show_entries",
      "format=duration",
      "-of",
      "json",
      filePath,
    ]);

    const data = JSON.parse(stdout || "{}");
    const stream = Array.isArray(data.streams) && data.streams[0] ? data.streams[0] : {};
    const durationRaw = data.format?.duration;

    const width = Number(stream.width) || 0;
    const height = Number(stream.height) || 0;
    const duration = Number(durationRaw) || 0;

    return { width, height, duration, ok: width > 0 && height > 0 };
  } catch (error) {
    return {
      width: 0,
      height: 0,
      duration: 0,
      ok: false,
      error: error.message,
    };
  }
}

function computeOrientation(width, height) {
  if (!width || !height) {
    return "unknown";
  }
  const ratio = width / height;
  if (ratio > 1.1) {
    return "landscape";
  }
  if (ratio < 0.9) {
    return "portrait";
  }
  return "square";
}

function scoreMedia(item) {
  const pixels = item.width * item.height;
  const folder = item.sourceRelative.toLowerCase();

  let score = pixels;

  if (item.type === "video") {
    score += Math.min(item.duration, 30) * 250000;
  }

  if (folder.includes("foto nasti") || folder.includes("foto anna")) {
    score += 1_500_000;
  }

  if (folder.includes("stock")) {
    score -= 250_000;
  }

  if (item.orientation === "landscape") {
    score += 500_000;
  }

  return score;
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  const output = [];

  for (const item of items) {
    const key = keyFn(item);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    output.push(item);
  }

  return output;
}

function curateMedia(media) {
  const images = media.filter((item) => item.type === "image");
  const videos = media.filter((item) => item.type === "video");

  const landscapeImages = images.filter((item) => item.orientation === "landscape");
  const portraitImages = images.filter((item) => item.orientation === "portrait");
  const landscapeVideos = videos.filter((item) => item.orientation === "landscape");
  const portraitVideos = videos.filter((item) => item.orientation === "portrait");

  const heroImage = landscapeImages[0] || images[0] || null;
  const heroVideo = landscapeVideos[0] || videos[0] || null;

  const folderBalanced = uniqueBy(images, (item) => item.folder).slice(0, 8);
  const featuredImages = uniqueBy([...folderBalanced, ...images], (item) => item.id).slice(0, 16);

  const socialWall = uniqueBy([...portraitImages, ...images], (item) => item.id).slice(0, 24);

  const featuredVideos = uniqueBy([...portraitVideos, ...videos], (item) => item.id).slice(0, 12);

  return {
    heroImageId: heroImage?.id || null,
    heroVideoId: heroVideo?.id || null,
    featuredImageIds: featuredImages.map((item) => item.id),
    socialWallImageIds: socialWall.map((item) => item.id),
    featuredVideoIds: featuredVideos.map((item) => item.id),
    allImageIds: images.map((item) => item.id),
    allVideoIds: videos.map((item) => item.id),
  };
}

async function main() {
  await ensureCleanOutput();

  const allFiles = await walkFiles(SOURCE_DIR);

  const mediaFiles = allFiles.filter((filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    return IMAGE_EXTENSIONS.has(ext) || VIDEO_EXTENSIONS.has(ext);
  });

  const sorted = mediaFiles.sort((a, b) => a.localeCompare(b));

  const failed = [];
  const media = [];

  let imageIndex = 0;
  let videoIndex = 0;

  for (const absolutePath of sorted) {
    const ext = path.extname(absolutePath).toLowerCase();
    const isImage = IMAGE_EXTENSIONS.has(ext);
    const type = isImage ? "image" : "video";
    const index = isImage ? ++imageIndex : ++videoIndex;
    const relativeSource = path.relative(SOURCE_DIR, absolutePath);
    const relativeDir = path.dirname(relativeSource);
    const dirSlug = slugify(relativeDir.replaceAll(path.sep, "-")) || "root";
    const fileName = path.basename(relativeSource, ext);
    const safeBase = slugify(fileName) || `${type}-${index}`;
    const safeName = `${type}-${String(index).padStart(3, "0")}-${dirSlug}-${safeBase}${ext}`;
    const outDir = isImage ? OUTPUT_IMAGES : OUTPUT_VIDEOS;
    const destination = path.join(outDir, safeName);

    await fs.copyFile(absolutePath, destination);

    const stat = await fs.stat(destination);
    const probe = await probeMedia(destination);

    if (!probe.ok) {
      failed.push({
        source: relativeSource,
        output: safeName,
        reason: probe.error || "width/height non disponibili",
      });
    }

    const orientation = computeOrientation(probe.width, probe.height);
    const aspectRatio = probe.width && probe.height ? Number((probe.width / probe.height).toFixed(4)) : null;
    const folder = relativeDir.split(path.sep)[0] || "root";

    const tags = Array.from(
      new Set([
        ...tokenise(relativeDir),
        ...tokenise(fileName),
        folder.toLowerCase(),
        type,
        orientation,
      ])
    ).slice(0, 15);

    const srcPrefix = isImage ? "/media/studio-pinoli-social-3/images/" : "/media/studio-pinoli-social-3/videos/";
    const item = {
      id: `${type}-${String(index).padStart(3, "0")}`,
      type,
      src: `${srcPrefix}${safeName}`,
      width: probe.width || null,
      height: probe.height || null,
      duration: type === "video" ? Number(probe.duration.toFixed(2)) : null,
      orientation,
      aspectRatio,
      sizeBytes: stat.size,
      sourceRelative: relativeSource,
      folder,
      tags,
    };

    item.score = scoreMedia(item);
    media.push(item);
  }

  media.sort((a, b) => b.score - a.score);

  const curation = curateMedia(media);

  const manifest = {
    generatedAt: new Date().toISOString(),
    sourceDirectory: SOURCE_DIR,
    stats: {
      totalMedia: media.length,
      images: media.filter((item) => item.type === "image").length,
      videos: media.filter((item) => item.type === "video").length,
      failedAnalysis: failed.length,
      totalBytes: media.reduce((sum, item) => sum + item.sizeBytes, 0),
    },
    failed,
    curation,
    media,
  };

  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log(`Import completato. Media totali: ${manifest.stats.totalMedia}`);
  console.log(`Immagini: ${manifest.stats.images}, Video: ${manifest.stats.videos}`);
  console.log(`Analisi fallite: ${manifest.stats.failedAnalysis}`);
  console.log(`Manifest: ${MANIFEST_PATH}`);
}

main().catch((error) => {
  console.error("Errore importazione media:", error);
  process.exitCode = 1;
});
