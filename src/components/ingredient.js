import React from 'react'
import { Box, Text } from 'grommet'

export default function Ingredient({id, ingredient, specials}) {

  const special = specials.find(special => special.ingredientId == ingredient.uuid);

  return (
    <Box align="start" size="small">
      <li align="start">
        {`${ingredient?.amount??""} ${ingredient?.measure?? ""} ${ingredient.name}`}
      </li>
      {special && (
        <Box align="start" pad={{horizontal:"medium"}}>
          <Text size="small">Title: <em>{special.title}</em></Text>
          <Text size="small">Type: <em>{special.type}</em></Text>
          <Text size="small"><em>{special.text}</em></Text>
        </Box>
      )}
    </Box>
  )
}
