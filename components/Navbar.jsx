
import 'remixicon/fonts/remixicon.css'; // Import Remix icons CSS
import './Navbar.css'; 
function Navbar() {
  

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
          style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', marginRight: '10px' }}
        />
        <h2 className="brand-name">Resume Mitra</h2>
      </div>
      
      <ul className="navbar-right">
        <li className="nav-item">
          <i className="ri-settings-3-fill"></i>
          <span>Settings</span>
        </li>
        <li className="nav-item">Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
