export { translate2 as translate };

import {
  AvailableLanguageKeys,
  ResultReturn,
  translateObject,
} from "./translations";

export type TranslateType = Awaited<ReturnType<typeof translate2>>;
export type ResultType = {
  [key: string]: object | string;
};

function translate2(
  text: string,
  locale: AvailableLanguageKeys
): string | object {
  // we have the route for the translation formed by words with . between
  const translationRoute: string[] = text.split(".");
  //if we do not have a path formed from at least 2 words we return the word
  if (!(translationRoute.length > 1)) return translationRoute[0];
  // get the main object that has the translation
  let result: ResultType = translateObject[locale] as ResultReturn;
  translationRoute.forEach((element) => {
    result = result[element] as ResultType;
  });
  result = result ?? "Path is not defined in translation";
  return result;
}
