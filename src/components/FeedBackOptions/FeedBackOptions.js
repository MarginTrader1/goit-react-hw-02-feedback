export const Feedback = ({ goodFeedback, neutralFeedback, badFeedback}) => {
  return (
    <>
      <div>
        <button type="button" onClick={goodFeedback}>Good</button>
        <button type="button" onClick={neutralFeedback}>Neutral</button>
        <button type="button" onClick={badFeedback}>Bad</button>
      </div>
    </>
  );
};
