import { Button, Input } from '@chakra-ui/react'
import React from 'react'
import '../App.css'

const Create = (props) => {
    
    return (
        <form style={{ width: '800px', display: 'flex', marginTop: '20px' }} onSubmit={(e) => props.handleSubmit(e)}>
            <Input onChange={(e) => props.setTask(e.target.value)} className='play' borderRadius='0px' placeholder='Title...' />
            <Button borderRadius='0px' w='160px' type='submit'>Add</Button>
        </form>
    )
}

export default Create