import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  const robotsTxtPath = path.join(
    process.cwd(),
    'public',
    process.env.NEXT_PUBLIC_ENV === 'production'
      ? `robots.production.txt`
      : `robots.development.txt`
  );
  const robotsTxt = readFileSync(robotsTxtPath, {
    encoding: 'utf8',
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(robotsTxt);
}
