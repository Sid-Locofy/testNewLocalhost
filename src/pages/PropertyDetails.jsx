import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import styles from "./PropertyDetails.module.css";

const PropertyDetails = () => {
  return (
    <div className={styles.propertyDetails}>
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className={styles.pageBody}>
        <ContentWrapper />
        <section className={styles.listingDetailsSection}>
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer
        propMargin="unset"
        propTextDecoration="unset"
        propMargin1="unset"
        propTextDecoration1="none"
        propMargin2="unset"
        propTextDecoration2="none"
        propTextDecoration3="unset"
      />
      <div className={styles.band}>
        <div className={styles.bannerContent}>
          <div className={styles.copyrightInfo}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.legalLinks}>
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
  );
};

export default PropertyDetails;
