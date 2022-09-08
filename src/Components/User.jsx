import React from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { ACTIONS } from '../App';


const User = ({ item, todo, arr }) => {
    console.log(arr);
    
    return (
        <Box display='flex'
            alignItems='center'
            justifyContent='space-between'
            p='26px'
            borderRadius='6px'
            w='800px'
            h='80px'
            style={{ backgroundColor: arr ? 'white' : 'yellow' }} marginTop='20px'>
            <Text fontSize='20px' fontWeight='600'>{item.task}</Text>
            <Flex gap='30px' alignItems='center'>
                <Button onClick={() => todo({ type: ACTIONS.EDITTODO, payload: { id: item.id } })} bg='green' color='white'>Done</Button>
                <Button onClick={() => todo({ type: ACTIONS.DELTODO, payload: { id: item.id } })} bg='red' color='white'>Delete</Button>
            </Flex>
        </Box>
    )
}

export default User