import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest } from 'next/server';

const ALLOWED_TYPES = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/webp'];
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('logo');

  if (!(file instanceof File)) {
    return Response.json({ error: 'No file provided' }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return Response.json({ error: 'File must be SVG, PNG, JPEG, or WebP' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  if (buffer.byteLength > MAX_BYTES) {
    return Response.json({ error: 'File must be under 5 MB' }, { status: 400 });
  }

  const ext = file.type === 'image/svg+xml' ? 'svg' : file.type.split('/')[1];
  const filename = `logo.${ext}`;
  const dest = join(process.cwd(), 'public', filename);

  await writeFile(dest, buffer);

  return Response.json({ path: `/${filename}` });
}
