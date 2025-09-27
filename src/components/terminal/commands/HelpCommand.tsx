import type { Component } from "solid-js";

export const HelpCommand: Component = () => {
  return (
    <>
      <span class="highlight">Available commands:</span>
      <br />
      <span class="command-text">help</span> - Show this help message
      <br />
      <span class="command-text">whoami</span> - Who I am?
      <br />
      <span class="command-text">contact</span> - Show contact information
      <br />
      <span class="command-text">clear</span> - Clear terminal
      <br />
      <span class="command-text">history</span> - Show command history
    </>
  );
};
