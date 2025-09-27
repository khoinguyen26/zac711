export interface ClipboardResult {
  success: boolean;
  message: string;
}

/**
 * Copy text to clipboard using modern Clipboard API with fallback
 */
export const copyToClipboard = async (
  text: string,
): Promise<ClipboardResult> => {
  try {
    // Modern approach
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return { success: true, message: "Copied to clipboard!" };
    }

    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const success = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (success) {
      return { success: true, message: "Copied to clipboard!" };
    } else {
      throw new Error("Copy command failed");
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to copy to clipboard",
    };
  }
};

