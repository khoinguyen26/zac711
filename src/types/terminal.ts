import { JSX } from "solid-js/jsx-runtime";

/**
 * Represents a single command entry in the terminal history
 * This includes the command itself, its output, and when it was executed
 */
export interface CommandHistory {
  /** The command that was executed */
  command: string;
  /** The output returned by the command (HTML string or JSX element) */
  output: string | JSX.Element;
  /** When the command was executed */
  timestamp: Date;
}

/**
 * Maps command names to their handler functions
 * Each command returns an HTML string or JSX element that will be displayed in the terminal
 */
export interface CommandHandler {
  [key: string]: () => string | JSX.Element;
}

/**
 * Complete state structure for the terminal component
 * Manages input, command history, and navigation state
 */
export interface TerminalState {
  /** Current input being typed by the user */
  input: string;
  /** Array of all executed commands and their outputs */
  history: CommandHistory[];
  /** List of previously executed commands for history navigation */
  commandHistory: string[];
  /** Current position in command history (-1 means no selection) */
  historyIndex: number;
}

/**
 * Function type for executing commands in the terminal
 * Takes a command string and processes it
 */
export type CommandExecutor = (cmd: string) => void;

