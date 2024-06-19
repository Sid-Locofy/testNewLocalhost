import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
  propMargin,
  propTextDecoration,
  propMargin1,
  propTextDecoration1,
  propMargin2,
  propTextDecoration2,
  propTextDecoration3,
}) => {
  const supportStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const airCoverStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const hostingStyle = useMemo(() => {
    return {
      margin: propMargin1,
      textDecoration: propTextDecoration1,
    };
  }, [propMargin1, propTextDecoration1]);

  const localhostStyle = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  const newsroomStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration2,
    };
  }, [propTextDecoration2]);

  const investresStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration3,
    };
  }, [propTextDecoration3]);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerInner}>
        <div className={styles.frameParent}>
          <div className={styles.supportParent}>
            <h3 className={styles.support} style={supportStyle}>
              Support
            </h3>
            <div className={styles.helpCentre}>Help Centre</div>
            <a className={styles.aircover} style={airCoverStyle}>
              AirCover
            </a>
            <div className={styles.combatingDiscrimination}>
              Combating discrimination
            </div>
            <div className={styles.supportingPeopleWith}>
              Supporting people with disabilities
            </div>
            <div className={styles.cencellationOptions}>
              Cencellation options
            </div>
            <div className={styles.reportNeighbourhoodConcern}>
              Report neighbourhood concern
            </div>
          </div>
          <div className={styles.hostingParent}>
            <h3 className={styles.hosting} style={hostingStyle}>
              Hosting
            </h3>
            <div className={styles.localHome}>Local home</div>
            <div className={styles.coverForHosts}>Cover for hosts</div>
            <div className={styles.hostingResources}>Hosting resources</div>
            <div className={styles.communityForum}>Community forum</div>
            <div className={styles.hostingResponsibly}>Hosting responsibly</div>
          </div>
          <div className={styles.localhostParent}>
            <h3 className={styles.localhost} style={localhostStyle}>
              Localhost
            </h3>
            <div className={styles.newsroom} style={newsroomStyle}>
              Newsroom
            </div>
            <div className={styles.newFeatures}>New Features</div>
            <a className={styles.careers}>Careers</a>
            <a className={styles.investres} style={investresStyle}>
              Investres
            </a>
            <a className={styles.giftCards}>Gift cards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propMargin1: PropTypes.any,
  propTextDecoration1: PropTypes.any,
  propMargin2: PropTypes.any,
  propTextDecoration2: PropTypes.any,
  propTextDecoration3: PropTypes.any,
};

export default Footer;
