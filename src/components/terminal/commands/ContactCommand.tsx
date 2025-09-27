import type { Component } from "solid-js";
import { copyToClipboard } from "../../../utils/clipboard";

interface ContactCommandProps {
  showToast?: (message: string, type?: "success" | "error") => void;
}

export const ContactCommand: Component<ContactCommandProps> = (props) => {
  const handleEmailClick = async () => {
    if (!props.showToast) return;

    const result = await copyToClipboard("khoi.work261101@gmail.com");
    props.showToast(result.message, result.success ? "success" : "error");
  };

  return (
    <>
      <span class="section-title">Contact Information:</span>
      <br />
      <br />
      📧 Email:{" "}
      <span
        class="contact-link-clickable"
        onClick={handleEmailClick}
        title="Click to copy email address"
      >
        khoi.work261101@gmail.com
      </span>
      <br />
      💼 LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/zacnguyen/"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-link"
      >
        Khoi Nguyen
      </a>
      <br />
      🐙 GitHub:{" "}
      <a
        href="https://github.com/khoinguyen26"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-link"
      >
        khoinguyen26
      </a>
      <br />
      📱 X:{" "}
      <a
        href="https://x.com/zac_711"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-link"
      >
        @zac_711
      </a>
    </>
  );
};
