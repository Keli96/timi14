type HeaderProps = {
  name: string;

  slogan: string;
};

function Header({ name, slogan }: HeaderProps) {
  return (
    <header className="header">
      <h1>{name}</h1>

      <p>{slogan}</p>
    </header>
  );
}

export default Header;
