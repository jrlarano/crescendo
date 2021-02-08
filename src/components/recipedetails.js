import React, {useState, useEffect} from 'react'
import { Accordion, AccordionPanel, Box, Grommet, Text, Main, Image } from 'grommet';


export default function RecipeDetails({id, data}) {


  return (
    <>
    <Box pad="medium" background="light-2" align="start" id={id}>
      <Box height="medium" width="medium">
        <Image
          fit="cover"
          src={data?.images?.medium ?? ""}
        />
      </Box>
      <Text>Post Date: {data?.postDate ?? ""}</Text>
      <Text>Edit Date: {data?.editDate ?? ""}</Text>
      <Text>Desciption: {data?.description ?? ""}</Text>
      <Text>Preparation Time: {data?.prepTime ?? ""} minutes</Text>
      <Text>Cook Time: {data?.cookTime ?? ""}</Text>
      <Text>Servings: {data?.servings ?? ""}</Text>
    </Box>
    <Box>
    {data.ingredients.map((ingredient, index) => (
      <Box pad="medium" background="light-2" align="start" key={`ingredient-${index}`}>
        <Text>{`${ingredient.amount} ${ingredient?.measure?? ""} ${ingredient.name}`}</Text>
      </Box>
    ))}
    </Box>
    </>
  )
}