export const SITE_URL = 'https://mytascensores.cl'

// Pages are generated as /page/index.html, so canonical URLs always end with a slash.
export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.endsWith('/') ? path : `${path}/`}`
