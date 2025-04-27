const staticResourceModule: Record<string, any> = import.meta.glob(['./**/*.png', './**/*.jpg', './**/*.svg'], {
  import: 'default',
  eager: true,
})

export function loadStaticResource(url: string): string {
  return url.startsWith('/') ? staticResourceModule[`.${url}`] : staticResourceModule[`./${url}`]
}
