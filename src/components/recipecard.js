import React, {useState, useEffect} from 'react'
import axios from "axios"
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Image,
  Paragraph,
  Text
} from 'grommet';
import {isMobile} from 'react-device-detect'
import Ingredient from './ingredient'
import Direction from './direction'
import {Link} from 'react-router-dom'

export default function RecipeCard({id, data}) {
  const [open, setOpen] = React.useState(false);
  const [specials, setSpecials] = useState([])

  useEffect(()=> {
    getSpecials()
  }, [])

  const ExpandButton = ({ ...rest }) => {
    const label = open ? "Show less" : "Show more"
    return (
      <Button
        hoverIndicator="light-4"
        label={label}
        {...rest}
      />
    )
  }

  const getSpecials = async() => {
    const data = await axios.get('/specials')
    console.log("These are the Specials::::", data.data)
    setSpecials(data?.data ?? [])
  }

  const theme = {
    global: {
      font: {
        family: `Comic Sans MS, -apple-system,
           BlinkMacSystemFont, 
           "Segoe UI", 
           Roboto`,
      },
    },
    card: {
      elevation: 'none',
      background: 'light-2',
      footer: {
        pad: 'medium',
      },
    },
  }

  return (
    <Box pad="small" width={isMobile ? "100%" : "33.33%"}>
      <Card elevation="large" width="medium" id={id}>
      <CardBody height="medium">
        <Image
          fit="cover"
          src={data?.images?.medium ?? ""}
        />
      </CardBody>
      <Box pad={{ horizontal: 'medium' }} responsive={true} height={isMobile ? {min:"0"}: {min:"150px"}}>
        <Heading level="3" margin={{ vertical: 'medium' }}>
          {data?.title?? ""}
        </Heading>
        <Paragraph margin={{ top: 'none' }}>
          {data?.description ?? ""}
        </Paragraph>
      </Box>
      <CardFooter>
        <Box direction="row" align="center" gap="small" margin={{horizontal:"auto", bottom:"15px"}}>
          <Link to={`/test1/${data?.uuid??""}`}><Button label="Visit Page"/></Link>
          <ExpandButton onClick={() => setOpen(!open)} />
        </Box>
      </CardFooter>
      <Collapsible open={open}>
        <Box align="start" pad="small">
          <Text size="small">Post Date: {data?.postDate ?? ""}</Text>
          <Text size="small">Edit Date: {data?.editDate ?? ""}</Text>
          <Text size="small">Preparation Time: {data?.prepTime ?? ""} minutes</Text>
          <Text size="small">Cook Time: {data?.cookTime ?? ""} minutes</Text>
          <Text size="small">Servings: {data?.servings ?? ""}</Text>
        </Box>
        <Box pad="small">
          <Text>Ingredients:</Text>
          {data.ingredients && data.ingredients ? data.ingredients.map((ingredient, index) => (
            <Ingredient
              ingredient={ingredient}
              specials={specials}
              key={`ingredient-${index}`}
            />
          )): ""}
        </Box>
        <Box pad="small">
          <Text>Directions:</Text>
          {data.directions && data.directions ? data.directions.map((direction, index) => (
            <Direction
              direction={direction}
              key={`direction-${index}`}
            />
          )): ""}
        </Box>
      </Collapsible>
    </Card>
    </Box>
  )
}
