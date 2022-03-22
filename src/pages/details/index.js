import React, { useEffect, useState } from 'react'
import { DataContainer, DetailsContainer, NavLink } from './style'
import { useParams } from 'react-router-dom'


function DetailsHome(){

    const [details, setDetails] = useState([])
    const pathImage = "https://image.tmdb.org/t/p/w500"
    const { id } = useParams()

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9d4646473f9d9d575bfbe472389c87a4&language=en-US`)
        .then( response => response.json())
        .then( data => setDetails(data))
    })

    return(
        <DetailsContainer>
        <img src={`${pathImage}${details.poster_path}`} alt={details.original_title} />
        <DataContainer>
        <h1>{details.original_title}</h1>
        <span>{details.overview}</span>
        <h3>Release date: {details.release_date}</h3>

        <NavLink to="/">GO BACK</NavLink>
        </DataContainer>
        </DetailsContainer>
        
    )
}

export default DetailsHome;