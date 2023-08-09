import React, {useState} from 'react'
import './App.css'
// import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

const TimeConverter = (inputTime) =>{
  let formattedTime
  if(inputTime.includes('m')){
    let actualTime = (inputTime.substring(0, inputTime.indexOf("m"))/60).toFixed(1)

    formattedTime = actualTime.toString().concat(" ", 'Hrs')
  }
  console.log(formattedTime)
  return formattedTime

}

function App() {
  const [moviearray, setMoviearray] = useState([])

  const handleData = (objdata) =>{
    console.log({...objdata, duration: TimeConverter(objdata.duration)})
    let newobjdata = {
      ...objdata, 
      ratings: objdata.ratings.toString().concat('/100'),
      duration: TimeConverter(objdata.duration)
    }
    setMoviearray(moviearray => [...moviearray, newobjdata]);
  }

  return (
    <div>
      {/* <h8k-navbar header={ title } /> */}
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform objectData={handleData}/>
        </div>
        <div className='layout-column w-30'>
          <Search />
          {moviearray.map((movies, index) => (
            <Movieslist key={index} {...movies}/>
          )) }
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;
