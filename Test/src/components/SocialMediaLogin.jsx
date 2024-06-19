import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SocialMediaLogin.module.css";

const SocialMediaLogin = ({
  className = "",
  orSignUpWith,
  image,
  image1,
  image2,
  propTextDecoration,
}) => {
  const textStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={[styles.socialMediaLogin, className].join(" ")}>
      <div className={styles.orSignUp}>{orSignUpWith}</div>
      <div className={styles.socialLoginContainer}>
        <div className={styles.socialLogin}>
          <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
          <div className={styles.text}>Google</div>
        </div>
        <div className={styles.socialLogin1}>
          <img className={styles.imageIcon1} alt="" src={image1} />
          <div className={styles.text1} style={textStyle}>
            Facebook
          </div>
        </div>
        <div className={styles.socialLogin2}>
          <img className={styles.imageIcon2} alt="" src={image2} />
          <div className={styles.text2}>Apple</div>
        </div>
      </div>
    </div>
  );
};

SocialMediaLogin.propTypes = {
  className: PropTypes.string,
  orSignUpWith: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default SocialMediaLogin;
