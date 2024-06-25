import { useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import HeaderSid from "../components/HeaderSid";
import SearchSectionHeader from "../components/SearchSectionHeader";
import Homes from "../components/Homes";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import styles from "./Homepage.module.css";

const Homepage = ({ notifications, avatar }) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  const data = {
    notifications: "/notifications@2x.png",
    avatar: "/avatar@2x.png",
    showLoginSection: true
  }  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.homepage}>
        <HeaderSid
          notifications={data.notifications}
          avatar={data.avatar}
          showLoginSection={!data.showLoginSection}
        />
        <div className={styles.heroContainer}>
          <div className={styles.heroContainerInner}>
            <div className={styles.frameParent}>
              <div className={styles.findAHostForEveryJourneyParent}>
                <b className={styles.findAHostContainer}>
                  <span>{`Find a `}</span>
                  <span className={styles.host}>host</span>
                  <span> for every journey</span>
                </b>
                <h3 className={styles.discoverTheBest}>
                  Discover the best local rental properties that fits your every
                  travel needs
                </h3>
              </div>
              <div className={styles.form}>
                <TextField
                  className={styles.autocompletebasic}
                  placeholder="Accommodation"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <img width="25px" height="25px" src="/iconhome.svg" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#d9d9d9" },
                    "& .MuiInputBase-root": {
                      height: "64px",
                      backgroundColor: "#fff",
                      paddingRight: "12px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className={styles.grouped}>
                  <div className={styles.wrapper}>
                    <DatePicker
                      value={frameDateTimePickerValue}
                      onChange={(newValue) => {
                        setFrameDateTimePickerValue(newValue);
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "#d9d9d9",
                          borderTopWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                        },
                        "&:hover": {
                          fieldset: { borderColor: "#d9d9d9" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d9d9d9",
                          },
                        },
                        "& input::placeholder": {
                          textColor: "rgba(0, 0, 0, 0.85)",
                          fontSize: 14,
                        },
                        input: {
                          color: "rgba(0, 0, 0, 0.85)",
                          fontSize: 14,
                          textAlign: "left",
                          fontWeight: "400",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "#fff",
                          height: 58,
                          gap: "8px",
                          flexDirection: { flexDirection: "row" },
                        },
                      }}
                      slotProps={{
                        textField: {
                          size: "medium",
                          fullWidth: true,
                          required: false,
                          autoFocus: false,
                          error: false,
                          placeholder: "Check-in",
                        },
                        openPickerIcon: {
                          component: () => (
                            <img
                              width="24px"
                              height="24px"
                              src="/calendartodayfilled.svg"
                            />
                          ),
                        },
                      }}
                    />
                  </div>
                  <div className={styles.container}>
                    <DatePicker
                      value={frameDateTimePicker1Value}
                      onChange={(newValue) => {
                        setFrameDateTimePicker1Value(newValue);
                      }}
                      sx={{
                        fieldset: {
                          borderColor: "#d9d9d9",
                          borderTopWidth: 1,
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                        },
                        "&:hover": {
                          fieldset: { borderColor: "#d9d9d9" },
                          ".MuiOutlinedInput-notchedOutline": {
                            borderColor: "#d9d9d9",
                          },
                        },
                        "& input::placeholder": {
                          textColor: "rgba(0, 0, 0, 0.85)",
                          fontSize: 14,
                        },
                        input: {
                          color: "rgba(0, 0, 0, 0.85)",
                          fontSize: 14,
                          textAlign: "left",
                          fontWeight: "400",
                        },
                        "& .MuiInputBase-root": {
                          backgroundColor: "#fff",
                          height: 58,
                          gap: "8px",
                          flexDirection: { flexDirection: "row" },
                        },
                      }}
                      slotProps={{
                        textField: {
                          size: "medium",
                          fullWidth: true,
                          required: false,
                          autoFocus: false,
                          error: false,
                          placeholder: "Check-out",
                        },
                        openPickerIcon: {
                          component: () => (
                            <img
                              width="24px"
                              height="24px"
                              src="/calendartodayfilled-1.svg"
                            />
                          ),
                        },
                      }}
                    />
                  </div>
                  <TextField
                    className={styles.groupedChild}
                    placeholder="Guest"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img width="25px" height="25px" src="/iconuser.svg" />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "64px",
                        backgroundColor: "#fff",
                        paddingRight: "12px",
                        fontSize: "14px",
                      },
                      "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.85)" },
                    }}
                  />
                </div>
                <Button
                  className={styles.searchButton}
                  startIcon={
                    <img width="19px" height="19px" src="/iconsearch.svg" />
                  }
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#00c29f",
                    borderRadius: "4px",
                    "&:hover": { background: "#00c29f" },
                    width: 142,
                    height: 64,
                  }}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        <main className={styles.staysSection}>
          <SearchSectionHeader />
          <Homes />
          <Button
            className={styles.showMoreButton}
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#00c29f",
              fontSize: "16",
              borderColor: "#00c29f",
              borderRadius: "6px",
              "&:hover": { borderColor: "#00c29f" },
              width: 147,
              height: 48,
            }}
          >
            Show more
          </Button>
        </main>
        <Footer />
        <div className={styles.band}>
          <div className={styles.bandInner}>
            <div className={styles.localhostIncAllRightsResParent}>
              <div className={styles.localhostIncAll}>
                © 2023 Localhost, Inc. All Rights Reserved
              </div>
              <div className={styles.privacyPolicyParent}>
                <div className={styles.privacyPolicy}>Privacy Policy</div>
                <div
                  className={styles.termsConditions}
                >{`Terms & Conditions`}</div>
                <div className={styles.contactUs}>Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

Homepage.propTypes = {
  notifications: PropTypes.string,
  avatar: PropTypes.string,
};

export default Homepage;