import { PageContext } from "vike/types";
import { localeDefault } from "../locale";
import { usePageContext } from "./usePageContext";

export { Link };

function Link(props: {
  href: string;
  className?: string;
  children: React.ReactNode;
  locale?: string;
}) {
  const pageContext: PageContext = usePageContext();
  const { urlPathname } = pageContext;
  let { href, locale } = props;
  locale = locale ?? localeDefault;
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  if (locale !== localeDefault) {
    href = "/" + locale + href;
  }
  const className = [props.className, isActive && "is-active"]
    .filter(Boolean)
    .join(" ");
  return <a {...props} href={href} className={className} />;
}
