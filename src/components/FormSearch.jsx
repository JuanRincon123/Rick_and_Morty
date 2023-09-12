import { useRef } from "react"


// eslint-disable-next-line react/prop-types
const FormSearch = ({ setSearch }) => {



    const idLocationValue = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setSearch(idLocationValue.current.value.trim())
        idLocationValue.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" placeholder="Enter id location" ref={idLocationValue} />
            <button className="btn">Search</button>
        </form>
    )
}

export default FormSearch