import { EThemes } from 'types'

const COOKIE_NAME = 'theme-preference'
const MAX_AGE_DAYS = 365

/**
 * Reads the theme preference from the cookie.
 * Returns EThemes.LIGHT or EThemes.DARK if valid, null if missing or invalid.
 */
export function getThemeFromCookie(): EThemes | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie
    .split(';')
    .map(s => s.trim())
    .find(s => s.startsWith(`${COOKIE_NAME}=`))
  if (!match) return null
  const value = decodeURIComponent(match.slice(COOKIE_NAME.length + 1)).trim()
  if (value === EThemes.DARK) return EThemes.DARK
  if (value === EThemes.LIGHT) return EThemes.LIGHT
  return null
}

/**
 * Writes the theme preference to the cookie. Only persists LIGHT or DARK.
 */
export function setThemeCookie(theme: EThemes): void {
  if (typeof document === 'undefined') return
  if (theme !== EThemes.LIGHT && theme !== EThemes.DARK) return
  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(theme)}; path=/; max-age=${maxAge}; SameSite=Lax`
}
