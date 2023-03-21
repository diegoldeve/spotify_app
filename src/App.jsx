import { useEffect, useState } from 'react'
import './App.css'
import { SongCards } from './Components/SongCards'
function App() {

  const [search, setSearch] = useState();
  const [exist, setExist] = useState(false);
  const [secondSearch, setSecondSearch] = useState();

  function handleSearch(e){
    if(!search){
      e.preventDefault();
      alert('You have to type something :)')
    }else{
      e.preventDefault();
      searchSpotify(search)
     
    }
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d43daf606msh5e519f4689a8d04p1863d1jsne033c52d5166',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  async function searchSpotify(search){
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=tracks&offset=0&limit=25&numberOfTopResults=5`
      let res = await fetch(url, options)
      let data = await res.json();
     // console.log(data.tracks.items)
      setExist(true)
     // console.log(data)
      setSecondSearch(data.tracks.items)
      
    } catch (error) {
      console.log(`You have the error: ${e}`)
    }
  }
  
/*  useEffect(()=>{
    searchSpotify()
  },[exist])*/



  
  return (
    <div className="App">
     <h2>Search your favorites songs or artists :)</h2>
     <h3>Spotify API</h3>
     <form onSubmit={handleSearch}>
      <input type="text" name="" id="" 
        placeholder='Pink Floyd..'
        onChange={e => setSearch(e.target.value)}
      />
      <button>Search</button>
     </form>
     {exist&&(
      <>
        <SongCards
        secondSearch = {secondSearch}
        />
      </>
     )}
    </div>
    
  )
}

export default App
