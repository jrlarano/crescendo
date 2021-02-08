import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Test2() {
  const [initialState, setInitialState] = useState({});

  useEffect(()=> {
    axios.get("/recipes").then(response => {
      console.log("this is the response", response);
      // setInitialState(response.data);
    });
  }, [])

  return (
    <div>
      <h1>This is the test2</h1>
    </div>
  )
}