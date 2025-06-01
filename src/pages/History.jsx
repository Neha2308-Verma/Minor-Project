
import './History.css';

const History = () => {
  // Sample data for the history table
  const historyData = [
    { status: 'Awake', time: '16:40:12', date: '07 May 2025', alert: '-' },
    { status: 'Drowsy', time: '16:55:44', date: '07 May 2025', alert: 'Triggered' },
    { status: 'Awake', time: '16:57:10', date: '07 May 2025', alert: '-' },
    { status: 'Drowsy', time: '17:05:45', date: '07 May 2025', alert: 'Triggered' },
    { status: 'Sleeping', time: '17:09:21', date: '07 May 2025', alert: 'Triggered' },
    { status: 'Awake', time: '17:11:06', date: '07 May 2025', alert: '-' },
  ];

  return (
    <div className="history-container">
      <div className="history-header">
        <h1>Drowsiness History</h1>
      </div>
      
      <div className="history-content">
        <table className="history-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Time</th>
              <th>Date</th>
              <th>Alert</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.status}</td>
                <td>{entry.time}</td>
                <td>{entry.date}</td>
                <td className={entry.alert !== '-' ? 'alert-triggered' : ''}>{entry.alert}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;