
import './StatusPanel.css';
import { useState, useEffect } from 'react';

const StatusPanel = ({ currentStatus, cameraActive }) => {
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [sessionDuration, setSessionDuration] = useState('00:00:00');
  const [alertCount, setAlertCount] = useState(0);

  // Start session timer when camera becomes active
  useEffect(() => {
    if (cameraActive && !sessionStartTime) {
      setSessionStartTime(new Date());
    } else if (!cameraActive) {
      setSessionStartTime(null);
      setSessionDuration('00:00:00');
      setAlertCount(0);
    }
  }, [cameraActive, sessionStartTime]);

  // Update session duration
  useEffect(() => {
    let interval;
    if (sessionStartTime && cameraActive) {
      interval = setInterval(() => {
        const now = new Date();
        const diff = now - sessionStartTime;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setSessionDuration(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [sessionStartTime, cameraActive]);

  // Count alerts
  useEffect(() => {
    if (currentStatus === 'SLEEPING !!!' || currentStatus === 'DIZZY') {
      setAlertCount(prev => prev + 1);
    }
  }, [currentStatus]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE':
        return '#10B981';
      case 'DIZZY':
        return '#F59E0B';
      case 'SLEEPING !!!':
        return '#EF4444';
      case 'STARTING':
        return '#3B82F6';
      case 'CAMERA_ERROR':
      case 'DETECTION_ERROR':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ACTIVE':
        return '👁️';
      case 'DIZZY':
        return '😴';
      case 'SLEEPING !!!':
        return '😴💤';
      case 'STARTING':
        return '🔄';
      case 'CAMERA_ERROR':
      case 'DETECTION_ERROR':
        return '❌';
      default:
        return '⭕';
    }
  };

  return (
    <div className="status-panel">
      <div className="status-header">
        <h2>Monitoring Status</h2>
      </div>
      
      <div className="status-grid">
        <div className="status-item">
          <div className="status-label">Current Status</div>
          <div 
            className="status-value current-status"
            style={{ color: getStatusColor(currentStatus) }}
          >
            <span className="status-icon">{getStatusIcon(currentStatus)}</span>
            {currentStatus || 'INACTIVE'}
          </div>
        </div>

        <div className="status-item">
          <div className="status-label">Session Duration</div>
          <div className="status-value">
            {sessionDuration}
          </div>
        </div>

        <div className="status-item">
          <div className="status-label">Alert Count</div>
          <div className="status-value">
            <span className="alert-count">{alertCount}</span>
          </div>
        </div>

        <div className="status-item">
          <div className="status-label">Camera Status</div>
          <div className={`status-value camera-status ${cameraActive ? 'active' : 'inactive'}`}>
            <span className="camera-indicator"></span>
            {cameraActive ? 'Active' : 'Inactive'}
          </div>
        </div>
      </div>

      {currentStatus === 'SLEEPING !!!' && (
        <div className="alert-banner">
          <div className="alert-text">
            ⚠️ DROWSINESS DETECTED - WAKE UP! ⚠️
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusPanel;