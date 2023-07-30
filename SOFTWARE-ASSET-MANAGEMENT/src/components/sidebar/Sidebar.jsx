import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const sidebarStyle = {
    width: '10%',
    height: 'auto',
    backgroundColor: 'dark',
    opacity: 0.2,
    color: 'black',
  };
  const linkStyle = {
    color: '#FFFFFF',
  };
  return (
    <Nav className="flex-column bg-dark text-white" style={sidebarStyle}>
      <Nav.Item>
        <Nav.Link href="#home" style={linkStyle}>
          <FontAwesomeIcon icon={faHome} /> nav items
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;
