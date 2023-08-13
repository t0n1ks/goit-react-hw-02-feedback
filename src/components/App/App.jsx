import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import {
  AppWrapper,
  Title,
  ContentWrapper,
  FeedbackMessage,
} from '../App/App.styles'; 

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    const options = Object.keys(this.state);

    return (
      <AppWrapper>
        <Title>Leave Feedback</Title>
        <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
        {total > 0 ? (
          <ContentWrapper>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </ContentWrapper>
        ) : (
          <FeedbackMessage>No feedback given</FeedbackMessage>
        )}
      </AppWrapper>
    );
  }
}

export default App;
