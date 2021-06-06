import './GalleryItem.css'
import { useState } from 'react';
import axios from 'axios'

function GalleryItem({item, getGalleryList}) {

    const [isHidden, setIsHidden] = useState(false);

const togglePic = () => {

}

// Use Put route
const handleLike = () => {
    axios.put(`/gallery/like/${item.id}`).then(response => {
        console.log(response);
        getGalleryList();
    }).catch(err => {
        console.log(err)
    })
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