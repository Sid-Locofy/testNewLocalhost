import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./StayCard.module.css";

const StayCard = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
}) => {
  const stayCardFavoriteStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.staycard, className].join(" ")}>
      <div className={styles.stayCardFavorite} style={stayCardFavoriteStyle}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src="/superhost-icon.svg" />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon}>
          <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className={styles.stayCardDetails}>
        <div className={styles.stayCardInfo}>
          <div className={styles.stayCardTitleLocation}>
            <b className={styles.brightwoodsEstate}>{brightwoodsEstate}</b>
            <div className={styles.bridlepathOntarioCanada}>
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className={styles.stayCardRating}>
            <b className={styles.stayCardRating1}>4.8</b>
            <img
              className={styles.stayCardRatingBadge}
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.stayCardPrice}>
          <div className={styles.stayCardPriceDetails}>
            <b className={styles.stayCardPrice1}>$502</b>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

StayCard.propTypes = {
  className: PropTypes.string,
  brightwoodsEstate: PropTypes.string,
  bridlepathOntarioCanada: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default StayCard;
