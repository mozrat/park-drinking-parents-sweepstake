/** Resolve a path under the Vite `public/` folder for runtime fetch or img src. */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const trimmed = path.replace(/^\//, '')
  return `${base}${trimmed}`
}
