import catImg1 from "../images/Web/Shop-cat-1.png";
import catImg2 from "../images/Web/Shop-cat-2.png";
import catImg3 from "../images/Web/Shop-cat-3.png";
import catImg4 from "../images/Web/Shop-cat-4.png";
import catImg5 from "../images/Web/Shop-cat-5.png";
import catImg6 from "../images/Web/Shop-cat-6.png";

import colImg1 from "../images/Web/collection-1.png";
import colImg2 from "../images/Web/collection-2.png";
import colImg3 from "../images/Web/collection-3.png";
import colImg4 from "../images/Web/collection-4.png";

import comb1 from "../images/Web/combo-1.png";
import comb2 from "../images/Web/combo-2.png";
import comb3 from "../images/Web/combo-3.png";

import mobComb1 from "../images/Mob/combo-1-mob.png";
import mobComb2 from "../images/Mob/combo-2-mob.png";
import mobComb3 from "../images/Mob/combo-3-mob.png";

import wkcolor from "../images/Web/wk-color.png";
import wkcolorMob from "../images/Mob/wk-color-mob.png";

import landingBannerImg from "../images/Web/Landing-Banner.png";
import landingSmallBanner from "../images/Mob/Landing-banner-mob.png";
import mainBanner from "../images/homepage-banner.svg";

import Stitching from "../images/Stitching.svg";
import SizeFitting from "../images/Size-fitting.svg";
import Alteration from "../images/Alteration.svg";
import HowDoesitWork from "../images/How-does-it-work-mob.svg";

export const StitchingImg = Stitching;
export const SizeFittingImg = SizeFitting;
export const AlterationImg = Alteration;
export const HowDoesitWorkImg = HowDoesitWork;

export const landingBanner =
  window.screen.width > 600 ? landingBannerImg : landingSmallBanner;

export const colorOfWeek = wkcolor;
export const Banner2 = window.screen.width > 600 ? mainBanner : wkcolorMob;

export const homepageCombo =
  window.screen.width > 600
    ? [comb1, comb2, comb3]
    : [mobComb1, mobComb2, mobComb3];

export const homepageCategory = [
  catImg1,
  catImg2,
  catImg3,
  catImg4,
  catImg5,
  catImg6,
];

export const homepageCollection = [colImg1, colImg2, colImg3, colImg4];

export const imageArray = [
  "https://t480.s3-ap-southeast-1.amazonaws.com/1.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/2.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/3.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/4.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/5.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/6.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/7.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/9.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/10.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/11.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/12.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/13.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/14.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/15.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/16.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/17.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/18.jpeg",
  "https://t480.s3-ap-southeast-1.amazonaws.com/19.jpeg",
];
