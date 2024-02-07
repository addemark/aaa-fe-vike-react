export { LocaleText };

import { usePageContext } from "./usePageContext";
import { translate } from "../locale";

type TextChildren = { children: string };
function LocaleText({ children }: TextChildren) {
  const pageContext = usePageContext();
  const { locale } = pageContext;
  const text = children;
  const textLocalized = translate(text, locale);
  return <>{textLocalized}</>;
}
