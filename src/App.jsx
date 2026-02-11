import { useState } from 'react'
import Header from './components/organisms/Header.jsx'
import Input from './components/atoms/Input/Input.jsx'
import Button from './components/atoms/Button/Button.jsx'
function App() {

  return (
    <>
      <Header />
      <h1>Hello</h1>



<Input
        label="Email"
        type="email"
        placeholder="email"
      />

      <Button onClick={() => console.log("clicked")} variant="secondary">
        Submit
        </Button>

    </>
  )
}

export default App
