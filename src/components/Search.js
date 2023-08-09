import React,{useState} from 'react'

function Search({searcheddata}) {
  const [search, setSearch] = useState('')
  const handleChange = (e) =>{
    setSearch(e.target.value)
    searcheddata(e.target.value)
  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        value={search}
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onChange={handleChange}
      />
    </section>
  )
}

export default Search
