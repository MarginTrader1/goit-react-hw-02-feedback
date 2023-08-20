export const Statistics = ({data}) => {
const { good, neutral, bad } = data;
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {good + neutral + bad}</li>
        <li>Positive feedback: {Math.round(good/(good + neutral + bad)*100)}%</li>
      </ul>
    </>
  );
};
