/* eslint-disable react/prop-types */
import { useState } from "react";
import { getVideoId } from "./getVideoId";

export function Video({ url, lazy }) {
  const videoId = getVideoId(url);
  const [waiting, setWaiting] = useState("waiting");

  if (!videoId) {
    return null;
  }

  const thumbnailMq = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  const thumbnailHq = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const thumbnailSd = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
  const thumbnailHd = `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const srcset = `${thumbnailMq} 320w ${thumbnailHq} 480w ${thumbnailSd} 640w ${thumbnailHd} 1920w`;

  return lazy ? (
    <>
      {waiting === "waiting" ? (
        <div
          onClick={() => setWaiting("ready")}
          className="relative bg-black after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-black/40 after:rounded-md after:h-[64px] after:w-[100px] before:drop-shadow-lg before:z-10 before:content-[''] before:border-solid before:border-t-[15px] before:border-r-0 before:border-b-[15px] before:border-l-[26px] before:border-l-white before:border-t-transparent before:border-b-transparent before:border-r-white before:absolute before:left-1/2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 cursor-pointer"
        >
          <img
            srcSet={srcset}
            src={thumbnailSd}
            alt=""
            className="w-full h-full aspect-video "
          />
        </div>
      ) : (
        <iframe
          className="aspect-video"
          width="100%"
          src={`${url}&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </>
  ) : (
    <iframe
      className="aspect-video"
      width="100%"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
