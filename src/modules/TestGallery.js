import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import {getAuthorUrl, getCinemaThumbnail, getGalleryTitleImageRef, getImageBatch} from './Services';
import {FormattedMessage, useIntl} from 'react-intl';
import { useState, useEffect } from 'react';

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

const DEFAULT_SLIDE_DURATION = 350;
const DEFAULT_SLIDE_INTERVAL = 2000;

class GalleryState {
    constructor(authorId){
          this.state ={
            showIndex: false,
            showBullets: false,
            infinite: false,
            showThumbnails: true,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: true,
            showGalleryPlayButton: true,
            showNav: true,
            isRTL: false,
            slideDuration: DEFAULT_SLIDE_DURATION,
            slideInterval: DEFAULT_SLIDE_INTERVAL,
            slideOnThumbnailOver: false,
            thumbnailPosition: 'bottom',
            showVideo: false,
            useWindowKeyDown: true,
          };
    }
   
}


const Gallery = ({authorId}) => {
    let galleryInfo = new GalleryState(authorId);
    const intl = useIntl();
    const arrImgInfo = intl.messages['gallery'][authorId];
    const arrImages = getImageBatch(authorId);
    const arrImgItems = new Array();
    const [videoMode, setVideoMode] = useState(true);

    arrImages.forEach( (imgSrc, index) => {
        arrImgItems.push(
            {
                thumbnail: imgSrc,
                original: imgSrc,
                description: arrImgInfo[index]
            }
            
        );
    });
    const onSlide = (index) =>{
      resetVideo();
      console.debug('slid to index', index);
    }

  const toggleShowVideo = (url) => {
      const showVideo = !videoMode;
      //setVideoMode(showVideo);
      if(showVideo){
          galleryInfo.state.infinite = false;
      }

      if (!showVideo) {
        if (galleryInfo.state.showPlayButton) {
          galleryInfo.state.showGalleryFullscreenButton = false;
        }
  
        if (galleryInfo.state.showFullscreenButton) {
          galleryInfo.state.showGalleryFullscreenButton = false;
        }
      }
    }

  const renderVideo = (item)  => {
      return (
        <div>
          {
            videoMode ?
              <div className='video-wrapper'>
                  <a
                    className='close-video'
                    onClick={toggleShowVideo(item.embedUrl)}
                  >
                  </a>
                  <iframe
                    width='600'
                    height='850'
                    src={item.embedUrl}
                    frameBorder='0'
                    allowFullScreen
                  >
                  </iframe>
              </div>
            :
              <a onClick={toggleShowVideo(item.embedUrl)}>
                <div className='play-button'></div>
                <img className='image-gallery-image' src={item.original} />
                {
                  item.description &&
                    <span
                      className='image-gallery-description'
                      style={{right: '0', left: 'initial'}}
                    >
                      {item.description}
                    </span>
                }
              </a>
          }
        </div>
      );     
  };
  const resetVideo = () => {
    //  setVideoMode(false);
      if (galleryInfo.state.showPlayButton) {
          galleryInfo.state.showGalleryPlayButton = true;
      }
  
      if (galleryInfo.state.showFullscreenButton) {
          galleryInfo.state.showGalleryFullscreenButton = true;
      }
    }
  
   const getVideoPage = (authorId) => {
      let item = {
          thumbnail: getCinemaThumbnail(),
          original: getCinemaThumbnail(),
          embedUrl: getAuthorUrl(authorId),
          description: intl.messages['workSample'],
          renderItem: renderVideo,
          }
          return item;
  }
    arrImgItems.push(getVideoPage(authorId))
    return (
        <div className= 'gallery card'>
          <div className='gallery-title card-header w-100 '>
            <h3 className='card-title display-3 text-center'>
            <FormattedMessage id='galleryTitle'></FormattedMessage>
           </h3>
          </div>
          
        <section className='gallery-content card-body w-70'>
        <ReactImageGallery
          items={arrImgItems}
          useWindowKeyDown={true}
          slideDuration={parseInt(DEFAULT_SLIDE_DURATION)}
          slideInterval={parseInt(DEFAULT_SLIDE_INTERVAL)}
          slideOnThumbnailOver={false}
          onSlide={onSlide}
          infinite={galleryInfo.state.infinite}
          showBullets={galleryInfo.state.showBullets}
          showFullscreenButton={galleryInfo.state.showFullscreenButton && galleryInfo.state.showGalleryFullscreenButton}
          showPlayButton={galleryInfo.state.showPlayButton && galleryInfo.state.showGalleryPlayButton}
          showThumbnails={galleryInfo.state.showThumbnails}
          showIndex={galleryInfo.state.showIndex}
          showNav={galleryInfo.state.showNav}
          isRTL={galleryInfo.state.isRTL}
          thumbnailPosition={galleryInfo.state.thumbnailPosition}
        />
        </section>
        </div>
    );
}

export {
    Gallery
}
