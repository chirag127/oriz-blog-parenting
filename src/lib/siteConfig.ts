export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'parenting',
  name: 'Kitchen Table',
  origin: 'https://parenting-blog.oriz.in',
  tagline: 'Calm, practical writing on raising kids and family life',
  description:
    'Kitchen Table — calm, practical, judgement-free writing on raising kids: screens, sleep, reading, routines, and the ordinary days in between.',
}
