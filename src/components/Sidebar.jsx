import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to='/' className='nav-link'>
      <i className="bi bi-house-door"></i>
      </Link>
      <Link to="/notes" className="nav-link">
        <i className="bi bi-sticky"></i>
      </Link>
      <Link to="/history" className="nav-link">
        <i className="bi bi-clock"></i>
      </Link>
    </div>
  );
};

export default Sidebar;