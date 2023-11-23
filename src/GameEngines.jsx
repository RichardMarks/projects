import { Category } from "./Category";

import GameEnginesCategoryIcon from "./assets/engines_cat_icon.png";

const GAME_ENGINES_DESC = [
  `A game engine is essentially the core software that game developers
use to create video games. It's a specialized toolset that provides
various functionalities like rendering graphics, handling physics,
managing audio, and implementing artificial intelligence. Think of
it as a foundation or framework upon which games are built.`,
  `Instead of starting from scratch each time, developers use a game
engine to streamline the process. It offers pre-built systems and
libraries that allow them to focus on designing the game itself
rather than reinventing the wheel with each new project. It's a bit
like using a template or a set of tools to construct a
house—developers utilize the engine's capabilities to shape their
unique gaming experiences.`,
];

export function GameEngines() {
  return (
    <>
      <Category
        id="engines"
        icon={GameEnginesCategoryIcon}
        iconAlt="Engine Icon"
        name="Game Engines"
        description={GAME_ENGINES_DESC}
      />
    </>
  );
}
