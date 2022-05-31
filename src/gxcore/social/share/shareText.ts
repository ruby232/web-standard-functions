import { msg } from "../../../misc/msg";

/**
 * @param text
 * @param url
 * @param title
 */
export const shareText = (
  text: string,
  url?: string,
  title?: string
): Promise<void> => {
  const nav: any = window.navigator;
  if (nav && nav.share) {
    return nav.share({ title, url, text });
  } else {
    return msg("Share API not available in this browser", "status");
  }
};
