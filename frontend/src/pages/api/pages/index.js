import pagesData from '../pages.json';

export default function handler(req, res) {
  res.status(200).json(pagesData);
}
