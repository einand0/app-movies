import styled from 'styled-components'
import { Link } from "react-router-dom"


export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width:100vw;

    img{
        width: 30%;
        margin-right:3rem;
    }
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    h1{
        font-size:40px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 1rem;
        font-weight:700;
    }

    span{
        letter-spacing: 1px;
        margin-bottom: 2rem;
        font-weight: 400;
    }

    h3{
        margin-bottom: 3rem;
        font-weight: 300;
        color:darkgray;
        font-size: 14px;
    }
`

export const NavLink = styled(Link)`
    width: 100px;
    height: 50px;
    background-color: darkblue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color:white;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 1rem;
    -webkit-box-shadow: 0px 2px 14px rgba(29, 140, 231, 0.45);
		-moz-box-shadow:    0px 2px 14px rgba(29, 140, 231, 0.45);
		box-shadow:         0px 2px 14px rgba(29, 140, 231, 0.45);

`