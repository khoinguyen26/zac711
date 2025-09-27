import type { JSX } from "solid-js";
import type { CommandHandler } from "../types/terminal";
import {
  HelpCommand,
  ContactCommand,
  WhoamiCommand,
  HistoryCommand,
  WelcomeMessage,
} from "../components/terminal";

/**
 * Creates an object containing all available terminal commands and their handlers.
 * Each command returns JSX elements or HTML strings that will be displayed in the terminal.
 *
 * @param setHistory - Function to update the terminal's command history
 * @param commandHistory - Signal accessor for the list of executed commands
 * @param showToast - Function to show toast notifications
 * @returns Object mapping command names to their handler functions
 */
export const createCommandHandlers = (
  setHistory: (fn: (prev: any[]) => any[]) => void,
  commandHistory: () => string[],
  showToast?: (message: string, type?: "success" | "error") => void,
): CommandHandler => ({
  help: () => <HelpCommand />,

  whoami: () => <WhoamiCommand />,

  contact: () => <ContactCommand showToast={showToast} />,

  clear: () => {
    setHistory(() => []);
    return "";
  },

  /** Display the history of executed commands */
  history: () => <HistoryCommand commandHistory={commandHistory} />,
});

/**
 * Generates the initial welcome message displayed when the terminal loads.
 * Combines about and contact information to create an introduction.
 *
 * @returns JSX element for the welcome message
 */
export const getWelcomeMessage = (
  showToast?: (message: string, type?: "success" | "error") => void,
): JSX.Element => {
  return <WelcomeMessage showToast={showToast} />;
};
