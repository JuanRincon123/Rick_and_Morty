/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import UseFetch from './../Hooks/UseFetch';

const ResidentsCard = ({ url }) => {


    const [character, getCharacter] = UseFetch(url)

    useEffect(() => {
        getCharacter()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <article className='resident__article'>
            <header className='resident__header'>
                <div className="resident__status">
                <span className={`circle_status ${character?.status}`}></span>
                <span className='character_status-value'>{character?.status}</span>
                </div>
                <h1> <img className='resident__img' src={character?.image} alt="" /></h1>
            </header>
            <section className='resident__name'>
                <h2 className='resident__h2'>{character?.name}</h2>
                <hr />
                <ul className='resident__ul'>
                    <li><span className='specie'>Specie</span> <br /> <span className='species'>{character?.species}</span></li>
                    <li><span className='origin'>Origin </span><br /> <span className='origins'>{character?.origin.name}</span></li>
                    <li><span className='episode'>Episodes where apper </span><br /> <span className='episodes'>{character?.episode.length}</span> </li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentsCard
