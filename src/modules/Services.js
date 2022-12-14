import TarichImage from '../resources/title-image/Yury_Tarich.jpg';
import TarichForestTail from '../resources/gallery/Tarich_forest_cinema.jpg';
import TarichCaptainTail from '../resources/gallery/Tarich_Captain.jpg';
import TarichMongolTail from '../resources/gallery/Tarich_mongol.jpg';
import TarichBylatBatyr from '../resources/gallery/Tarich_BulatBatyr.jpg';
import TarichFlyers from '../resources/gallery/Tarich_Flyers.jpg';

import DmitriyImage from '../resources/title-image/Dmitriy_Vladimirovich.jpg';
import DmitriyDiversantImage from '../resources/gallery/Dmitry_Diversant_Krim.jpg'
import DmitriyKaterinaImage from '../resources/gallery/Dmitry_Ekaterina.jpg'
import DmitriyElizavetaImage from '../resources/gallery/Dmitry_Elizaveta.jpg'
import DmitriyVolkiImage from '../resources/gallery/Dmitry_Leto_Volkov.png'
import DmitriyNatureImage from '../resources/gallery/Dmitry_Uhodyaschaya_Natura.jpg'

import MargaritaImage from '../resources/title-image/Margarita_Kasymova.jpg';
import MargaritaHollyImage from '../resources/gallery/Margarita_a_schastye_ryadom.jpg'
import MargaritaDinousaureImage from '../resources/gallery/Margarita_Kuda_Vel_sled_dinozavra.jpg'
import MargaritaSummerImage from '../resources/gallery/Margarita_Leto_1943.jpg'
import MargaritaForeverImage from '../resources/gallery/Margarita_Segodnya_I_Vsegda.jpg'
import MargaritaWomenImage from '../resources/gallery/Margarita_Tkachihi.jpg'

import NikitaImage from '../resources/title-image/Nikita_Hubov.jpg';
import NikitaGameImage from '../resources/gallery/Nikita_Igra_V_Brasletah.jpg'
import NikitaDogImage from '../resources/gallery/Nikita_Menay_Sobaku.jpg'
import NikitaTraitorImage from '../resources/gallery/Nikita_Predatelnica.jpg'
import NikitaMistakeImage from '../resources/gallery/Nikita_Rokovaya_Oshibka.jpg'
import NikitaPolyakiImage from '../resources/gallery/Nikita_Squadron_Of_Flying_Hussars.jpg'

import ElhovImage from '../resources/title-image/Yuri_Elhov.jpg';
import ElhovNastyaImage from '../resources/gallery/Yuri_Anastasiya_Slutskaya.jpg'
import ElhovAnomalyImage from '../resources/gallery/Yuri_Anomaliya.jpg'
import ElhovKillerImage from '../resources/gallery/Yuri_Cat_Killer_Silver.jpg'
import ElhovSorryRussiaImage from '../resources/gallery/Yuri_Prosti_Nas_Macheha_Rossiya.jpg'

import KinoBack from '../resources/gallery/Kino_looper.jpg';
import GalerryTitleImage from '../resources/gallery/title-gallery.jpg';
import MapMarker from '../icons/map_marker.png';

import WorkIcon from '../icons/student.svg'
import StudentIcon from '../icons/student.svg'
import CommitmentIcon from '../icons/handshake.svg';
import AwardIcon from '../icons/award.svg'
import BirthIcon from '../icons/baby-carriage.svg';
import WeaponIcon from '../icons/weapon.svg';
import MonumentIcon from '../icons/monument.svg'
import TheaterIcon from '../icons/masks-theater.svg';
import MoscowIcon from '../icons/kremlin.png';
import CameraIcon from '../icons/camera.png';
import RussiaIcon from '../icons/RussiaLang.png';
import EnglandIcon from '../icons/EnglishLang.png';
import AppLogo from '../logo.svg';

import { LOCALES } from '../locales/locales';
export const IconType = Object.freeze({
    Work: Symbol('Work'),
    Student: Symbol('Student'),
    Commitment: Symbol('Commitment'),
    Theater: Symbol('Theatre'),
    Moscow: Symbol('Moscow'),
    Camera: Symbol('Camera'),
    Monument: Symbol('Monument'),
    Award: Symbol('Award'),
    Birth: Symbol('Birth'),
    Weapon: Symbol('Weapon'),
    AppLogo: Symbol('TitleLogo'), 
    Russia: Symbol('Russia'),
    England: Symbol('English'),
});
const getIconRef = (iconType) => {
  switch(iconType) {
    case IconType.Award: return AwardIcon;
    case IconType.Birth: return BirthIcon;
    case IconType.Camera: return CameraIcon;
    case IconType.Commitment: return CommitmentIcon;
    case IconType.Monument: return MonumentIcon;
    case IconType.Moscow: return MoscowIcon;
    case IconType.Student: return StudentIcon;
    case IconType.Theater: return TheaterIcon;
    case IconType.Weapon: return WeaponIcon;
    case IconType.Work: return WorkIcon;
    case IconType.Russia: return RussiaIcon;
    case IconType.England: return EnglandIcon;
    case IconType.AppLogo: return AppLogo;
    return '';
  }
}
const Tarich_FIlm_Url = 'https://www.youtube.com/embed/ZAYhyhsvXdY';
const Dmitry_Film_Url = "https://www.youtube.com/embed/MiXzvd5EbsI";
const Nikita_Film_Url = "https://www.youtube.com/embed/rjeopto7LNw";
const Margo_Film_Url =  "https://www.youtube.com/embed/WK4f9Ie7gVM";
const Elhov_Film_Url =  "https://www.youtube.com/embed/DUXh78KLAKg";

export const DEFAULT_ICON_SIZE = {width: 40, height: 40};
const DEFAULT_ICON_PROPS = {
    size: DEFAULT_ICON_SIZE,
    class : 'small-icon',
    alt: 'Default icon'
}
export const getLangIcon = (locale) => {
 if(locale == LOCALES.ENGLISH)
    return getIcon(IconType.England);

 if(locale == LOCALES.RUSSIAN)
    return getIcon(IconType.Russia);

    return getIcon(IconType.England);
}
export const getIcon = (iconType, iconProps = DEFAULT_ICON_PROPS) => {
    return(
      <img src = {getIconRef(iconType)} 
      style={iconProps.size} 
      className={iconProps.class}
      alt={iconProps.alt}/>
    )
  }
let ArticleId = 0;
export const setArticleId = (id) => {
  ArticleId = id;
}
export const getArticleId = () => { 
  return ArticleId};

const DEFAULT_IMAGE_WIDTH = 200;
const DEFAULT_IMAGE_HEIGHT = 300;
const arrTitleImages = [TarichImage, DmitriyImage, NikitaImage, ElhovImage, MargaritaImage];
export const getTitleImage = (authorId, imageSize = {width: DEFAULT_IMAGE_WIDTH, height: DEFAULT_IMAGE_HEIGHT}) => {
    return(
      <img src = {arrTitleImages[authorId]}
       style={{width: imageSize.width, height: imageSize.height}}
       alt="Unknown author"/>
    )
}  

export const getGalleryTitleImageRef = () => {
  return GalerryTitleImage;
} 
export const getMapMarkerRef = (authorId) => {
  return MapMarker;
}

const arrMarkersPos = [
  [ [59.82, 30.36], //Krivoe zerkalo ->
    [53.89, 27.52],  //museum of BelKino
    [53.90, 27.54]   //BelarusFilm
  ],
  [ [59.82, 30.36], //Krivoe zerkalo ->
    [53.89, 27.52],  //museum of BelKino
    [53.90, 27.54]   //BelarusFilm
  ],
  [ [59.82, 30.36], //Krivoe zerkalo ->
    [53.89, 27.52],  //museum of BelKino
    [53.90, 27.54]   //BelarusFilm
  ],
  [ [59.82, 30.36], //Krivoe zerkalo ->
    [53.89, 27.52],  //museum of BelKino
    [53.90, 27.54]   //BelarusFilm
  ],
  [ [59.82, 30.36], //Krivoe zerkalo ->
    [53.89, 27.52],  //museum of BelKino
    [53.90, 27.54]   //BelarusFilm
  ]
];
export const getMarkerArrPos = (authorId) => {
    return arrMarkersPos[authorId];
}
export const getAuthorUrl =  (authorId) => {
  switch(authorId){
    case 0:
      return Tarich_FIlm_Url;
    case 1:
        return Dmitry_Film_Url;
    case 2:
        return Nikita_Film_Url;
    case 3:
        return Elhov_Film_Url;
    case 4:
        return Margo_Film_Url;
  }
    return 'https://www.spacex.com';
}
export const getCinemaThumbnail = () => {
  return KinoBack;
}
export const getImageBatch = (authorId) => {
   let arrImages;
   let dictResult;
    switch(authorId){
      case 0:
        return [TarichForestTail, TarichCaptainTail, TarichMongolTail, TarichBylatBatyr, TarichFlyers];
      case 1:
        return [DmitriyVolkiImage, DmitriyNatureImage, DmitriyKaterinaImage, DmitriyDiversantImage, DmitriyElizavetaImage];
      case 2:
        return [NikitaDogImage, NikitaTraitorImage, NikitaPolyakiImage, NikitaMistakeImage, NikitaGameImage]; 
      case 3:
        return [ElhovKillerImage, ElhovSorryRussiaImage, ElhovAnomalyImage, ElhovNastyaImage];
      case 4:
        return [MargaritaSummerImage, MargaritaWomenImage, MargaritaHollyImage, MargaritaForeverImage, MargaritaDinousaureImage];  
      default:
        arrImages = [];
    }
    return arrImages;
}


