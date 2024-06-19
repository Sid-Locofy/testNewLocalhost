import StayCard from "./StayCard";
import PropTypes from "prop-types";
import styles from "./SimilarStaysSection.module.css";

const SimilarStaysSection = ({ className = "" }) => {
  return (
    <section className={[styles.similarStaysSection, className].join(" ")}>
      <div className={styles.similarStaysHeader}>
        <b className={styles.similarStays}>Similar stays</b>
        <a className={styles.button}>View all</a>
      </div>
      <div className={styles.stayCards}>
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className={styles.staycard}>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <div className={styles.wrapperHeartIcon}>
              <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.urbanLoftParent}>
                <b className={styles.urbanLoft}>Urban Loft</b>
                <b className={styles.urbanLoft1}>Urban Loft</b>
              </div>
              <div className={styles.parent}>
                <b className={styles.b}>4.8</b>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.group}>
                <b className={styles.b1}>$502</b>
                <div className={styles.night}>/night</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-93@3x.png')"
        />
      </div>
    </section>
  );
};

SimilarStaysSection.propTypes = {
  className: PropTypes.string,
};

export default SimilarStaysSection;
