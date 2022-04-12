import React from 'react'
import { Input } from 'reader/atoms'

const RenderText = () => {
    return <div style={{ padding: '5px' }}>
        <Input
            type={"text"}
            defaultValue={"value"}
            onClick={()=> {console.log('clicked')}}
        />
    </div>
}

export default RenderText