import type { Component } from "solid-js";

export const WhoamiCommand: Component = () => {
  return (
    <>
      <span class="section-title">About Me:</span>
      <br />
      <br />
      I'm a software developer who enjoys building things and experimenting with
      new technologies.
      <br />
      In my spare time, I like tinkering with side projects, exploring tools,
      and learning by doing.
      <br />
      <br />
      <br />
      Currently building digital banking solutions @{" "}
      <a
        href="https://www.kal.com"
        target="_blank"
        rel="noopener noreferrer"
        class="highlight"
      >
        KAL
      </a>
      <br />
      <br />
      <br />
      <span class="highlight">Skills:</span> JavaScript, TypeScript, Node.js,
      Bun, C#/.NET
      <br />
      <span class="highlight">Experience:</span> 2+ years in software
      development
      <br />
      <span class="highlight">Interests:</span> Open source, TUI application,
      Neovim(btw)
      <br />
      <br />
      <span class="highlight">Fun fact:</span> I started my career wanting to be
      a backend engineer doing cool stuff with database, using cloud services to
      make the cloud cloudier and swore I'd never touch "UI" work, ever! ...yet
      somehow I kept getting jobs as a so-called "UI developer". Now I've made
      peace with it — I can do both, and I care more about delivering value to
      the project than chasing my favorite tech stack.
    </>
  );
};
