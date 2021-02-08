import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Header, Button, Menu} from 'grommet'

export default function Head() {
  return (
    <div className="App">
      <Header>
        <Button hoverIndicator />
        <Menu label="account" items={[{ label: 'logout' }]} />
      </Header>
      <h1>Index</h1>
    </div>
  );
}
