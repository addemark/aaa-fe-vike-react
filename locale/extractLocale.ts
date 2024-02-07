export { extractLocale };

import { locales, localeDefault } from "./locales";
import { AvailableLanguageKeys } from "./translations";

function extractLocale(url: string) {
  const urlPaths = url.split("/");

  let locale;
  let urlWithoutLocale;
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const firstPath: AvailableLanguageKeys = urlPaths[1] as AvailableLanguageKeys;
  if (
    locales.filter((locale) => locale !== localeDefault).includes(firstPath)
  ) {
    locale = firstPath;
    urlWithoutLocale = "/" + urlPaths.slice(2).join("/");
  } else {
    locale = localeDefault;
    urlWithoutLocale = url;
  }

  return { locale, urlWithoutLocale };
}
