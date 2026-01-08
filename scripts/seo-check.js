import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = './src/content/blog';
const files = fs.readdirSync(blogDir);
let errors = 0;

files.forEach(file => {
  if (file.endsWith('.mdx') || file.endsWith('.md')) {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { data } = matter(content);

    if (!data.description || data.description.length < 50) {
      console.error(`❌ SEO Error: ${file} is missing a proper description.`);
      errors++;
    }
    if (!data.author) {
      console.error(`❌ SEO Error: ${file} is missing an author.`);
      errors++;
    }
  }
});

if (errors > 0) {
  console.log(`\nFound ${errors} SEO errors. Fix them before deploying!`);
  process.exit(1);
} else {
  console.log('✅ SEO Audit passed!');
}