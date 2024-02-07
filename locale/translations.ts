import * as de from "./de-DE";
import * as ro from "./ro-RO";
import * as us from "./en-US";

export type AvailableLanguageKeys = "de-DE" | "ro-RO" | "en-US";

type ParamType = {
  locale: AvailableLanguageKeys;
  fileName: string;
};
type TranslationObject = {
  [key in AvailableLanguageKeys | string]: {
    [second_key: string]: object | string;
  };
};
export const translateObject: TranslationObject = {
  "de-DE": de,
  "en-US": us,
  "ro-RO": ro,
};
export type ResultReturn = {
  [key: string]: { [second_key: string]: object | string };
};
export const getTranslationObject = ({
  locale,
  fileName,
}: ParamType): ResultReturn =>
  translateObject[locale][fileName] as ResultReturn;
