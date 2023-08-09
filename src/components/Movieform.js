import React,{useState} from 'react'

function Movieform({objectData}) {
  const [dataObjs, setDataObjs] = useState({
    name: '',
    ratings: 0,
    duration: ''
  })

  const [errornotification, setErrornotification] = useState({
    status: false,
    values: ''
  })

  const handleSubmit = () =>{
    if( dataObjs.duration.substring(dataObjs.duration.length - 1) !== 'm' && dataObjs.duration.substring(dataObjs.duration.length - 1) !== 'h'){
      console.log('Please specify the time in hours or minutes (e.g. 2.5h or 150m)')
      setErrornotification({...errornotification, status:true, values: 'Please specify the time in hours or minutes (e.g. 2.5h or 150m'})
    } else if(dataObjs.name === ''){
      console.log('Please Provide the name of movie')
      setErrornotification({...errornotification, status:true, values: 'Please Provide the name of movie'})
    } else if(dataObjs.ratings > 100){
      console.log('Please Provide rating Less than or equal to 100')
      setErrornotification({...errornotification, status:true, values: 'Please Provide rating Less than or equal to 100'})
    } else{
      objectData(dataObjs)
    }
  }

  const handleChange = (e) =>{
    setErrornotification(false)
    const {id, value} = e.target
    if(id === 'ratings'){
      setDataObjs({...dataObjs, [id]: value})
    } else{
      setDataObjs({...dataObjs, [id]: value})
    }
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={dataObjs.name}
              onChange={handleChange}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={dataObjs.ratings}
              onChange={handleChange}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={dataObjs.duration}
              onChange={handleChange}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {errornotification.status && <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            {errornotification.values}
          </div> }
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={handleSubmit}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
