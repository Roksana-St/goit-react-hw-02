import React from 'react';
import styles from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
