import type { Component } from "solid-js";
import { WhoamiCommand } from "./commands/WhoamiCommand";
import { ContactCommand } from "./commands/ContactCommand";

interface WelcomeMessageProps {
  showToast?: (message: string, type?: "success" | "error") => void;
}

export const WelcomeMessage: Component<WelcomeMessageProps> = (props) => {
  return (
    <>
      ═══════════════════════════════════════════════════════════════
      <br />
      <br />
      <WhoamiCommand />
      <br />
      <br />
      <ContactCommand showToast={props.showToast} />
      <br />
      <br />
      ═══════════════════════════════════════════════════════════════
    </>
  );
};
