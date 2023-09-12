/* eslint-disable react/prop-types */

const InfoLocation = ({ location }) => {
    return (
        <article className="location__article">
            <header className="location__head">
                <h1 className="title">
                    {location?.name}
                </h1>
            </header>
            <section className="location__section">
                <ul className="location__list">
                    <li><span className=" type">Type </span><br /><span className = 'types'>{location?.type}</span></li>
                    <li><span className = 'dimension'>Dimesion </span><br /><span className = 'dimensions'>{location?.dimension}</span></li>
                    <li><span className = 'poblacion'>Poblacion </span><br /><span className = 'poblacions'>{location?.residents.length}</span></li>
                </ul>

            </section>
        </article>
    )
}

export default InfoLocation