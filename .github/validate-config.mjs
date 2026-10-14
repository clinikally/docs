import { readFile } from 'node:fs/promises';
import { docsConfigSchema } from '@mintlify/validation';

const config = JSON.parse(await readFile(new URL('../docs.json', import.meta.url), 'utf8'));
const result = docsConfigSchema.safeParse(config);
if (!result.success) {
  console.error(result.error.issues);
  process.exitCode = 1;
} else {
  console.log('docs.json passes the pinned Mintlify configuration schema.');
}
