import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({list, getGalleryList}){
    return (
        <>
         <div className="flex">
            {list.map(item => {
                console.log(item)
                return (
                    <GalleryItem getGalleryList={getGalleryList} key={item.id} item={item} />
                )
            })}
        </div>
        </>
    )
}

export default GalleryList;