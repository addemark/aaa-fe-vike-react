// https://vike.dev/onPrerenderStart
export default onPrerenderStart;

import { locales, localeDefault } from "../locale";
import { LocalePageContextType } from "./usePageContext";

// We only need this for pre-rendered apps https://vike.dev/pre-rendering
function onPrerenderStart(prerenderContext: {
  pageContexts: LocalePageContextType[];
}) {
  const pageContexts: LocalePageContextType[] = [];
  prerenderContext.pageContexts.forEach((pageContext) => {
    // Duplicate pageContext for each locale
    locales.forEach((locale) => {
      // Localize URL
      let { urlOriginal } = pageContext;
      if (locale !== localeDefault) {
        urlOriginal = `/${locale}${pageContext.urlOriginal}`;
      }
      pageContexts.push({
        ...pageContext,
        urlOriginal,
        // Set pageContext.locale
        locale,
      });
    });
  });
  return {
    prerenderContext: {
      pageContexts,
    },
  };
}
