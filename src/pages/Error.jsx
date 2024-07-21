import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from "../assets/not-found.svg"
 
const Error = () => {
    const error = useRouteError();

    if(error.status === 404){
      return(
      <Wrapper>
        <div>
         <img src={img} alt="error " />
         <h4>{error.statusText}</h4>
         <h3><Link to="/">Back Home</Link></h3> 
        </div>
      </Wrapper>
      )
    }

  return (
  <Wrapper>
    <div>
      <h3>something went wrong</h3>
    </div>
  </Wrapper>
  )
}

export default Error