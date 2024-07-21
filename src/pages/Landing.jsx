import React from 'react'
import axios from "axios"
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
import { useQuery } from '@tanstack/react-query'
  
const searchCocktailsQuery = (searchTerm)=>{
  return{
    queryKey :["search", searchTerm || "all"],
    queryFn: async()=>{
      const response = await axios.get(`${url}${searchTerm}`)
      return response.data.drinks
    }
    
  }
}

export const loader =(queryClient)=> async({request})=>{
  const search =new URL(request.url)
  const searchTerm = search.searchParams.get("search") || ""

  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
  return {searchTerm}
}

const Landing = () => {
  const { searchTerm} = useLoaderData()
   const {data:drinks} = useQuery(searchCocktailsQuery(searchTerm))
  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
      <CocktailList drinks={drinks}/>
    </>
  )
}

export default Landing