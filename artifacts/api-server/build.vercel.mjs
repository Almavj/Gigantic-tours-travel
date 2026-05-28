console.log('✅ API server: Using pre-built artifacts');
import fs from 'fs';
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist', { recursive: true });
}
if (fs.existsSync('./dist/index.mjs')) {
  console.log('✓ API server dist found');
}
