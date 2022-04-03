import React, { useRef } from 'react';
import style from './Main.module.css';
import MainContact from './components/contact/MainContact';
import BannerSlideSmall1 from './components/bannerslide/BannerSlideSmall1';
import BannerSlideSmall2 from './components/bannerslide/BannerSlideSmall2';
import BannerSlideSmall3 from './components/bannerslide/BannerSlideSmall3';
import BannerSlideSmall4 from './components/bannerslide/BannerSlideSmall4';

function Main() {
  const mainRef = useRef();

  return (
    <div ref={mainRef}>
      <div className={`${style.sliderBig} ${style.mainFirst}`}>
        slider big 1
      </div>
      <BannerSlideSmall1 />
      <div className={style.mainBanner}>banner</div>
      <div className={style.sliderMedium}>slider medium 1</div>
      <BannerSlideSmall2 />
      <div className={style.sliderBig}>slider big 2</div>
      <div className={style.travelList}>travel list</div>
      <div className={style.hashtagList}>hashtag list</div>
      <BannerSlideSmall3 />
      <BannerSlideSmall4 />
      <MainContact />
    </div>
  );
}

export default Main;
