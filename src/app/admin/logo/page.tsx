'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export default function LogoUploadPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [current, setCurrent] = useState('/DroneLogo.png');
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [uploading, setUploading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setStatus(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const file = inputRef.current?.files?.[0];
    if (!file) return;

    setUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append('logo', file);

    try {
      const res = await fetch('/api/upload-logo', { method: 'POST', body: formData });
      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: 'error', message: data.error ?? 'Upload failed' });
        return;
      }

      // Bust cache by appending timestamp
      setCurrent(`${data.path}?t=${Date.now()}`);
      setPreview(null);
      if (inputRef.current) inputRef.current.value = '';
      setStatus({ type: 'success', message: 'Logo updated successfully!' });
    } catch {
      setStatus({ type: 'error', message: 'Network error — please try again' });
    } finally {
      setUploading(false);
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-white mb-1">Upload Logo</h1>
        <p className="text-[#7a99b8] text-sm mb-8">
          Accepted formats: SVG, PNG, JPEG, WebP — max 5 MB
        </p>

        {/* Current logo */}
        <div className="mb-8 p-6 rounded-lg border border-[#1a3354] bg-[#0a1220]">
          <p className="text-xs text-[#7a99b8] uppercase tracking-widest mb-4">Current logo</p>
          <div className="relative w-32 h-32">
            <Image
              src={current}
              alt="Current logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File picker */}
          <div>
            <label className="block text-sm font-medium text-[#7a99b8] mb-2">
              Choose new logo
            </label>
            <input
              ref={inputRef}
              type="file"
              name="logo"
              accept="image/svg+xml,image/png,image/jpeg,image/webp"
              required
              onChange={handleFileChange}
              className="block w-full text-sm text-[#7a99b8]
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-[#1a8fe3] file:text-white
                hover:file:bg-[#38bdf8] file:cursor-pointer
                cursor-pointer"
            />
          </div>

          {/* Preview */}
          {preview && (
            <div className="p-6 rounded-lg border border-[#1a3354] bg-[#0a1220]">
              <p className="text-xs text-[#7a99b8] uppercase tracking-widest mb-4">Preview</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Preview" className="w-32 h-32 object-contain" />
            </div>
          )}

          {/* Status */}
          {status && (
            <p
              className={`text-sm font-medium ${
                status.type === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={uploading || !preview}
            className="px-6 py-2.5 bg-[#1a8fe3] text-white text-sm font-semibold rounded
              hover:bg-[#38bdf8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading…' : 'Upload Logo'}
          </button>
        </form>
      </div>
    </main>
  );
}
