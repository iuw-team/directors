import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from 'react-image-gallery';
import { MapContainer, TileLayer } from 'react-leaflet';
import {getAuthorUrl, getCinemaThumbnail, getImageBatch} from './Services';
import {FormattedMessage, useIntl} from 'react-intl';
import { getElementError } from '@testing-library/react';
import { useState } from 'react';
const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

const DEFAULT_SLIDE_DURATION = 350;
const DEFAULT_SLIDE_INTERVAL = 2000;

let updateVideoMode;
class GalleryState {
    constructor(authorId){
        this.state = {
            showIndex: false,
            showBullets: false,
            infinite: true,
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
    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
      }


    _toggleShowVideo(url) {
        let showVideo = !this.state.showVideo;
        this.state.showVideo = showVideo;
       
        if(showVideo){
            this.state.infinite = false;
        }

        if (!showVideo) {
          if (this.state.showPlayButton) {
            this.showGalleryFullscreenButton = false;
          }
    
          if (this.state.showFullscreenButton) {
            this.showGalleryFullscreenButton = false;
          }
        }
      }
    _renderVideo(item) {
     //   this.state.showVideo = true;
        return (
          <div>
            {
              this.state.showVideo ?
                <div className='video-wrapper'>
                    <a
                      className='close-video'
                      onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                    >
                    </a>
                    <iframe
                      width='600'
                      height='800'
                      src={item.embedUrl}
                      frameBorder='0'
                      allowFullScreen
                    >
                    </iframe>
                </div>
              :
                <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
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
    _resetVideo() {
        this.showVideo = false;
    
        if (this.state.showPlayButton) {
            this.showGalleryPlayButton = true;
        }
    
        if (this.state.showFullscreenButton) {
            this.showGalleryFullscreenButton = true;
        }
      }
    
    _getVideoPage(authorId, messages) {

        let item = {
            thumbnail: getCinemaThumbnail(),
            original: getCinemaThumbnail(),
            embedUrl: getAuthorUrl(authorId),
            description: messages['workSample'],
            renderItem: this._renderVideo.bind(this)
            }
            return item;
    }
}


const Gallery = ({authorId}) => {
    let galleryInfo = new GalleryState(authorId);

    const intl = useIntl();
    const arrImgInfo = intl.messages['gallery'][authorId];
    const arrImages = getImageBatch(authorId);
    const arrImgItems = new Array();
    arrImages.forEach( (imgSrc, index) => {
        arrImgItems.push(
            {
                thumbnail: imgSrc,
                original: imgSrc,
                description: arrImgInfo[index]
            }
            
        );
    });
    const getVideoPage = galleryInfo._getVideoPage.bind(galleryInfo, authorId, intl.messages);
    arrImgItems.push(
            getVideoPage(authorId)
    )
    return (
        <div className= 'gallery'>
      <MapContainer center={[40.505, -100.09]} zoom={13}>
          <TileLayer attribution='&copy; 
          <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
        
        <FormattedMessage id='galleryTitle'></FormattedMessage>
        <ReactImageGallery
          items={arrImgItems}
          useWindowKeyDown={true}
          slideDuration={parseInt(DEFAULT_SLIDE_DURATION)}
          slideInterval={parseInt(DEFAULT_SLIDE_INTERVAL)}
          slideOnThumbnailOver={false}
          onSlide={galleryInfo._onSlide.bind(galleryInfo)}
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
        </div>
    );
}

export {
    Gallery
}