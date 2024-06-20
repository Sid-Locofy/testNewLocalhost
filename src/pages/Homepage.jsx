import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import SearchSectionHeader from "../components/SearchSectionHeader";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.homepage}>
        <header className={styles.header}>
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
            <div className={styles.loginSection}>
              <img
                className={styles.notificationsIcon}
                loading="lazy"
                alt=""
                src="/notifications@2x.png"
              />
              <img
                className={styles.avatarIcon}
                loading="lazy"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </header>
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
          <section className={styles.homes}>
            <ListingItem
              listingImage="/listing-image@2x.png"
              listingTitle="Brightwoods Cabin"
              listingSubtitle="Bridlepath, Ontario, Canada"
              rating="4.9"
              price="$658"
              onListingItemContainerClick={onListingItemContainerClick}
            />
            <ListingItem
              listingImage="/image@2x.png"
              listingTitle="Urban Loft"
              listingSubtitle="Georgina Bay, Ontario, Canada"
              rating="4.5"
              price="$410"
              propDisplay="inline-block"
              propMinWidth="81px"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-1@2x.png"
              listingTitle="Forestville Cottages"
              listingSubtitle="Simcoe, Ontario Canada"
              rating="5.0"
              price="$325"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-2@2x.png"
              listingTitle="Unionville Logde"
              listingSubtitle="Markham, Ontario Canada"
              rating="4.6"
              price="$485"
              propDisplay="inline-block"
              propMinWidth="129px"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-3@2x.png"
              listingTitle="Missisuaga Aistream"
              listingSubtitle="Missisauga, Ontario, Canada"
              rating="4.8"
              price="$502"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-4@2x.png"
              listingTitle="Niagara Homes"
              listingSubtitle="Niagara, Ontario, Canada"
              rating="4.9"
              price="$655"
              propDisplay="inline-block"
              propMinWidth="118px"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-5@2x.png"
              listingTitle="Sunny Estate"
              listingSubtitle="Barcort, Ontario Canada"
              rating="5.0"
              price="$320"
              propDisplay="inline-block"
              propMinWidth="102px"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-6@2x.png"
              listingTitle="Lawrence Hills"
              listingSubtitle="Lawrence, Ontario Canada"
              rating="5.0"
              price="$350"
              propDisplay="inline-block"
              propMinWidth="112px"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-7@2x.png"
              listingTitle="Simcoe Lake Lodge"
              listingSubtitle="Simcoe, Ontario, Canada"
              rating="5.0"
              price="$395"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-8@2x.png"
              listingTitle="Wasaga Beach Home"
              listingSubtitle="Georgina Bay, Ontario, Canada"
              rating="5.0"
              price="$385"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-9@2x.png"
              listingTitle="Banff Hills"
              listingSubtitle="Banff, Alberta, Canada"
              rating="5.0"
              price="$385"
              propDisplay="inline-block"
              propMinWidth="79px"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-10@2x.png"
              listingTitle="Creemore Canada"
              listingSubtitle="Creemore, Alberta, Canada"
              rating="5.0"
              price="$385"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-11@2x.png"
              listingTitle="Kawartha Lakes"
              listingSubtitle="Kawartha, Alberta,  Canada"
              rating="5.0"
              price="$385"
              propDisplay="inline-block"
              propMinWidth="121px"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-12@2x.png"
              listingTitle="Revelstoke Cabin"
              listingSubtitle="Revelstoke, Alberta, Canada"
              rating="5.0"
              price="$385"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
            <ListingItem
              listingImage="/image-13@2x.png"
              listingTitle="Brightwoods Estate"
              listingSubtitle="Brightwoods Estate"
              rating="5.0"
              price="$385"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="inline-block"
              propMinWidth1="127px"
            />
            <ListingItem
              listingImage="/image-14@2x.png"
              listingTitle="Brightwoods Estate"
              listingSubtitle="Brightwoods Estate"
              rating="5.0"
              price="$385"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="inline-block"
              propMinWidth1="127px"
            />
          </section>
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

export default Homepage;
