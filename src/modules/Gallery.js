import './gallery-small.css';
import React from 'react';
import { messages } from '../locales/messages';
import {getImageBatch } from './Services';
import { FormattedMessage, useIntl } from 'react-intl';
import {useState, useEffect, useRef} from 'react'

export const Gallery = ({authorId}) => {
    const intl = useIntl();
    const arrImgInfo = intl.messages['gallery'];
    const arrImages = getImageBatch(0);
    let infoText = arrImgInfo[authorId][0];
    const titleRef = React.createRef();
    const infoRef  = React.createRef();
    const buttonRefs = useRef(new Array());

    const addToRefs = (e) => {
        if(e && !buttonRefs.current.includes(e)){
            buttonRefs.current.push(e);
        }
    }
    const updateTitle = (iSource) => {
        const title = titleRef.current;
        title.src = arrImages[iSource];
        console.log(arrImgInfo[authorId][iSource]);
        infoText = arrImgInfo[authorId][iSource];
        infoRef.current.innerHTML = infoText;
    }
    useEffect(()=>{
        const arrChangeTitleProc = new Array();

        buttonRefs.current.forEach( (element, index) => { 
            arrChangeTitleProc.push( (event) => {
                updateTitle(index);
            });
            element.addEventListener('click', arrChangeTitleProc[index]);
        });
        return () => {
            buttonRefs.current.forEach((element, index) => {
                element.removeEventListener('click', arrChangeTitleProc[index]);
            })
        }
    });

    console.log(arrImages[0]);
    return(
        <div className='gallery'>
            <p><img className='gallery__title-image' ref={titleRef} src={arrImages[0]} alt='Main image'/></p>
            <p className='gallery_title-image-info' ref={infoRef}>{infoText}</p>
            <ul id='gallery__batch'>{
                arrImages.map( (imgSrc, {index}) =>(
                    <li className='gallery__image-button'>
                    <button ref = {addToRefs}>
                    <img src={imgSrc} alt='Buttom image'></img>
                    </button >
                    </li>
                    
            ))
            }</ul>
        </div>

    )

}