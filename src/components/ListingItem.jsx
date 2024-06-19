import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ListingItem.module.css";

const ListingItem = ({
  className = "",
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  onListingItemContainerClick,
}) => {
  const listingTitleStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const navigate = useNavigate();

  const onListingItemContainerClick1 = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div
      className={[styles.listingItem, className].join(" ")}
      onClick={onListingItemContainerClick}
    >
      <img className={styles.listingImageIcon} alt="" src={listingImage} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <div className={styles.wrapperHeartIcon}>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
      </div>
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <b className={styles.listingTitle} style={listingTitleStyle}>
              {listingTitle}
            </b>
            <div
              className={styles.listingSubtitle}
              style={listingSubtitleStyle}
            >
              {listingSubtitle}
            </div>
          </div>
          <div className={styles.ratingCont}>
            <b className={styles.rating}>{rating}</b>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <b className={styles.price}>{price}</b>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ListingItem.propTypes = {
  className: PropTypes.string,
  listingImage: PropTypes.string,
  listingTitle: PropTypes.string,
  listingSubtitle: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,

  /** Action props */
  onListingItemContainerClick: PropTypes.func,
};

export default ListingItem;
