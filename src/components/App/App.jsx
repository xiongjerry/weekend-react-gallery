import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';

import './App.css';
import axios from 'axios'

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
      <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Florida Trip</h1>
        </header>
        <p>Some Pictures Over There</p>
        <GalleryList list={galleryList} getGalleryList={getGalleryList}/>
      </div>
      <footer>
        <h2>In Orlando Florida</h2>
      </footer>
      </>
    );
}

export default App;
