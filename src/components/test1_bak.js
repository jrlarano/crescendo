import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Accordion, AccordionPanel, Box, Grommet, Text, Main } from 'grommet';
import RecipeDetails from './recipedetails'

export default function Test1() {
  const [recipes, setRecipes] = useState([])

  useEffect(()=> {
    getRecipes();
  }, [])

  const getRecipes = async() => {
    const data = await axios.get('/recipes');
    console.log("These are the recipes::::", data.data);
    setRecipes(data?.data ?? []);
    // return data.data;
  }

  return (
    <Main
      style={{
        maxWidth: "1248px"        
      }}
      margin="auto"
    >
      <Accordion>
        {recipes.map((recipe, index) =>(
          <AccordionPanel label={recipe.title} key={`accordPanelKey-${index}`}>
            <RecipeDetails
              id={`recipeDetail-${index}`}
              data={recipe}
            />
          </AccordionPanel>
        ))}
      </Accordion>
    </Main>
  )
}