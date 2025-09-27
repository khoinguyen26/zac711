import type { Component } from "solid-js";
import { createSignal, onMount, For, createEffect } from "solid-js";
import type { CommandHistory } from "../types/terminal";
import { createCommandHandlers, getWelcomeMessage } from "../utils/commands";
import { handleKeyboardInput } from "../utils/keyboard";
import { useToast } from "./ToastProvider";
import BashComment from "./BashComment";

const getOperatingSystem = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();

  if (platform.includes("mac") || userAgent.includes("mac")) return "mac";
  if (platform.includes("win") || userAgent.includes("windows"))
    return "windows";
  if (platform.includes("linux") || userAgent.includes("linux")) return "linux";
  if (userAgent.includes("android")) return "android";
  if (userAgent.includes("iphone") || userAgent.includes("ipad")) return "ios";

  return "unix";
};

/**
 * Main Terminal component that provides an interactive command-line interface
 * for a portfolio website. Handles user input, command execution, and displays
 * command history with a terminal-like appearance.
 */
const Terminal: Component = () => {
  // Detect user's operating system
  const operatingSystem = getOperatingSystem();
  const promptPrefix = `zac@${operatingSystem} ~`;

  // Get toast functionality
  const { showToast } = useToast();

  // State for current user input
  const [input, setInput] = createSignal("");

  // State for terminal history (commands and their outputs)
  const [history, setHistory] = createSignal<CommandHistory[]>([]);

  // State for command history (for up/down arrow navigation)
  const [commandHistory, setCommandHistory] = createSignal<string[]>([]);

  // State for tracking position in command history navigation (-1 = no selection)
  const [historyIndex, setHistoryIndex] = createSignal(-1);

  // Reference to the textarea input element for focus management
  let inputRef: HTMLTextAreaElement | undefined;

  let terminalRef: HTMLDivElement | undefined;

  // Create command handlers with access to state setters and toast
  const commands = createCommandHandlers(setHistory, commandHistory, showToast);

  /**
   * Executes a command entered by the user.
   * Handles command validation, execution, and history management.
   *
   * @param cmd - The command string to execute
   */
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Ignore empty commands
    if (trimmedCmd === "") return;

    // Add command to history for navigation
    setCommandHistory((prev) => [...prev, trimmedCmd]);

    // Execute command or show error for unknown commands
    const output = commands[trimmedCmd]
      ? commands[trimmedCmd]()
      : `<span class="error-text">Command not found: ${trimmedCmd}.</span> Type <span class="highlight">'help'</span> for available commands.`;

    // Add to terminal history (except for 'clear' command which handles its own state)
    if (trimmedCmd !== "clear") {
      setHistory((prev) => [
        ...prev,
        {
          command: trimmedCmd,
          output,
          timestamp: new Date(),
        },
      ]);
    }
  };

  /**
   * Handles keyboard events from the input textarea.
   * Delegates to the keyboard utility for consistent behavior.
   */
  const handleKeyDown = (e: KeyboardEvent) => {
    handleKeyboardInput(
      e,
      input,
      setInput,
      commandHistory,
      historyIndex,
      setHistoryIndex,
      executeCommand,
    );
  };

  /**
   * Component initialization - focuses input and displays welcome message
   */
  onMount(() => {
    // Focus the input for immediate typing
    if (inputRef) {
      inputRef.focus();
    }

    // Display initial welcome message with portfolio information
    const welcomeOutput = getWelcomeMessage(showToast);

    setHistory([
      {
        command: "init", // Special command marker for welcome message
        output: welcomeOutput,
        timestamp: new Date(),
      },
    ]);
  });

  createEffect(() => {
    const historyItems = history();

    if (terminalRef && historyItems.length > 0) {
      setTimeout(() => {
        terminalRef.scrollTop = terminalRef.scrollHeight;
      }, 10);
    }
  });

  return (
    <div class="terminal" ref={terminalRef}>
      {/* Terminal header with title and instructions */}
      <div class="terminal-header">Portfolio Terminal v0.0.1</div>

      {/* Decorative bash comments for visual appeal */}
      <BashComment message="# Hey there!" />
      <BashComment message="# Use 'help' to see available commands" />

      {/* Main terminal content area displaying command history */}
      <div class="terminal-content">
        <For each={history()}>
          {(item) => (
            <div>
              {/* Show command prompt for user-entered commands (not init) */}
              {item.command !== "init" && (
                <div class="command-text" style="margin: 10px 0 5px 0;">
                  {promptPrefix}{" "}
                  <span class="command-text-2">$ {item.command}</span>
                </div>
              )}
              {/* Command output with HTML rendering and pre-formatted spacing */}
              <div style="white-space: pre-line; margin-bottom: 10px;">
                {typeof item.output === "string" ? (
                  <div innerHTML={item.output}></div>
                ) : (
                  item.output
                )}
              </div>
            </div>
          )}
        </For>
      </div>

      {/* Input area with prompt and textarea */}
      <div class="terminal-input-line">
        <span class="terminal-prompt">
          {promptPrefix} <span class="command-text-2">$</span>
        </span>
        <textarea
          ref={inputRef}
          class="terminal-input"
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command..."
        />
      </div>
    </div>
  );
};

export default Terminal;
