import React from 'react'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'
import { useLoaderData, Link,Navigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const cocktailQuery = (id)=>{
  return{
    queryKey:["id",id],
    queryFn: async()=>{
      const {data} = await axios.get(`${url}${id}`)
      return {data}
    }
  }
}

export const loader =(queryClient)=> async({params})=>{
  const {id} = params
  await queryClient.ensureQueryData(cocktailQuery(id))
  return {id}
} 



const Cocktail = () => {
  const {id} = useLoaderData()
  const {data} = useQuery(cocktailQuery(id))
  if(!data) return <Navigate to="/"/>

  const singleDrink = data.data.drinks[0]

  
  const {strDrink:name, strDrinkThumb:image, strInstructions:instructions,strAlcoholic:info,strGlass:glass, strCategory:category } = singleDrink

  const validIngredients = Object.keys(singleDrink).filter((key)=>key.startsWith("strIngredient") && singleDrink[key] !== null).map((key)=>singleDrink[key])
 
 

  return (
    <Wrapper>
      <header>
        <Link to="/" className='btn'>Back Home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className='img'/>
        <div className="drink-info">
          <p>
            <span className='drink-data'>name:</span>{name}
          </p>
          <p>
            <span className='drink-data'>Category:</span>{category}
          </p>
          <p>
            <span className='drink-data'>Info:</span>{info}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>{validIngredients.map((item, index)=>{
              return <span className='ing' key={item}>{item}{index < validIngredients.length - 1?",":""}</span>
            })}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span>{instructions}
          </p>
        </div>
      </div>
    </Wrapper>

  )
}

export default Cocktail