import { LocaleText } from "../../renderer/localeText";
import "./code.css";

export { Page };

function Page() {
  return (
    <>
      <h1>About</h1>
      <p>Example of using Vike.</p>
      <h1 className="text-3xl font-bold underline font-EudoxusSansExtraBold  mb-16">
        <LocaleText>Hello</LocaleText>
      </h1>
    </>
  );
}
