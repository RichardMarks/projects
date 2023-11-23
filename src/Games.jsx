import { Category } from "./Category";
import { Product } from "./Product";

import GamesCategoryIcon from "./assets/games_cat_icon.png";

const GAMES_DESC = `Video games are interactive digital experiences where players often take
control of characters, engaging in various challenges or adventures
within virtual worlds. They are quite diverse, offering everything from casual
puzzles to intense action, and they're a popular form of
entertainment that combines storytelling, art, and technology.`;

import SS00 from "./assets/ch-screenshot.png";
import SS01 from "./assets/d10-screenshot.png";

const products = [
  {
    id: "68a4d9fd-04d1-4d6b-9058-6ceab88233e2",
    name: "Gelda",
    tagline: `Drop into the wilderness and explore as Gelda, a young girl with a
    penchant for adventure, and often trouble.`,
    screenshots: [
      {
        id: "a4fe76b0-4928-4815-b8d5-3510de3ea3ed",
        imageUrl:
          "https://img.itch.zone/aW1hZ2UvMzcwOTIzLzE4NTkyNjUucG5n/original/oIBNZX.png",
        imageAlt: "",
      },
    ],
    carousel: true,
    videos: [
      {
        id: "bf1d7112-3c40-4563-bfc4-2120623286b7",
        videoUrl:
          "https://www.youtube.com/embed/76NfgEbNW7k?si=0KSjVetFcb0J4pPU",
      },
      {
        id: "a5a7d7f8-e76a-4c2b-8ca6-661ea1cca0b6",
        videoUrl:
          "https://www.youtube.com/embed/IzOyVS8wzxQ?si=gnukufcjKPTNdiDi",
      },
      {
        id: "b4bd543b-76d9-4a6d-86ec-a1057885455b",
        videoUrl:
          "https://www.youtube.com/embed/Jmfv53If6GY?si=WeFNZBpjoFBORnjP",
      },
    ],

    description: [
      `Created for the 2019 TVGameJam and inspired by Hilda the series on
      Netflix. The game and all assets were made from scratch during the
      entire 12 days of production. Credit for most visuals goes to my wife
      Rachel. I was responsible for project management, implementing the game
      mechanics, the asset pipeline, audio production, story editing and final
      packaging and distribution processes.`,
      `I composed, recorded, edited, and mastered all of the music of
      the game using Tracktion Waveform Pro, Apple Logic Pro, a MIDI
      keyboard, and the incredible EW collective. You can listen to
      the entire soundtrack on my channel or by playing the game
      itself.`,
      `At the time of this writing, there have been over 30,000 unique
      players and 10,000 repeat players. Thanks to the game jam
      community, the game gained a bunch of coverage by youtubers,
      driving more and more players to check it out. It has been fun
      to watch people enjoying Gelda.`,
    ],
    link: {
      label: "Check it out on itch.io",
      href: "https://ramblingindiegames.itch.io/gelda-tvgamejam-edition",
    },
  },
  {
    id: "6919ca9b-1413-4c06-b684-1fb994aa3619",
    name: "Cucurbita's Halloween",
    tagline:
      "You were warned not to venture into the dead forest on Halloween…",
    description: [
      `Developed using a modified build of the QuickJS game engine as a way to test the capabilities, this little 2D action game was built in under a week and published on Kongregate. I was responsible for the game design, the story, the programming, most of the graphics, and the final packaging and distribution processes. The music was composed by Daniel Felipe Guzman M. and licensed for use by Bang Bang Attack Studios.`,
      `It is time to find your body and stop the evil warlock before
      Halloween is over!`,
    ],
    screenshots: [
      {
        id: "c28397ed-e8c8-452b-8f3e-23a683c48e48",
        imageUrl: SS00,
        imageAlt: "Cucurbita's Halloween Screenshot",
      },
    ],
    videos: [
      {
        id: "f1f78995-05ec-4250-b6f9-dd93f7925779",
        videoUrl:
          "https://www.youtube.com/embed/aeQztXkMADY?si=AhNM-zBeOCokIIJ6&amp;start=20",
      },
    ],
    link: {
      label: "Check it out on Kongregate",
      href: "https://www.kongregate.com/games/bbastudios/cucurbitas-halloween",
    },
  },
  {
    id: "36d07484-2b27-487a-b499-fdbc66a23b0e",
    name: "D10FP72HRGCE",
    tagline:
      "The Evil Heart Federation is invading and you’re on the run in your bucket-o-bolts cargo ship.",
    description: [
      `Within an intense timeframe of under three days, I meticulously crafted a captivating space shooter. This game boasted upgrades, animations, dramatic death sequences, explosive effects, and adversaries represented as 'Evil Hearts.' Notably, it was designed with a compact 96x96 resolution, adhering to a limited color palette stipulated by the competition's rules.`,
      `One of the significant innovations within this project was the development of my proprietary binary sprite format, conversion tools, and a rendering system. There are no external asset files in the game. Everything is packed into the binary. These custom tools and systems were instrumental in bringing the game to life within the constrained timeframe of approximately 60 hours. This endeavor stands as a testament to my creativity and technical prowess, serving as my entry for the inaugural FlashPunk Game Competition.`,
      `Unfortunately, with the flash end of life declaration by Adobe, playing the game is not as simple as it had been when I published it. I made use of the Ruffle player to make the gameplay video. I may republish the game in the future.`,
    ],
    screenshots: [
      {
        id: "1c804bda-62e5-4ba6-97f5-d9cac5639c61",
        imageUrl: SS01,
        imageAlt: "D10FP72HRGCE title logo",
      },
    ],
    videos: [
      {
        id: "00ef346b-57ab-4097-9567-08ce14e899bc",
        videoUrl:
          "https://www.youtube.com/embed/0ToHXpceT1E?si=PkJST1GLyEPiu_-2",
      },
    ],
  },
  {
    id: "527a3edf-ca86-4d09-8d86-3d99ecb29e62",
    name: "Witch Color",
    tagline: "Witch Color Should I Mix?",
    description: [
      `For the second Pixel Weekend Jam on itch.io, this creation soared to a commendable fifth place among 31 competing entries. I was responsible for part of the game design, the programming, and audio, meticulously crafting each facet to ensure an engaging experience. My wife played a pivotal role, infusing the game with visual allure through her stunning artwork.`,
      `The gameplay revolved around the captivating challenge of mixing vibrant potions to unlock a spectrum of new colors. This mechanic enticed players to explore various combinations, adding an element of discovery to the experience. Leveraging SDL and the C programming language, I brought this concept to life.`,
      `Building games in a short amount of time is really fun and challenging.`,
    ],
    screenshots: [
      {
        id: "3eefd75b-0f13-4311-a208-abffef6bbbac",
        imageUrl:
          "https://img.itch.zone/aW1hZ2UvMjM2MzExLzExMjM3MTMucG5n/original/fa8Mzo.png",
        imageAlt: "Witch Color Screenshot",
        portrait: true,
      },
      {
        id: "110b1352-371c-4ee2-a922-3aaf0807f91c",
        imageUrl:
          "https://img.itch.zone/aW1hZ2UvMjM2MzExLzExMjM3MTYucG5n/original/lxJvIW.png",
        imageAlt: "Witch Color Screenshot",
        portrait: true,
      },
      {
        id: "3109cd60-9364-4f4c-b2e7-b84a99bec1de",
        imageUrl:
          "https://img.itch.zone/aW1hZ2UvMjM2MzExLzExMjM3MTUucG5n/original/YfIfvf.png",
        imageAlt: "Witch Color Screenshot",
        portrait: true,
      },
      {
        id: "3cc0dc22-3082-4c49-9809-72a069084c64",
        imageUrl:
          "https://img.itch.zone/aW1hZ2UvMjM2MzExLzExMjM3MTkucG5n/original/FNacnp.png",
        imageAlt: "Witch Color Screenshot",
        portrait: true,
      },
    ],

    videos: [],
    link: {
      label: "Check it out on itch.io",
      href: "https://richardmarks.itch.io/witch-color-jam",
    },
  },
];

export function Games() {
  return (
    <>
      <Category
        id="games"
        icon={GamesCategoryIcon}
        iconAlt="Game Controller Icon"
        name="Games"
        description={GAMES_DESC}
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
