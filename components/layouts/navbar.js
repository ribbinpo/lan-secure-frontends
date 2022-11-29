import { Navbar } from "flowbite-react";
import { FcMindMap } from 'react-icons/fc';
const navbar = () => {
  
  return (
    <Navbar
    fluid={true}
    rounded={true}
    className="shadow-md"
    >
      <Navbar.Brand href="/">
        <div className="ml-2">
          <div className="pr-2"><FcMindMap size="30"/></div>
          </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          LAN-SECURE MONITORING
        </span>
      </Navbar.Brand>
      
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/">
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="/about">
          About
        </Navbar.Link>
        <Navbar.Link href="/node">
          Node
        </Navbar.Link>
        <Navbar.Link href="/record">
          Record
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;