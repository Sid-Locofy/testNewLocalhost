import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DetailsCard.module.css";

const DetailsCard = ({
  className = "",
  cardIcon,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const aPrivateRoomStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className={[styles.detailscard, className].join(" ")}>
      <img className={styles.cardIcon} loading="lazy" alt="" src={cardIcon} />
      <div className={styles.cardContent}>
        <b
          className={styles.dedicatedWorkspace}
          style={dedicatedWorkspaceStyle}
        >
          {dedicatedWorkspace}
        </b>
        <div className={styles.aPrivateRoom} style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

DetailsCard.propTypes = {
  className: PropTypes.string,
  cardIcon: PropTypes.string,
  dedicatedWorkspace: PropTypes.string,
  aPrivateRoomEquippedWithW: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default DetailsCard;
