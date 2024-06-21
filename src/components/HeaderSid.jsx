import PropTypes from "prop-types";
import styles from "./Header.module.css";

const HeaderSid = ({
  className = "",
  notifications,
  avatar,
  showLoginSection,
}) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.headerContent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.navLinks}>
          <a className={styles.home}>Home</a>
          <a className={styles.stays}>Stays</a>
          <a className={styles.becomeAHost}>Become a host</a>
        </div>
        {showLoginSection && (
          <div className={styles.loginSection}>
            <img
              className={styles.notificationsIcon}
              loading="lazy"
              alt=""
              src={notifications}
            />
            <img
              className={styles.avatarIcon}
              loading="lazy"
              alt=""
              src={avatar}
            />
          </div>
        )}
      </div>
    </header>
  );
};

HeaderSid.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.string,
  avatar: PropTypes.string,
  showLoginSection: PropTypes.bool,
};

export default HeaderSid;
