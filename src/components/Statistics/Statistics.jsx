import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticItem,
} from '../Statistics/Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrapper>
      <StatisticItem color="salad">Good: {good}</StatisticItem>
      <StatisticItem color="yellow">Neutral: {neutral}</StatisticItem>
      <StatisticItem color="red">Bad: {bad}</StatisticItem>
      <StatisticItem color="gray">Total: {total}</StatisticItem>
      <StatisticItem color="gray">
        Positive Feedback: {positivePercentage}%
      </StatisticItem>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
