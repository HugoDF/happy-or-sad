import React from 'react';
function StatusOverlay ({ isLoading, error }) {
  if(isLoading && !error) {
    return (
      <div className="status-overlay">
        <div className="status-overlay-inner">Loading</div>
      </div>
    );
  }
  if(error) {
    return (
      <div className="status-overlay">
        <div className="status-overlay-inner">Something happened, please try again</div>
      </div>
    );
  }
  return null;
}

export default StatusOverlay;
