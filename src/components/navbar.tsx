interface LinkType {
    name: string;
    path: string;
}

interface NavBarProps {
    links: LinkType[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
    return (
      <nav className="fixed top-0 left-0 right-0 w-full h-25 bg-[#f1dbd3d4] space-x-8 flex items-center justify-center">
        {links.map((link) => (
          <a href={link.path} key={link.name} className="nav-link">
            {link.name}
          </a>
        ))}
      </nav>
    );
  };  

export default NavBar;
  