import React from 'react'
import { Container, MovieList, Movie, Header } from './styles.js'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


function Home(){

    const [movies, setMovies] = useState([])
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9d4646473f9d9d575bfbe472389c87a4&language=en-US&page=1')
            .then( response => response.json())
            .then( data => setMovies(data.results))
    }, [])


    return (
        <>
        <Header>
            <Link to="/toprated">GO TO TOP RATED MOVIES</Link>
        </Header>
        <Container>
        
            <h1>MOST POPULAR MOVIES</h1>
            <MovieList>
                {movies.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}


              
            </MovieList>
        </Container>
        </>
    )
}

export default Home;