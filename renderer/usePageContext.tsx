// https://vike.dev/usePageContext
// eslint-disable-next-line react-refresh/only-export-components
export { usePageContext };
export { PageContextProvider };
export { LocalePageContextType };

import React, { useContext } from "react";
import type { PageContext } from "vike/types";
import { AvailableLanguageKeys } from "../locale/translations";

type LocalePageContextType = PageContext & { locale: AvailableLanguageKeys };

const Context = React.createContext<LocalePageContextType>(
  undefined as unknown as LocalePageContextType
);

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: LocalePageContextType;
  children: React.ReactNode;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

/** https://vike.dev/usePageContext */
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
