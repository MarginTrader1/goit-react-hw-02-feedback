import { Li } from './Statistic.styled';

export const Statistics = ({ data }) => {
  const { good, neutral, bad } = data;
  return (
    <>
      <ul>
        <Li>
          <b>Good:</b> {good}
        </Li>
        <Li>
          <b>Neutral:</b> {neutral}
        </Li>
        <Li>
          <b>Bad:</b> {bad}
        </Li>
        <Li>
          <b>Total:</b> {good + neutral + bad}
        </Li>
        <Li>
          <b>Positive feedback:</b>{' '}
          {Math.round((good / (good + neutral + bad)) * 100)}%
        </Li>
      </ul>
    </>
  );
};
