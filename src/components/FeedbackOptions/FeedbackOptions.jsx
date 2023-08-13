import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackButton.styles'; 

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
