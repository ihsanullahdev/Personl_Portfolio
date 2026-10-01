import "./profile.css";
import profileImage from "../../assets/ihsan.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
// import { AiFillTikTok } from "react-icons/ai";

function Profile({
  image = profileImage,
  name = "Ihsan Ullah Afridi",
  title = "",
  description = "",
  socialLinks = [FaLinkedin, FaGithubSquare],
  showButton = false,
  variant = "small",
  showName = "ture",
}) {
  return (
    <div className={`profile profile-${variant}`}>
      <img src={image} alt={name} />
      {showName && <h3>{name}</h3>}
      <strong>
        <p>{title}</p>
      </strong>

      {description && <p>{description}</p>}

      {socialLinks.length > 0 && (
        <div className="profile-icons">
          {socialLinks.map((item, index) => (
            <a href={item.url || "#"} key={index}>
              {item.icon}
            </a>
          ))}
        </div>
      )}

      {showButton && (
        <a href="/Ihsan_Ullah_CV.pdf" download className="download-cv">
          Download CV
        </a>
      )}
    </div>
  );
}

export default Profile;
