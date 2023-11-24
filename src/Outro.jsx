import { FullScreenVideo } from "./Hero";

const VIDEO_URL =
  "https://cdn.pixabay.com/vimeo/365890980/abstract-27726.mp4?width=640&hash=d45867f83b48e0a39f8102d2a97e668e658f6f6f";

export function Outro() {
  return (
    <footer id="outro" className="h-screen relative overflow-hidden">
      <FullScreenVideo url={VIDEO_URL} />
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-5 font-bold text-green-500">
            Oh wow, you actually made it all the way down here!
          </h2>
          <p className="text-3xl mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-green-500 to-purple-500">
              This website was made with <i className="text-red-500">♥</i> by
              Richard Marks
            </span>
          </p>
          <p className="text-1xl font-bold text-gray-300">
            &copy; 2023 Richard Marks
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/RichardMarks"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/richardmarksdeveloperx"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            My LinkedIn
          </a>
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://richardmarks.us/resume.pdf"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            My Resumé
          </a>
        </div>
      </div>
    </footer>
  );
}
