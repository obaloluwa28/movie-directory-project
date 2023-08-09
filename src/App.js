import React, {useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

const TimeConverter = (inputTime) =>{
  let formattedTime
  if(inputTime.includes('m')){
    let actualTime = (inputTime.substring(0, (inputTime.indexOf("m")))/60).toFixed(1)
    formattedTime = actualTime.toString().concat(" ", 'Hrs')
  }else if(inputTime.includes('M')){
    let actualTime = (inputTime.substring(0, (inputTime.indexOf("M")))/60).toFixed(1)
    formattedTime = actualTime.toString().concat(" ", 'Hrs')
  } else if(inputTime.includes('h')){
    let actualTime = inputTime.substring(0, inputTime.indexOf("h"))
    formattedTime = actualTime.toString().concat(" ", 'Hrs')
  } else if(inputTime.includes('H')){
    let actualTime = inputTime.substring(0, inputTime.indexOf("H"))
    formattedTime = actualTime.toString().concat(" ", 'Hrs')
  }
  console.log(formattedTime)
  return formattedTime

}

function App() {
  const [searchdata, setSearchdata] = useState('')
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

  const handleSearchdata = (searchparams) =>{
    console.log(searchparams)
    setSearchdata(searchparams)
  }

  let filteredMovieList = moviearray.filter((movie) => {
    if (searchdata === "") {
      return movie;
    } else if(movie.name.toLowerCase().includes(searchdata.toLowerCase())){
      return movie;
    }
  })

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform objectData={handleData}/>
        </div>
        <div className='layout-column w-30'>
          <Search searcheddata={handleSearchdata}/>
          {filteredMovieList.map((movies, index) => (
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
