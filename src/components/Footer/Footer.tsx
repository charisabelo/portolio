import "./Footer.scss";

const Footer: React.FC = () => {
  const date: Date = new Date();
  const currDate: number = date.getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currDate} Char Isabelo</p>
    </footer>
  );
};

export default Footer;
