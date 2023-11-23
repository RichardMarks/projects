import { Category } from "./Category";

import ToolsCategoryIcon from "./assets/tools_cat_icon.png";

const TOOLS_DESC = `These programs, essential in game development, serve diverse
purposes and exist in various forms. Ranging from straightforward
scripts and command-line tools to comprehensive applications, they
cater to specific needs within the game creation process. Some
streamline simple, repetitive tasks, while others are comprehensive
software packages providing a complete suite of features, offering
developers a spectrum of options to suit their unique workflows and
requirements.`;

export function Tools() {
  return (
    <>
      <Category
        id="tools"
        icon={ToolsCategoryIcon}
        iconAlt="Screwdriver and Wrench Icon"
        name="Tools"
        description={TOOLS_DESC}
      />
    </>
  );
}
