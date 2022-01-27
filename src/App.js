import './App.css';

import { useState } from 'react';
import Statistics from './components/statistics/Statistics';
import FeedbackOptions from './components/feedback/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/notification/Notification';
export default function Feedback() {
  const [good, makeGoodFeedback] = useState(0);
  const [neutral, makeNeutralFeedback] = useState(0);
  const [bad, makeBadFeedback] = useState(0);

  const goodFeedback = () => {
    makeGoodFeedback(good + 1);
  };
  const neutralFeedback = () => {
    makeNeutralFeedback(neutral + 1);
  };
  const badFeedback = () => {
    makeBadFeedback(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 * (good / (good + neutral + bad)));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onGood={goodFeedback} onBad={badFeedback} onNeutral={neutralFeedback} />{' '}
      </Section>
      <Section title="Statistics">
        {good + neutral + bad > 0 && (
          <Statistics
            onTotal={countTotalFeedback()}
            onPercentage={countPositiveFeedbackPercentage()}
            bad={bad}
            good={good}
            neutral={neutral}
          />
        )}
      </Section>
      <Section>
        {good + neutral + bad === 0 && <Notification message="There is no feedback" />}
      </Section>
    </>
  );
}
