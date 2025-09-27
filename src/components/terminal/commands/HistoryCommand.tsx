import type { Component } from "solid-js";
import { For, Show } from "solid-js";

interface HistoryCommandProps {
  commandHistory: () => string[];
}

export const HistoryCommand: Component<HistoryCommandProps> = (props) => {
  const commands = () => props.commandHistory();

  return (
    <Show
      when={commands().length > 0}
      fallback={<span class="success-text">No command history yet.</span>}
    >
      <span class="highlight">Command History:</span>
      <br />
      <For each={commands()}>
        {(cmd, index) => (
          <>
            <span class="command-text">
              {index() + 1}. {cmd}
            </span>
            <br />
          </>
        )}
      </For>
    </Show>
  );
};

