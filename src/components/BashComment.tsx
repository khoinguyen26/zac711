//Props interface for the BashComment component
type BashCommentProps = {
  /** The comment message to display (should include '#' prefix) */
  message: string;
};

/**
 * Simple component that renders bash-style comments in the terminal
 * Used to display helpful hints or decorative messages that look like shell comments
 *
 * @param props - Component properties
 * @returns JSX element with styled comment text
 */
const BashComment = ({ message }: BashCommentProps) => {
  return <div class="bash-comment">{message}</div>;
};

export default BashComment;
