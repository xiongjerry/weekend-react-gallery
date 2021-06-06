import './GalleryItem.css'
import { useState } from 'react';
import axios from 'axios'

function GalleryItem({item, getGalleryList}) {

    const [isHidden, setIsHidden] = useState(false);


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
            <div className="list"onClick={() => setIsHidden(!isHidden)}>
                { isHidden ? (
                <div className="pic">
                    <p>{item.description}</p>
                </div>
            ) : (
                <div>
                    <img src={item.path}/>
                </div>
            )}
            </div>
            <div>
                <button onClick={handleLike}>I Like This!</button>
                <p>Number of people who likes this: {item.likes}</p>
            </div>
        </>
    )
}

export default GalleryItem