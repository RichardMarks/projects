import { Link } from "./Link";

/* eslint-disable react/prop-types */
const VIDEO_URL =
  "https://cdn.pixabay.com/vimeo/365890980/abstract-27726.mp4?width=640&hash=d45867f83b48e0a39f8102d2a97e668e658f6f6f";

export function FullScreenVideo({ url }) {
  return (
    <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover opacity-50"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function ExploreButton() {
  return (
    <div>
      <div className="-rotate-90 inline-block pb-3">
        <span className="inline-block text-green-500 text-4xl animate-bounce">
          ↓
        </span>
      </div>
      <Link
        href="#category-games"
        className="text-gray-900 font-semibold mt-20 inline-block px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 hover:scale-105 ease-out duration-300"
      >
        Explore My Projects
      </Link>

      <div className="rotate-90 inline-block pb-3">
        <span className="inline-block text-green-500 text-4xl animate-bounce">
          ↓
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full h-screen">
      <FullScreenVideo url={VIDEO_URL} />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="flex flex-col justify-center items-center text-center absolute inset-0 px-2 md:px-0">
        <h2 className="text-1xl font-bold text-white -skew-y-3">
          Hello, visitor. You have luckily stumbled upon
        </h2>
        <h1 className="mt-3 text-6xl md:text-8xl font-bold text-white animate-pulse -skew-y-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-green-500 to-purple-500">
            My Projects
          </span>
        </h1>

        <h2 className="text-1xl mt-5 font-bold text-green-500 -skew-y-3">
          Scroll down or click the button to view projects that I have worked on
        </h2>
        <ExploreButton />
      </div>
    </section>
  );
}
