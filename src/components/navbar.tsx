interface LinkType {
    name: string;
    path: string;
}

interface NavBarProps {
    links: LinkType[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
    return (
      <nav className="flex justify-center space-x-8 p-4">
        {links.map((link) => (
          <a href={link.path} key={link.name} className="nav-link">
            {link.name}
          </a>
        ))}
      </nav>
    );
  };  

export default NavBar;
  