import { List, Button } from "./FeedBackOptions.styled";

export const Feedback = ({ goodFeedback, neutralFeedback, badFeedback}) => {
  return (
    <>
      <List>
        <Button type="button" onClick={goodFeedback}>Good</Button>
        <Button type="button" onClick={neutralFeedback}>Neutral</Button>
        <Button type="button" onClick={badFeedback}>Bad</Button>
      </List>
    </>
  );
};
