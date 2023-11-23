import { useContext } from "react";
import { createContext } from "react";

export const LIGHTBOX_STATUS = {
  LIGHTBOX_HIDDEN: "lightbox-hidden",
  LIGHTBOX_VISIBLE: "lightbox-visible",
};

export const LightboxContext = createContext();

export function useLightbox() {
  return useContext(LightboxContext);
}
