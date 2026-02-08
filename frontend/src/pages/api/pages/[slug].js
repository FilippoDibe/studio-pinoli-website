import pagesData from '../pages.json';

export default function handler(req, res) {
  const { slug } = req.query;
  const page = pagesData.find(p => p.slug === slug);

  if (page) {
    res.status(200).json(page);
  } else {
    res.status(404).json({ error: 'Page not found' });
  }
}
