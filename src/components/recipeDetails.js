import React, {useState, useEffect} from 'react'
import { Accordion, AccordionPanel, Box, Grommet, Text, Main } from 'grommet';

export default function RecipeDetails(recipeData) {

  return (
    <Box pad="medium" background="light-2" align="start">
      <Text>Post Date: {recipeData?.postDate ?? ""}</Text>
      <Text>Edit Date: {recipeData?.editDate ?? ""}</Text>
      <Text>Desciption: {recipeData?.description ?? ""}</Text>
      <Text>Preparation Time: {recipeData?.prepTime ?? ""} minutes</Text>
      <Text>Cook Time: {recipeData?.cookTime ?? ""}</Text>
      <Text>Servings: {recipeData?.servings ?? ""}</Text>
    </Box>
  )
}