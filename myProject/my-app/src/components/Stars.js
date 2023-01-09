import React, { useEffect, useState } from 'react';
import './Stars.css';
import Star from '../resources/starGray'


const Stars = ({ starsCount, setStars }) => {


    const onClick = (index) => {
        if (setStars) {
            setStars(index + 1);
        }
    }       

    const getSilverStars = (_, index) => {
        return <svg onClick={()=>onClick(index)} key={index} className='star_IMG'>{Star}</svg> //worked code
    }

    const getGoldStars = (_, index) => {
        return <svg onClick={()=>onClick(index)} key={index} className='gold_star_IMG'>{Star}</svg> //worked code
    }

    return (
        <div id='stars'>
            <div id='silverStars'>{Array.from({ length: 5 }, getSilverStars)}</div>
            <div id='goldenStars'>{Array.from({ length: starsCount }, getGoldStars)}</div>
        </div>
    )
}
export default Stars;

