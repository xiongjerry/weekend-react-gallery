import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';


function App() {

const [galleryList, setGalleryList] = useState([])

useEffect(()=> {
  getGalleryList()
}, [])

const getGalleryList = ()=> {
  console.log('GET triggered')
  axios.get('/gallery').then(response => {
      setGalleryList(response.data)
  }).catch(err => {
      console.error(err)
  })
} 


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList list={galleryList} getGalleryList={getGalleryList}/>
      </div>
    );
}

export default App;
