import axios from 'axios'
import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'

export const action = async({request})=>{
  console.log(request);
  const formData = await request.formData()
  const searchValue = Object.fromEntries(formData)
  
  return null
}

const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  return (<Wrapper>
    <Form className='form' >
      <input type="search" name='search' id='search' className='form-input' defaultValue={searchTerm}/>
      <button type='submit' className='btn' disabled={isSubmitting}>{isSubmitting?"searching...":"Search"}</button>
    </Form>
  </Wrapper>
    
  )
}

export default SearchForm