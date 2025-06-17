import React from 'react';
import './CameraArea.css';
import Webcam from 'react-webcam';

const CameraArea = ({ cameraActive, currentStatus, processedImageData }) => {
  const webcamRef = React.useRef(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user"
  };

  return (
    <div className="camera-area">
      <div className="camera-container">
        {cameraActive ? (
          <>
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              mirrored={true}
              className="camera-feed"
            />
            {processedImageData && (
              <img
                src={`data:image/jpeg;base64,${processedImageData}`}
                alt="Processed feed"
                className="processed-feed"
              />
            )}
            <div className={`status-overlay ${currentStatus.toLowerCase()}`}>
              {currentStatus}
            </div>
          </>
        ) : (
          <div className="camera-placeholder">
            <p>Camera is inactive</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraArea;