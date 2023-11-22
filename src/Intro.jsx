import { Category } from "./Category";

import GamesCategoryIcon from "./assets/games_cat_icon.png";

const GAMES_DESC = `Video games are interactive digital experiences where players often take
control of characters, engaging in various challenges or adventures
within virtual worlds. They are quite diverse, offering everything from casual
puzzles to intense action, and they're a popular form of
entertainment that combines storytelling, art, and technology.`;

export function Intro() {
  return (
    <>
      <Category
        icon={GamesCategoryIcon}
        iconAlt="Game Controller Icon"
        name="Games"
        description={GAMES_DESC}
      />
    </>
  );
}
