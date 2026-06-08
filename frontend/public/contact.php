<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://studiopinoli.it');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// ── Config SMTP ──────────────────────────────────────────────────────────────
$SMTP_HOST    = 'smtp.gmail.com';
$SMTP_PORT    = 587;
$SMTP_USER    = 'filippo.cafaro03@gmail.com';
$SMTP_PASS    = 'vfyv rqda xlki wzxe';
$CONTACT_EMAIL = 'info@studiopinoli.it';

// ── Leggi body JSON ──────────────────────────────────────────────────────────
$body = json_decode(file_get_contents('php://input'), true);
if (!$body) {
    $body = $_POST;
}

$name    = isset($body['name'])    ? trim($body['name'])    : '';
$email   = isset($body['email'])   ? trim($body['email'])   : '';
$phone   = isset($body['phone'])   ? trim($body['phone'])   : '';
$service = isset($body['service']) ? trim($body['service']) : '';
$message = isset($body['message']) ? trim($body['message']) : '';
$website = isset($body['website']) ? trim($body['website']) : ''; // honeypot

// Honeypot
if ($website) {
    echo json_encode(['success' => true]);
    exit;
}

// Validazione
if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Campi obbligatori mancanti.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Indirizzo email non valido.']);
    exit;
}

function esc($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$safeName    = esc($name);
$safeEmail   = esc($email);
$safePhone   = esc($phone);
$safeService = esc($service);
$safeMessage = esc($message);
$serviceLabel = $safeService ?: 'Non specificato';
$date = (new DateTime())->setTimezone(new DateTimeZone('Europe/Rome'))->format('d/m/Y H:i');

// ── Corpo email ──────────────────────────────────────────────────────────────
$htmlBody = "
<div style='font-family:Arial,sans-serif;max-width:600px;margin:0 auto'>
  <div style='background:#0a5a8c;padding:24px 32px;border-radius:8px 8px 0 0'>
    <h2 style='color:#fff;margin:0;font-size:20px'>Nuova richiesta dal sito — Studio Pinoli</h2>
  </div>
  <div style='background:#f9fafb;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px'>
    <table style='width:100%;border-collapse:collapse'>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600;width:140px;color:#555'>Nome</td><td style='padding:10px 0;border-bottom:1px solid #e5e7eb'>{$safeName}</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600;color:#555'>Email</td><td style='padding:10px 0;border-bottom:1px solid #e5e7eb'><a href='mailto:{$safeEmail}' style='color:#0a5a8c'>{$safeEmail}</a></td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600;color:#555'>Telefono</td><td style='padding:10px 0;border-bottom:1px solid #e5e7eb'>" . ($safePhone ?: '—') . "</td></tr>
      <tr><td style='padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600;color:#555'>Servizio</td><td style='padding:10px 0;border-bottom:1px solid #e5e7eb'>{$serviceLabel}</td></tr>
    </table>
    <div style='margin-top:24px'>
      <p style='font-weight:600;color:#555;margin:0 0 8px'>Messaggio</p>
      <p style='background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:16px;margin:0;line-height:1.6;white-space:pre-wrap'>{$safeMessage}</p>
    </div>
    <p style='margin-top:24px;font-size:12px;color:#999'>Messaggio inviato da studiopinoli.it — {$date}</p>
  </div>
</div>";

$autoReply = "
<div style='font-family:Arial,sans-serif;max-width:600px;margin:0 auto'>
  <div style='background:#0a5a8c;padding:24px 32px;border-radius:8px 8px 0 0'>
    <h2 style='color:#fff;margin:0;font-size:20px'>Grazie, {$safeName}!</h2>
  </div>
  <div style='background:#f9fafb;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px'>
    <p style='margin:0 0 16px;line-height:1.7'>Abbiamo ricevuto la tua richiesta e ti ricontatteremo entro <strong>24 ore lavorative</strong>.</p>
    <p style='margin:0 0 24px;line-height:1.7'>Se hai urgenza, puoi contattarci direttamente:</p>
    <p style='margin:0 0 8px'>📞 <a href='tel:+393316713904' style='color:#0a5a8c'>+39 331 671 3904</a></p>
    <p style='margin:0 0 24px'>📧 <a href='mailto:info@studiopinoli.it' style='color:#0a5a8c'>info@studiopinoli.it</a></p>
    <p style='margin:0;color:#888;font-size:13px'>— Il team di Studio Pinoli<br>Via Domenico Cimarosa, 4 — 20144 Milano</p>
  </div>
</div>";

// ── Funzione invio via SMTP ──────────────────────────────────────────────────
function sendSmtpMail($host, $port, $user, $pass, $from, $to, $replyTo, $subject, $html) {
    $socket = fsockopen("tcp://{$host}", $port, $errno, $errstr, 30);
    if (!$socket) return false;

    function recv($s) {
        $r = '';
        while ($line = fgets($s, 515)) {
            $r .= $line;
            if ($line[3] == ' ') break;
        }
        return $r;
    }
    function send($s, $cmd) { fwrite($s, $cmd . "\r\n"); }

    recv($socket);
    send($socket, "EHLO studiopinoli.it");
    recv($socket);
    send($socket, "STARTTLS");
    recv($socket);

    stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);

    send($socket, "EHLO studiopinoli.it");
    recv($socket);
    send($socket, "AUTH LOGIN");
    recv($socket);
    send($socket, base64_encode($user));
    recv($socket);
    send($socket, base64_encode($pass));
    $authResp = recv($socket);
    if (strpos($authResp, '235') === false) {
        fclose($socket);
        return false;
    }

    send($socket, "MAIL FROM:<{$user}>");
    recv($socket);
    send($socket, "RCPT TO:<{$to}>");
    recv($socket);
    send($socket, "DATA");
    recv($socket);

    $headers  = "From: \"Studio Pinoli\" <{$from}>\r\n";
    $headers .= "To: {$to}\r\n";
    $headers .= "Reply-To: {$replyTo}\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n";

    send($socket, $headers . "\r\n" . chunk_split(base64_encode($html)) . "\r\n.");
    recv($socket);
    send($socket, "QUIT");
    fclose($socket);
    return true;
}

// ── Invia email ──────────────────────────────────────────────────────────────
$ok1 = sendSmtpMail(
    $SMTP_HOST, $SMTP_PORT, $SMTP_USER, $SMTP_PASS,
    $SMTP_USER, $CONTACT_EMAIL, $email,
    "Nuova richiesta da {$safeName} — {$serviceLabel}",
    $htmlBody
);

sendSmtpMail(
    $SMTP_HOST, $SMTP_PORT, $SMTP_USER, $SMTP_PASS,
    $SMTP_USER, $email, $SMTP_USER,
    "Abbiamo ricevuto la tua richiesta — Studio Pinoli",
    $autoReply
);

if ($ok1) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Errore nell\'invio. Riprova o contattaci direttamente.']);
}
