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
  Text,
  Main
} from 'grommet';
import {isMobile} from 'react-device-detect'
import Ingredient from './ingredient'
import Direction from './direction'

export default function DisplayRecipe(props) {
  const [recipe, setRecipe] = useState({})
  const [specials, setSpecials] = useState([])
  const uuid = props?.match?.params?.recipeId ?? ""

  useEffect(()=> {
    getRecipe()
  }, [])

  useEffect(()=> {
    getSpecials()
  }, [])

  const getRecipe = async() => {
    const data = await axios.get(`/recipes?uuid=${uuid}`)
    setRecipe(data?.data?.[0] ?? {})
  }

  const getSpecials = async() => {
    const data = await axios.get('/specials')
    console.log("These are the Specials::::", data.data)
    setSpecials(data?.data ?? [])
  }

  
  console.log(recipe)
  return (
    <Main
      style={{
        maxWidth: "1248px"        
      }}
      margin="auto"
    >
      <Box pad="small" width="100%">
        <Card elevation="large" width="large" margin="auto">
        <CardBody height="large" width="large">
          <Image
            fit="cover"
            src={recipe?.images?.full ?? ""}
          />
        </CardBody>
        <Box pad={{ horizontal: 'medium' }} responsive={true}>
          <Heading level="3" margin={{ vertical: 'medium' }}>
            {recipe?.title?? ""}
          </Heading>
          <Paragraph margin={{ top: 'none' }}>
            {recipe?.description ?? ""}
          </Paragraph>
        </Box>
        <Box>
          <Box align="start" pad="small">
            <Text size="small">Post Date: {recipe?.postDate ?? ""}</Text>
            <Text size="small">Edit Date: {recipe?.editDate ?? ""}</Text>
            <Text size="small">Preparation Time: {recipe?.prepTime ?? ""} minutes</Text>
            <Text size="small">Cook Time: {recipe?.cookTime ?? ""} minutes</Text>
            <Text size="small">Servings: {recipe?.servings ?? ""}</Text>
          </Box>
          <Box pad="small">
            <Text>Ingredients:</Text>
            {recipe.ingredients && recipe.ingredients ? recipe.ingredients.map((ingredient, index) => (
              <Ingredient
                ingredient={ingredient}
                specials={specials}
                key={`ingredient-${index}`}
              />
            )) : ''}
          </Box>
          <Box pad="small">
            <Text>Directions:</Text>
            {recipe.directions && recipe.directions ? recipe.directions.map((direction, index) => (
              <Direction
                direction={direction}
                key={`direction-${index}`}
              />
            )) : ''}
          </Box>
        </Box>
      </Card>
      </Box>
    </Main>
    
  )
}

// export default function DisplayRecipe({id, data}) {
//   const [open, setOpen] = React.useState(false);
//   const [specials, setSpecials] = useState([])

//   useEffect(()=> {
//     getSpecials();
//   }, [])

//   const ExpandButton = ({ ...rest }) => {
//     const label = open ? "Show less" : "Show more";
//     return (
//       <Button
//         hoverIndicator="light-4"
//         label={label}
//         {...rest}
//       />
//     );
//   };

//   const getSpecials = async() => {
//     const data = await axios.get('/specials');
//     console.log("These are the Specials::::", data.data);
//     setSpecials(data?.data ?? []);
//     // return data.data;
//   }

//   const theme = {
//     global: {
//       font: {
//         family: `Comic Sans MS, -apple-system,
//            BlinkMacSystemFont, 
//            "Segoe UI", 
//            Roboto`,
//       },
//     },
//     card: {
//       elevation: 'none',
//       background: 'light-2',
//       footer: {
//         pad: 'medium',
//       },
//     },
//   };

//   return (
//     <Box pad="small" width={isMobile ? "100%" : "33.33%"}>
//       <Card elevation="large" width="medium" id={id}>
//       <CardBody height="small">
//         <Image
//           fit="cover"
//           src={recipe?.images?.medium ?? ""}
//         />
//       </CardBody>
//       <Box pad={{ horizontal: 'medium' }} responsive={true} height={isMobile ? {min:"0"}: {min:"150px"}}>
//         <Heading level="3" margin={{ vertical: 'medium' }}>
//           {recipe?.title?? ""}
//         </Heading>
//         <Paragraph margin={{ top: 'none' }}>
//           {recipe?.description ?? ""}
//         </Paragraph>
//       </Box>
//       <CardFooter>
//         <Box direction="row" align="center" gap="small" margin={{horizontal:"auto", bottom:"15px"}}>
//           <ExpandButton onClick={() => setOpen(!open)} />
//         </Box>
//       </CardFooter>
//       <Collapsible open={open}>
//         <Box align="start" pad="small">
//           <Text size="small">Post Date: {recipe?.postDate ?? ""}</Text>
//           <Text size="small">Edit Date: {recipe?.editDate ?? ""}</Text>
//           <Text size="small">Preparation Time: {recipe?.prepTime ?? ""} minutes</Text>
//           <Text size="small">Cook Time: {recipe?.cookTime ?? ""} minutes</Text>
//           <Text size="small">Servings: {recipe?.servings ?? ""}</Text>
//         </Box>
//         <Box pad="small">
//           <Text>Ingredients:</Text>
//           {recipe.ingredients.map((ingredient, index) => (
//             <Ingredient
//               ingredient={ingredient}
//               specials={specials}
//               key={`ingredient-${index}`}
//             />
//           ))}
//         </Box>
//         <Box pad="small">
//           <Text>Directions:</Text>
//           {recipe.directions.map((direction, index) => (
//             <Direction
//               direction={direction}
//               key={`direction-${index}`}
//             />
//           ))}
//         </Box>
//       </Collapsible>
//     </Card>
//     </Box>
//   )
// }
