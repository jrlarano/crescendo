import React, {useState, useEffect} from 'react'
import axios from "axios"
import {
  Box,
  Main,
  Button
} from 'grommet';
import RecipeCard from './recipecard'
import { Link } from 'react-router-dom'

export default function Test1() {
  const [recipes, setRecipes] = useState([])

  useEffect(()=> {
    getRecipes()
  }, [])

  const getRecipes = async() => {
    const data = await axios.get('/recipes')
    setRecipes(data?.data ?? [])
  }

  return (
    <Main
      style={{
        maxWidth: "1248px"        
      }}
      margin="auto"
    >
      <Box pad="medium" margin="auto">
        <Link to="/test1/addrecipe">
          <Button label="Add new recipe"/>
        </Link>
      </Box>
      <Box pad="medium" align="start" direction="row" wrap={true}>
        {recipes.map((recipe, index) =>(
          <RecipeCard
            id={`recipeCard-${index}`}
            key={`recipeCard-${index}`}
            data={recipe}
          />
        ))}
      </Box>
    </Main>
  )
}
