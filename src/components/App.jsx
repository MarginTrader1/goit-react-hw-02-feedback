import { Component } from 'react';

import { SectionTitle } from './SectionTitle/SectionTitle';
import { Statistics } from './Statistics/Statistic';
import { Feedback } from './FeedBackOptions/FeedBackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // методы изменение state
  goodFeedback = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };

  neutralFeedback = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };

  badFeedback = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };

  render() {
    // проверяем значения state во время рендера компонентов, если есть фидбэки -> рендерим статистику фидбэков
    if (this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0) {
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
      // если фидбэков нет -> рендерим компонент Notification
    } else {
      return (
        <>
          <SectionTitle title="Please leave feedback">
            <Feedback
              goodFeedback={this.goodFeedback}
              neutralFeedback={this.neutralFeedback}
              badFeedback={this.badFeedback}
            />
          </SectionTitle>
          <SectionTitle>
            <Notification title="There is no feedback" />
          </SectionTitle>
        </>
      );
    }
  }
}
