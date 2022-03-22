import styled from 'styled-components'

export const Container = styled.div`

    padding: 2rem;

    h1{
        text-align: center;
        margin: 3rem 0;
        letter-spacing: 2px;
        font-size:40px;
    }

    
`

export const MovieList = styled.ul`

    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`

export const Movie = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 200px;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    span{
        font-weight: bold;
        text-align:center;
    }

    a{
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }

`

export const Header = styled.header`

    height: 50px;
    background-color: darkblue;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a{
        text-decoration: none;
        color:white;
    }
`