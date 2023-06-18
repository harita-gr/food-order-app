import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <p>&copy; 2023 Indianfood.com</p>
      </div>
    </footer>
  );
};

export default Footer;
