/* eslint-disable react/prop-types */

import { Carousel } from "flowbite-react";
import { useLightbox } from "./LightboxContext";
import { Video } from "./Video";

const USE_LAZY_VIDEOS = true;

function ProductFeaturedScreenshot({ product, useAlternateLayout }) {
  const lightbox = useLightbox();
  // if there are no screenshots, nothing to render
  if (!product.screenshots) {
    return null;
  }

  // features screenshot is the first screenshot
  const screenshot = product.screenshots.slice().shift();
  // if no screenshot, then render nothing
  if (!screenshot) {
    return null;
  }

  const figureClass = `cursor-pointer w-full my-4 md:mb-8 md:w-1/2 md:my-0 ${
    useAlternateLayout
      ? "md:float-right md:ml-4 lg:ml-8"
      : "md:float-left md:mr-4 lg:mr-8"
  }`;

  const { imageUrl, imageAlt, portrait } = screenshot;

  const imageClass = `${
    portrait ? "aspect-[9/16]" : "aspect-video"
  } rounded-lg shadow-lg shadow-blue-900 p-0.5 bg-blue-800 `;

  return (
    <figure className={figureClass} onClick={() => lightbox.show(imageUrl)}>
      <img
        src={imageUrl}
        data-lb="true"
        className={imageClass}
        alt={imageAlt}
      />
    </figure>
  );
}

function ProductDescription({ product }) {
  const { description } = product;

  // if there is no description, render nothing
  if (!description) {
    return null;
  }

  return (
    <>
      {description.map((text, index) => {
        const key = `product-description-${index}`;
        const isLast = index === description.length - 1;
        const pClassName = `pointer-events-none text-lg lg:text-xl text-justify leading-relaxed drop-shadow-lg tracking-wide lg:tracking-wider ${
          isLast ? "" : "mb-10"
        }`;
        return (
          <p key={key} className={pClassName}>
            {text}
          </p>
        );
      })}
    </>
  );
}

function ProductLink({ product }) {
  const { link } = product;

  if (!link) {
    return null;
  }

  const { label, href } = link;

  const small =
    "text-xl text-semibold text-gray-900 inline-block text-center w-full  px-6 py-4 rounded-lg bg-green-500 ";
  const medium = "md:mx-auto md:w-fit";
  const large = "";
  const anchorClassName = `${small} ${medium} ${large} hover:bg-green-600 hover:scale-105 ease-out duration-300`;

  return (
    <div className="my-4 w-full px-8 flex justify-content">
      <a
        className={anchorClassName}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    </div>
  );
}

function ProductVideos({ product }) {
  const { videos = [] } = product;
  return (
    <>
      <div className="clear-both" />
      {videos.map((video) => {
        return (
          <div
            key={video.id}
            className="w-full h-full mt-5 md:mx-auto md:max-w-[560px] md:max-h-[315px] lg:min-h-[315px]"
          >
            <Video
              url={video.videoUrl}
              lazy={USE_LAZY_VIDEOS}
              thumb={video.thumbUrl}
            />
          </div>
        );
      })}
    </>
  );
}

function ProductScreenshots({ product }) {
  const lightbox = useLightbox();
  const { screenshots = [] } = product;
  const screenshotsRemaining = screenshots.slice(1);
  if (!screenshotsRemaining.length) {
    return null;
  }
  return (
    <div className="grid grid-flow-col">
      {screenshotsRemaining.map((screenshot) => {
        const figureClass = `w-full my-4 md:mb-8 md:w-1/2 md:my-0 cursor-pointer`;

        const { imageUrl, imageAlt, portrait, id } = screenshot;

        const imageClass = `${
          portrait ? "aspect-[9/16]" : "aspect-video"
        } rounded-lg shadow-lg shadow-blue-900 p-0.5 bg-blue-800`;

        return (
          <figure
            key={id}
            className={figureClass}
            onClick={() => lightbox.show(imageUrl)}
          >
            <img
              src={imageUrl}
              data-lb="true"
              className={imageClass}
              alt={imageAlt}
            />
          </figure>
        );
      })}
    </div>
  );
}

function ProductCarousel({ product }) {
  const { carousel, screenshots = [], videos = [] } = product;
  if (!carousel) {
    return (
      <>
        <ProductVideos product={product} />
        <ProductScreenshots product={product} />
      </>
    );
  }

  const screenshotsWithoutFeature = screenshots.slice(1);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {videos.map((video) => {
          return (
            <div
              key={video.id}
              className="w-full h-full mt-5 md:mx-auto md:max-w-[560px] md:max-h-[315px] lg:min-h-[315px]"
            >
              <Video url={video.videoUrl} lazy={USE_LAZY_VIDEOS} />
            </div>
          );
        })}
        {screenshotsWithoutFeature.map((screenshot) => {
          const { imageUrl, imageAlt, id, portrait } = screenshot;
          const imageClass = `w-full h-full md:max-h-[315px] lg:min-h-[315px] md:w-1/2 ${
            portrait ? "aspect-[9/16]" : "aspect-video"
          } `;
          return (
            <div key={id} className={imageClass}>
              <img
                src={imageUrl}
                data-lb="true"
                // className={imageClass}
                alt={imageAlt}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export function Product({ product, useAlternateLayout }) {
  const { id, name, tagline } = product;

  const articleClassname = `lg:mx-auto lg:max-w-7xl mb-20 ${
    useAlternateLayout
      ? "bg-violet-800/20 px-2 md:px-8 py-8 rounded-lg"
      : "bg-blue-900/20 px-2 md:px-8 py-8 rounded-lg"
  }`;

  return (
    <article id={`product-${id}`} className={articleClassname}>
      <ProductFeaturedScreenshot
        product={product}
        useAlternateLayout={useAlternateLayout}
      />
      <h4 className="pointer-events-none text-3xl lg:text-4xl font-semibold mb-2 tracking-widest">
        {name}
      </h4>
      {tagline ? (
        <p className="pointer-events-none text-xl lg:text-2xl text-justify leading-relaxed drop-shadow-lg tracking-wide lg:tracking-wider mb-10">
          {tagline}
        </p>
      ) : null}

      <ProductDescription product={product} />
      <ProductLink product={product} />
      <ProductCarousel product={product} />
    </article>
  );
}
