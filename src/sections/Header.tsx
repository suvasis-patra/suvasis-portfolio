export const Header = () => {
  return (
    <nav className="flex relative z-30  items-center justify-center text-sm">
      <div className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur fixed top-3">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="nav-item">
          Contacts
        </a>
      </div>
    </nav>
  );
};
