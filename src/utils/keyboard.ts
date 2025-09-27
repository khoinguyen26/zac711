/**
 * Handles keyboard input for the terminal interface, managing command execution
 * and history navigation using arrow keys and enter key.
 * 
 * This function implements typical terminal keyboard behaviors:
 * - Enter: Execute the current command
 * - Arrow Up: Navigate to previous command in history
 * - Arrow Down: Navigate to next command in history
 * 
 * @param e - The keyboard event from the input element
 * @param input - Signal accessor for current input value
 * @param setInput - Signal setter to update input value
 * @param commandHistory - Signal accessor for array of previous commands
 * @param historyIndex - Signal accessor for current position in history (-1 = no selection)
 * @param setHistoryIndex - Signal setter to update history position
 * @param executeCommand - Function to execute the entered command
 */
export const handleKeyboardInput = (
  e: KeyboardEvent,
  input: () => string,
  setInput: (value: string) => void,
  commandHistory: () => string[],
  historyIndex: () => number,
  setHistoryIndex: (index: number) => void,
  executeCommand: (cmd: string) => void
) => {
  // Execute command on Enter key
  if (e.key === 'Enter') {
    e.preventDefault();
    executeCommand(input());
    setInput('');
    setHistoryIndex(-1); // Reset history navigation
  } 
  // Navigate to previous command in history
  else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const cmds = commandHistory();
    if (cmds.length > 0) {
      // If no history item selected, go to most recent command
      // Otherwise, move one step back in history
      const newIndex = historyIndex() === -1 ? cmds.length - 1 : Math.max(0, historyIndex() - 1);
      setHistoryIndex(newIndex);
      setInput(cmds[newIndex]);
    }
  } 
  // Navigate to next command in history or clear input
  else if (e.key === 'ArrowDown') {
    e.preventDefault();
    const cmds = commandHistory();
    if (historyIndex() !== -1) {
      const newIndex = historyIndex() + 1;
      // If we've reached the end of history, clear input and reset index
      if (newIndex >= cmds.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(cmds[newIndex]);
      }
    }
  }
};