import TarichImage from '../resources/title-image/Yury_Tarich.jpg';

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


