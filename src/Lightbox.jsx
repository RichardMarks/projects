/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { LIGHTBOX_STATUS, LightboxContext } from "./LightboxContext";

export const LightboxProvider = ({ children }) => {
  const [lightboxStatus, setLightboxStatus] = useState(
    LIGHTBOX_STATUS.LIGHTBOX_HIDDEN
  );
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl) => {
    if (window.innerWidth >= 1024) {
      setSelectedImage(imageUrl);
      setLightboxStatus(LIGHTBOX_STATUS.LIGHTBOX_VISIBLE);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxStatus(LIGHTBOX_STATUS.LIGHTBOX_HIDDEN);
  };

  const contextValue = {
    status: lightboxStatus,
    imageUrl: selectedImage,
    show: handleImageClick,
    hide: handleCloseLightbox,
  };

  return (
    <LightboxContext.Provider value={contextValue}>
      {children}
      <Lightbox />
    </LightboxContext.Provider>
  );
};

function Lightbox() {
  const lightbox = useContext(LightboxContext);

  if (lightbox.status == LIGHTBOX_STATUS.LIGHTBOX_HIDDEN) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 z-[999] w-screen h-screen bg-black/70 flex justify-center items-center cursor-pointer"
      onClick={lightbox.hide}
    >
      <img
        src={lightbox.imageUrl}
        alt="lightbox"
        className="max-w-screen max-h-screen object-cover cursor-pointer"
        onClick={lightbox.hide}
      />
    </div>,
    document.getElementById("lightbox-root")
  );
}
