import React from 'react'
import { Box, Text } from 'grommet'

export default function Direction({id, direction}) {

  return (
    <Box align="start" size="small">
      <li align="start">
        <em>{direction.optional? "Optional: ": ""}</em>
        {direction.instructions}
      </li>
    </Box>
  )
}
