import TarichImage from '../resources/title-image/Yury_Tarich.jpg';
import TarichForestTail from '../resources/gallery/Tarich_forest_cinema.jpg';
import TarichCaptainTail from '../resources/gallery/Tarich_Captain.jpg';
import TarichMongolTail from '../resources/gallery/Tarich_mongol.jpg';
import TarichBylatBatyr from '../resources/gallery/Tarich_BulatBatyr.jpg';
import TarichFlyers from '../resources/gallery/Tarich_Flyers.jpg';
import KinoBack from '../resources/gallery/Kino_looper.jpg';

const Tarich_FIlm_Url = 'https://www.youtube.com/embed/ZAYhyhsvXdY';
const DEFAULT_ICON_SIZE = 40;
export const getIcon = (iconName, iconSize = DEFAULT_ICON_SIZE) => {
    return(
      <img src = {iconName} 
      style={{ width: iconSize, height: iconSize}} 
      alt="Unknown icon"/>
    )
  }

const DEFAULT_IMAGE_WIDTH = 200;
const DEFAULT_IMAGE_HEIGHT = 300;
const arrTitleImages = [TarichImage, TarichImage, TarichImage];
export const getTitleImage = (authorId, imageSize = {width: DEFAULT_IMAGE_WIDTH, height: DEFAULT_IMAGE_HEIGHT}) => {
    return(
      <img src = {arrTitleImages[authorId]}
       style={{width: imageSize.width, height: imageSize.height}}
       alt="Unknown author"/>
    )
}  

export const getAuthorUrl =  (authorId) => {
  switch(authorId){
    case 0:
    case 1:
      return Tarich_FIlm_Url;
  }
}
export const getCinemaThumbnail = () => {
  return KinoBack;
}
export const getImageBatch = (authorId) => {
   let arrImages;
   let dictResult;
    switch(authorId){
      case 0:
      case 1:
      case 2:
        arrImages = [TarichForestTail, TarichCaptainTail, TarichMongolTail, TarichBylatBatyr, TarichFlyers];
        break;
      default:
        arrImages = [];
    }
    return arrImages;
}


