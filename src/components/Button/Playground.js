import React from 'react'
import { Button } from 'sulfur-ui'

function Playground() {

    const playgroundContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    };
    
  return (
    <div style={playgroundContainerStyle}>
        <Button>
            Submit
        </Button>
    </div>
  )
}

export default Playground