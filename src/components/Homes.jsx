import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Homes.module.css";

const Homes = ({ className = "" }) => {
  const navigate = useNavigate();

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <section className={[styles.homes, className].join(" ")}>
      <div className={styles.listingItem} onClick={onListingItemContainerClick}>
        <img
          className={styles.listingImageIcon}
          alt=""
          src="/listing-image@2x.png"
        />
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
              <b className={styles.listingTitle}>Brightwoods Cabin</b>
              <div className={styles.listingSubtitle}>
                Bridlepath, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont}>
              <b className={styles.rating}>4.9</b>
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
              <b className={styles.price}>$658</b>
              <div className={styles.night}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem1}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.superhostTag1}>
          <img
            className={styles.superhostIcon1}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost1}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon1}>
          <img className={styles.heartIcon1} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails1}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont1}>
              <b className={styles.listingTitle1}>Urban Loft</b>
              <div className={styles.listingSubtitle1}>
                Georgina Bay, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont1}>
              <b className={styles.rating1}>4.5</b>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer1}>
            <div className={styles.pricePerNight1}>
              <b className={styles.price1}>$410</b>
              <div className={styles.night1}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem2}>
        <img className={styles.imageIcon1} alt="" src="/image-1@2x.png" />
        <div className={styles.superhostTag2}>
          <img
            className={styles.superhostIcon2}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost2}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon2}>
          <img className={styles.heartIcon2} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails2}>
          <div className={styles.listingInfo2}>
            <div className={styles.listingCont2}>
              <b className={styles.listingTitle2}>Forestville Cottages</b>
              <div className={styles.listingSubtitle2}>
                Simcoe, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont2}>
              <b className={styles.rating2}>5.0</b>
              <img className={styles.starIcon2} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer2}>
            <div className={styles.pricePerNight2}>
              <b className={styles.price2}>$325</b>
              <div className={styles.night2}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem3}>
        <img className={styles.imageIcon2} alt="" src="/image-2@2x.png" />
        <div className={styles.superhostTag3}>
          <img
            className={styles.superhostIcon3}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost3}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon3}>
          <img className={styles.heartIcon3} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails3}>
          <div className={styles.listingInfo3}>
            <div className={styles.listingCont3}>
              <b className={styles.listingTitle3}>Unionville Logde</b>
              <div className={styles.listingSubtitle3}>
                Markham, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont3}>
              <b className={styles.rating3}>4.6</b>
              <img className={styles.starIcon3} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer3}>
            <div className={styles.pricePerNight3}>
              <b className={styles.price3}>$485</b>
              <div className={styles.night3}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem4}>
        <img className={styles.imageIcon3} alt="" src="/image-3@2x.png" />
        <div className={styles.superhostTag4}>
          <img
            className={styles.superhostIcon4}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost4}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon4}>
          <img className={styles.heartIcon4} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails4}>
          <div className={styles.listingInfo4}>
            <div className={styles.listingCont4}>
              <b className={styles.listingTitle4}>Missisuaga Aistream</b>
              <div className={styles.listingSubtitle4}>
                Missisauga, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont4}>
              <b className={styles.rating4}>4.8</b>
              <img className={styles.starIcon4} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer4}>
            <div className={styles.pricePerNight4}>
              <b className={styles.price4}>$502</b>
              <div className={styles.night4}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem5}>
        <img className={styles.imageIcon4} alt="" src="/image-4@2x.png" />
        <div className={styles.superhostTag5}>
          <img
            className={styles.superhostIcon5}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost5}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon5}>
          <img className={styles.heartIcon5} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails5}>
          <div className={styles.listingInfo5}>
            <div className={styles.listingCont5}>
              <b className={styles.listingTitle5}>Niagara Homes</b>
              <div className={styles.listingSubtitle5}>
                Niagara, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont5}>
              <b className={styles.rating5}>4.9</b>
              <img className={styles.starIcon5} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer5}>
            <div className={styles.pricePerNight5}>
              <b className={styles.price5}>$655</b>
              <div className={styles.night5}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem6}>
        <img className={styles.imageIcon5} alt="" src="/image-5@2x.png" />
        <div className={styles.superhostTag6}>
          <img
            className={styles.superhostIcon6}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost6}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon6}>
          <img className={styles.heartIcon6} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails6}>
          <div className={styles.listingInfo6}>
            <div className={styles.listingCont6}>
              <b className={styles.listingTitle6}>Sunny Estate</b>
              <div className={styles.listingSubtitle6}>
                Barcort, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont6}>
              <b className={styles.rating6}>5.0</b>
              <img className={styles.starIcon6} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer6}>
            <div className={styles.pricePerNight6}>
              <b className={styles.price6}>$320</b>
              <div className={styles.night6}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem7}>
        <img className={styles.imageIcon6} alt="" src="/image-6@2x.png" />
        <div className={styles.superhostTag7}>
          <img
            className={styles.superhostIcon7}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost7}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon7}>
          <img className={styles.heartIcon7} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails7}>
          <div className={styles.listingInfo7}>
            <div className={styles.listingCont7}>
              <b className={styles.listingTitle7}>Lawrence Hills</b>
              <div className={styles.listingSubtitle7}>
                Lawrence, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont7}>
              <b className={styles.rating7}>5.0</b>
              <img className={styles.starIcon7} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer7}>
            <div className={styles.pricePerNight7}>
              <b className={styles.price7}>$350</b>
              <div className={styles.night7}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem8}>
        <img className={styles.imageIcon7} alt="" src="/image-7@2x.png" />
        <div className={styles.superhostTag8}>
          <img
            className={styles.superhostIcon8}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost8}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon8}>
          <img className={styles.heartIcon8} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails8}>
          <div className={styles.listingInfo8}>
            <div className={styles.listingCont8}>
              <div className={styles.listingTitle8}>Simcoe Lake Lodge</div>
              <div className={styles.listingSubtitle8}>
                Simcoe, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont8}>
              <b className={styles.rating8}>5.0</b>
              <img className={styles.starIcon8} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer8}>
            <div className={styles.pricePerNight8}>
              <b className={styles.price8}>$395</b>
              <div className={styles.night8}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem9}>
        <img className={styles.imageIcon8} alt="" src="/image-8@2x.png" />
        <div className={styles.superhostTag9}>
          <img
            className={styles.superhostIcon9}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost9}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon9}>
          <img className={styles.heartIcon9} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails9}>
          <div className={styles.listingInfo9}>
            <div className={styles.listingCont9}>
              <div className={styles.listingTitle9}>Wasaga Beach Home</div>
              <div className={styles.listingSubtitle9}>
                Georgina Bay, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingCont9}>
              <b className={styles.rating9}>5.0</b>
              <img className={styles.starIcon9} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer9}>
            <div className={styles.pricePerNight9}>
              <b className={styles.price9}>$385</b>
              <div className={styles.night9}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem10}>
        <img className={styles.imageIcon9} alt="" src="/image-9@2x.png" />
        <div className={styles.superhostTag10}>
          <img
            className={styles.superhostIcon10}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost10}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon10}>
          <img className={styles.heartIcon10} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails10}>
          <div className={styles.listingInfo10}>
            <div className={styles.listingCont10}>
              <b className={styles.listingTitle10}>Banff Hills</b>
              <div className={styles.listingSubtitle10}>
                Banff, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont10}>
              <b className={styles.rating10}>5.0</b>
              <img className={styles.starIcon10} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer10}>
            <div className={styles.pricePerNight10}>
              <b className={styles.price10}>$385</b>
              <div className={styles.night10}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem11}>
        <img className={styles.imageIcon10} alt="" src="/image-10@2x.png" />
        <div className={styles.superhostTag11}>
          <img
            className={styles.superhostIcon11}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost11}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon11}>
          <img className={styles.heartIcon11} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails11}>
          <div className={styles.listingInfo11}>
            <div className={styles.listingCont11}>
              <b className={styles.listingTitle11}>Creemore Canada</b>
              <div className={styles.listingSubtitle11}>
                Creemore, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont11}>
              <b className={styles.rating11}>5.0</b>
              <img className={styles.starIcon11} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer11}>
            <div className={styles.pricePerNight11}>
              <b className={styles.price11}>$385</b>
              <div className={styles.night11}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem12}>
        <img className={styles.imageIcon11} alt="" src="/image-11@2x.png" />
        <div className={styles.superhostTag12}>
          <img
            className={styles.superhostIcon12}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost12}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon12}>
          <img className={styles.heartIcon12} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails12}>
          <div className={styles.listingInfo12}>
            <div className={styles.listingCont12}>
              <b className={styles.listingTitle12}>Kawartha Lakes</b>
              <div className={styles.listingSubtitle12}>
                Kawartha, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont12}>
              <b className={styles.rating12}>5.0</b>
              <img className={styles.starIcon12} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer12}>
            <div className={styles.pricePerNight12}>
              <b className={styles.price12}>$385</b>
              <div className={styles.night12}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem13}>
        <img className={styles.imageIcon12} alt="" src="/image-12@2x.png" />
        <div className={styles.superhostTag13}>
          <img
            className={styles.superhostIcon13}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost13}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon13}>
          <img className={styles.heartIcon13} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails13}>
          <div className={styles.listingInfo13}>
            <div className={styles.listingCont13}>
              <b className={styles.listingTitle13}>Revelstoke Cabin</b>
              <div className={styles.listingSubtitle13}>
                Revelstoke, Alberta, Canada
              </div>
            </div>
            <div className={styles.ratingCont13}>
              <b className={styles.rating13}>5.0</b>
              <img className={styles.starIcon13} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer13}>
            <div className={styles.pricePerNight13}>
              <b className={styles.price13}>$385</b>
              <div className={styles.night13}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem14}>
        <img className={styles.imageIcon13} alt="" src="/image-13@2x.png" />
        <div className={styles.superhostTag14}>
          <img
            className={styles.superhostIcon14}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost14}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon14}>
          <img className={styles.heartIcon14} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails14}>
          <div className={styles.listingInfo14}>
            <div className={styles.listingCont14}>
              <b className={styles.listingTitle14}>Brightwoods Estate</b>
              <div className={styles.listingSubtitle14}>Brightwoods Estate</div>
            </div>
            <div className={styles.ratingCont14}>
              <b className={styles.rating14}>5.0</b>
              <img className={styles.starIcon14} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer14}>
            <div className={styles.pricePerNight14}>
              <b className={styles.price14}>$385</b>
              <div className={styles.night14}>/night</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listingItem15}>
        <img className={styles.imageIcon14} alt="" src="/image-14@2x.png" />
        <div className={styles.superhostTag15}>
          <img
            className={styles.superhostIcon15}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost15}>Superhost</div>
        </div>
        <div className={styles.wrapperHeartIcon15}>
          <img className={styles.heartIcon15} alt="" src="/heart-icon@2x.png" />
        </div>
        <div className={styles.itemDetails15}>
          <div className={styles.listingInfo15}>
            <div className={styles.listingCont15}>
              <b className={styles.listingTitle15}>Brightwoods Estate</b>
              <div className={styles.listingSubtitle15}>Brightwoods Estate</div>
            </div>
            <div className={styles.ratingCont15}>
              <b className={styles.rating15}>5.0</b>
              <img className={styles.starIcon15} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer15}>
            <div className={styles.pricePerNight15}>
              <b className={styles.price15}>$385</b>
              <div className={styles.night15}>/night</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Homes.propTypes = {
  className: PropTypes.string,
};

export default Homes;
