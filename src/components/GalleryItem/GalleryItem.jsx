import './GalleryItem.css'
import { useState } from 'react';


function GalleryItem({item, getGalleryList}) {

const togglePic = () => {

}

const handleLike = () => {

}



    return (
        <>
            <div className="pic">
                <img onClick={togglePic} src={item.path}/>

                <button onClick={handleLike}>I Like This!</button>
                <p>Number of people who likes this: {item.likes}</p>
            </div >
        </>
    )
}

export default GalleryItem