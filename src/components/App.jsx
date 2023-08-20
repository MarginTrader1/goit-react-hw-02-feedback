import { Component } from 'react';

import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistic';
import { Feedback } from './FeedBackOptions/FeedBackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(state => ({ good: this.state.good + 1 }));
  };

  neutralFeedback = () => {
    this.setState(state => ({ neutral: this.state.neutral + 1 }));
  };

  badFeedback = () => {
    this.setState(state => ({ bad: this.state.bad + 1 }));
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
    this.setState(state => ({ positiveFeedback: positiveFeedback }));
  };

  render() {
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <Feedback
            goodFeedback={this.goodFeedback}
            neutralFeedback={this.neutralFeedback}
            badFeedback={this.badFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistic">
          <Statistics data={this.state} />
        </SectionTitle>
      </>
    );
  }
}
