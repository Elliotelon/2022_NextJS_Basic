import { GoMail, GoOrganization, GoLink, GoLocation } from "react-icons/go";
import css from "styled-jsx/css";

const style = css`
  .profile-box {
    width: 25%;
    max-width: 272px;
    margin-right: 26px;
  }
  .profile-image-wrapper {
    width: 100%;
    border: 1px solid #e1e4e8;
  }
  .profile-image-wrapper .profile-image {
    display: block;
    width: 100%;
  }
  .profile-username {
    margin: 0;
    padding-top: 16px;
    font-size: 26px;
  }
  .profile-user-login {
    margin: 0;
    font-size: 20px;
  }
  .profile-user-bio {
    margin: 0;
    padding-top: 16px;
    font-size: 14px;
  }
  .profile-user-info {
    display: flex;
    align-items: center;
    margin: 4px 0 0;
  }
  .profile-user-info-text {
    margin-left: 6px;
  }
`;

const Profile = ({ user }) => {
  if(!user) {
    return null;
  }
  return (
    <>
      <div className="profile-box">
        <div className="profile-image-wrapper">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt={`${user.name}`}
          />
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <p className="profile-user-login">{user.login}</p>
        <p className="profile-user-bio">{user.bio}</p>
        <p className="profile-user-info">
          <GoOrganization size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.company ? user.company : "@abcCompany"}
          </span>
        </p>
        <p className="profile-user-info">
          <GoLocation size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.location ? user.location : "abc@email.com"}
          </span>
        </p>
        <p className="profile-user-info">
          <GoMail size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.email ? user.email : "abc@email.com"}
          </span>
        </p>
        <p className="profile-user-info">
          <GoLink size={16} color="#6a737d" />
          <span className="profile-user-info-text">
            {user.blog ? user.blog : "abc@email.com"}
          </span>
        </p>
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export default Profile;