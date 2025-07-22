import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const isOngoing = cohort.currentStatus?.toLowerCase().trim() === 'ongoing';
  const statusColor = isOngoing ? 'green' : 'blue';

  const boxStyle = {
    borderLeftColor: statusColor,
  };

  return (
    <div className={styles.box} style={boxStyle}>
      <h3 className={styles.statusTitle} style={{ color: statusColor }}>
        {cohort.cohortCode} - <span>{cohort.technology}</span>
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coachName}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
