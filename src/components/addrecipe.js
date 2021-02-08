import React, {useState, useEffect} from 'react'
import axios from "axios"
import {
  Box,
  Button,
  Grommet,
  Form,
  FormField,
  Text,
  TextInput
} from 'grommet';
import { grommet } from 'grommet/themes';

export default function AddRecipe() {
  const [value, setValue] = useState({});
  const [statusForm, setStatusForm] = useState('');

  const postRecipes = async(postParams) => {
    const data = await axios.post('/recipes', postParams)
    setValue({})
    setStatusForm(data.statusText)
    console.log(data)
  }

  return (
    <Grommet full theme={grommet}>
      <Box fill align="center" justify="center">
        <Box width="medium">
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onReset={() => setValue({})}
          onSubmit={({ value }) => { postRecipes(value) }}
        >
          <FormField name="title" htmlFor="title" label="Title">
            <TextInput id="title" name="title" />
          </FormField>
          <FormField name="description" htmlFor="description" label="Description">
            <TextInput id="description" name="description" />
          </FormField>
          <FormField name="prepTime" htmlFor="prepTime" label="Preparation Time">
            <TextInput id="prepTime" name="prepTime" />
          </FormField>
          <FormField name="cookTime" htmlFor="cookTime" label="Cook Time">
            <TextInput id="cookTime" name="cookTime" />
          </FormField>
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
        <Text>{statusForm}</Text>
        </Box>
      </Box>
    </Grommet>
  )
}
