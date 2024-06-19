import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ContentWrapper.module.css";

const ContentWrapper = ({ className = "" }) => {
  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.mainContent}>
        <img
          className={styles.listingPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className={styles.listingImageGrid}>
          <img
            className={styles.listingImageRow}
            loading="lazy"
            alt=""
            src="/asset/frame-46@2x.png"
          />
          <img
            className={styles.listingImageRow1}
            loading="lazy"
            alt=""
            src="/asset/frame-47@2x.png"
          />
          <img
            className={styles.listingImageRow2}
            loading="lazy"
            alt=""
            src="/asset/frame-48@2x.png"
          />
          <img
            className={styles.listingImageRow3}
            loading="lazy"
            alt=""
            src="/asset/frame-49@2x.png"
          />
          <div className={styles.listingImageRow4}>
            <img
              className={styles.listingImageIcon}
              alt=""
              src="/listing-image1@2x.png"
            />
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.listingContent}>
        <div className={styles.listingDetails}>
          <div className={styles.listingHeader}>
            <div className={styles.listingLocationParent}>
              <div className={styles.listingLocation}>
                <h2 className={styles.brightwoodsCabin}>Brightwoods Cabin</h2>
                <div className={styles.bridlepathOntarioCanada}>
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className={styles.listingRating}>
              <div className={styles.ratingStars}>
                <b className={styles.starRating}>5.0</b>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.ratingCount}>
                <u className={styles.reviews}>200 Reviews</u>
              </div>
            </div>
          </div>
          <div
            className={styles.welcomeToOur}
          >{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className={styles.bookingDetails}>
          <div className={styles.pricePerNightParent}>
            <div className={styles.pricePerNight}>
              <b className={styles.priceValue}>$658</b>
              <div className={styles.nightlyRate}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
            <div className={styles.bookingTrend}>
              <div className={styles.trendIndicator}>
                <div className={styles.icontrend}>
                  <div className={styles.iconParent}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                    <div className={styles.trendBackground} />
                  </div>
                </div>
                <div className={styles.trendLabel}>
                  <div className={styles.bestTimeTo}>Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className={styles.searchFlightsButton}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className={styles.hostDetails}>
          <div className={styles.hostedBy}>Hosted by:</div>
          <div className={styles.hostInfo}>
            <img
              className={styles.profilePictureIcon}
              loading="lazy"
              alt=""
              src="/asset/ellipse-2@2x.png"
            />
            <div className={styles.hostNameAndDate}>
              <b className={styles.michelleWard}>Michelle Ward</b>
              <div className={styles.joinedInMay}>Joined in May 2021</div>
            </div>
            <button className={styles.superhostBadge}>
              <img className={styles.badgeIcon} alt="" src="/vector-2.svg" />
              <div className={styles.superhost}>Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
