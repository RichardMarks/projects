import { Category } from "./Category";
import { Product } from "./Product";

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

import SS0 from "./assets/ec-screenshot1.png";
import SS1 from "./assets/ec-screenshot2.png";
import SS2 from "./assets/ec-screenshot3.png";

const products = [
  {
    id: "6cd8979d-a0eb-4db1-98f8-fc20db60c9f0",
    name: "Easy Console",
    // tagline: "",
    description: [
      `Easy Console was a deliberately constrained retro game engine written in C using the Allegro 4.1 multimedia framework. It functioned as a self-contained Fantasy Computer executable, processing plain-text source code resembling a fusion of x86 CPU assembly language and Pascal syntax through a virtual machine emulator runtime.`,
      `A fantasy computer emulates the charm of 8-bit computers and old-school consoles within a game engine or virtual machine. It challenges developers to operate within limitations—such as color palettes, sound channels, resolution, and memory—popularizing its use in retro-gaming and game jam communities.`,
      `The "ECVME" operated with a single-threaded execution model, capable of supporting up to 32 individually-controlled 8x8 pixel sprite graphics on a 160x200 pixel display. Additionally, it supported C-string formatted text printing and played back ogg vorbis encoded audio files, managing a background music stream channel and two sound effect channels. The engine responded to four directional keys and two action keys.`,
      `The included "shoot.prg" demo introduced the user to a small space shooter game playable on the console. Which you may watch a video of here.
      Regrettably, the original source code met an unfortunate end during Hurricane Katrina in 2005 and was lost.`,
    ],
    carousel: true,
    screenshots: [
      {
        id: "cab7c74f-1cb1-4cf8-afee-4332fdd53ba4",
        imageUrl: SS1,
        imageAlt: "Easy Console Shooter Demo Screenshot",
      },
      {
        id: "75e51bd7-aae3-4914-b75e-a2587230b9c7",
        imageUrl: SS0,
        imageAlt: "Easy Console Program Select Screenshot",
      },
      {
        id: "c52b06da-8b32-4222-a313-066aa147e476",
        imageUrl: SS2,
        imageAlt: "Easy Console Loading Screenshot",
      },
      {
        id: "cab7c74f-1cb1-4cf8-afee-4332fdd53ba4",
        imageUrl: SS1,
        imageAlt: "Easy Console Shooter Demo Screenshot",
      },
    ],
    videos: [
      {
        id: "002c40cf-ff15-4c90-bd14-27beff1dde05",
        videoUrl:
          "https://www.youtube.com/embed/fOtMWCTBByI?si=9znLgM-tFz_m_6yh",
      },
    ],
  },

  {
    id: "be538fda-fcb5-4973-82ea-3ae8dd96bb78",
    name: "Tiny Dungeon Tech Demo",
    tagline: "Really fun to play with",
    description: [
      `Tiny Dungeon, a technical showcase developed using Allegro and C++ over a decade ago, featured a built-in world editor toolset and a runtime play mode for immediate playtesting. After successfully getting the demo working, I eagerly recorded and uploaded a video to YouTube, only to face a devastating hardware failure that destroyed my computer before I could create any backup of the project. It was a hard lesson learned about the importance of safeguarding work in the world of digital creation.`,
    ],
    videos: [
      {
        id: "830bd4f0-d9a6-4d40-84aa-479541b2d3e9",
        videoUrl:
          "https://www.youtube.com/embed/U3U9WEHh64o?si=tI5ZYypnrIEC87vu",
      },
    ],
  },
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
      {products.map((product, index) => {
        const useAlternateLayout = index % 2 !== 0;
        return (
          <Product
            key={product.id}
            product={product}
            useAlternateLayout={useAlternateLayout}
          />
        );
      })}
    </>
  );
}
