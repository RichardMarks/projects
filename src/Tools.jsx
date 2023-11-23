import { Category } from "./Category";
import { Product } from "./Product";

import ToolsCategoryIcon from "./assets/tools_cat_icon.png";

const TOOLS_DESC = `These programs, essential in game development, serve diverse
purposes and exist in various forms. Ranging from straightforward
scripts and command-line tools to comprehensive applications, they
cater to specific needs within the game creation process. Some
streamline simple, repetitive tasks, while others are comprehensive
software packages providing a complete suite of features, offering
developers a spectrum of options to suit their unique workflows and
requirements.`;

import SS0 from "./assets/texpot-screenshot.png";
import SS1 from "./assets/slice-screenshot.png";

const products = [
  {
    id: "e1c7236a-4881-403b-abc6-0e7e75933a1f",
    name: "Texture Size Finder",
    // tagline: ""
    description: [
      `Texture Size Finder is a Python script I created to quickly find the best texture size for images. It figures out the smallest power-of-two dimensions that work well for textures. It's handy for developers working on graphics applications or games, making it easier to optimize textures for better performance and compatibility.`,
      `Powers of two, like 2, 4, 8, 16, etc., are crucial in video game graphics due to their role in texture sizes. Textures, the 'paint' for game surfaces, are arranged in grids. Using sizes that are powers of two helps computers, especially the Graphics Processing Units (GPUs), process these textures efficiently. These specific sizes fit neatly into the GPU's structure, akin to organizing books on a shelf of similar sizes for easy access. This alignment reduces memory usage and speeds up processing, ensuring smoother, glitch-free game visuals while optimizing performance behind the scenes.`,
      `When I crafted this script, the choices for determining ideal texture sizes were limited. Back then, the tools available were scarce, and I found myself in need of a quick solution for this precise task. So, I created this script to fill that gap—something that could swiftly calculate the best power-of-two dimensions for textures. While nowadays there might be more options on the market, this script was my personal answer to a problem I faced firsthand.`,
    ],
    screenshots: [
      {
        id: "8527ed4e-f056-47f5-8d8b-9ba4f1f2bd37",
        imageUrl: SS0,
        imageAlt: "Texture Size Finder Screenshot",
      },
    ],
    videos: [
      {
        id: "7b989866-b586-4a92-b2c6-9469f3eaf07c",
        videoUrl:
          "https://www.youtube.com/embed/PGIXazrNxaw?si=oLsULn0uX8-v75CT",
      },
    ],
  },
  {
    id: "3c2e5935-721a-401a-97a1-2f7b67641a3e",
    name: "Sprite Sheet Slicer",
    // tagline: ""
    description: [
      `Sprite Sheet Slicer was born from a personal necessity when I lacked internet access while honing my gamedev skills. Crafting this command-line tool in C filled the void, allowing me to efficiently slice large images into uniform cells to fit the workflow that suited me best.`,
    ],
    screenshots: [
      {
        id: "8527ed4e-f056-47f5-8d8b-9ba4f1f2bd37",
        imageUrl: SS1,
        imageAlt: "Sprite Sheet Slicer Screenshot",
      },
    ],
    videos: [
      {
        id: "2282cf10-4f99-4667-8ec3-f0f94d31f441",
        videoUrl:
          "https://www.youtube.com/embed/pB9-ygu7s_k?si=QspUbNX5vSudA3A0",
      },
    ],
  },
];

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
