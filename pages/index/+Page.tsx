export { Page };

import { locales } from "../../locale";
import { Link } from "../../renderer/Link";
import { LocaleText } from "../../renderer/localeText";
import { Counter } from "./Counter";

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
        <li>
          <LocaleText>Localized</LocaleText> |
          <LocaleText>Change language</LocaleText>:
          {locales.map((locale) => (
            <Link locale={locale} href="/" key={locale}>
              {locale} |
            </Link>
          ))}
        </li>
        <li>
          <LocaleText>Testing.content.greetings</LocaleText>
        </li>
        <li>
          <LocaleText>Testing.form.button</LocaleText>
        </li>
      </ul>
    </>
  );
}
