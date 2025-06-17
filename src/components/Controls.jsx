
// import './Controls.css';

// const Controls = () => {
//   return (
//     <div className="controls">
//       <button className="control-btn start">Start camera</button>
//       <button className="control-btn stop">Stop camera</button>
//     </div>
//   );
// };

// export default Controls;
// 
import './Controls.css';

const Controls = ({ cameraActive, onStartCamera, onStopCamera }) => {
  return (
    <div className="controls">
      <button 
        className={`control-btn start ${cameraActive ? 'disabled' : ''}`}
        onClick={onStartCamera}
        disabled={cameraActive}
      >
        {cameraActive ? 'Camera Running' : 'Start Camera'}
      </button>
      <button 
        className={`control-btn stop ${!cameraActive ? 'disabled' : ''}`}
        onClick={onStopCamera}
        disabled={!cameraActive}
      >
        Stop Camera
      </button>
    </div>
  );
};

export default Controls;