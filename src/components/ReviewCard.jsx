import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({
  className = "",
  reviewerAvatar,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.reviewcard, className].join(" ")}>
      <div className={styles.reviewContent}>
        <div className={styles.reviewerInfo}>
          <img
            className={styles.reviewerAvatarIcon}
            loading="lazy"
            alt=""
            src={reviewerAvatar}
          />
          <div className={styles.reviewerNameDate}>
            <b className={styles.johnnyCash} style={johnnyCashStyle}>
              {johnnyCash}
            </b>
            <div className={styles.june2023} style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className={styles.reviewRating}>
          <b className={styles.b}>{prop}</b>
          <img className={styles.reviewBadgeIcon} alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className={styles.michellesPlaceWas}>
        {michellesPlaceWasSoGreatA}
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  reviewerAvatar: PropTypes.string,
  johnnyCash: PropTypes.string,
  june2023: PropTypes.string,
  prop: PropTypes.string,
  michellesPlaceWasSoGreatA: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default ReviewCard;
