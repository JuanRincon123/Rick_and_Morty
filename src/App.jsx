import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import UseFetch from './Hooks/UseFetch'
import InfoLocation from './components/InfoLocation'
import ResidentsCard from './components/ResidentsCard';
import FormSearch from './components/FormSearch'
import img from '../public/img/image3.png'


function App() {


  const randomId = getRandomNumber(126)

  const [search, setSearch] = useState(randomId)

  const url = `https://rickandmortyapi.com/api/location/${search ? search : randomId}`

  const [location, getApiLocation, hasError] = UseFetch(url)


  useEffect(() => {
    getApiLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])





  return (
    <div className='app'>

      <div className='img'>
        <img src={img} alt="" />
      </div>

      <div className="form__search">
        <FormSearch setSearch={setSearch} />
      </div>

      <div className="info__location">
        <InfoLocation location={location} />
      </div>

      <div className="resident">
        {
          hasError ? <h2>❌ Hey! you must provide an id from 1 to 126 😓</h2>
            : (
              <>
                {
                  location?.residents.map(url => (
                    <ResidentsCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </>
            )}
      </div>
    </div>
  )
}

export default App

