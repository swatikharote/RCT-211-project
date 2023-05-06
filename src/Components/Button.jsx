import React from 'react'
import { Stack, Button, } from "@chakra-ui/react"

export const ButtonComp = ({ text, color, handleNavigate }) => {



    return (
        <Stack direction='row' spacing={4} align='center'>
            <Button colorScheme={color} variant='solid' onClick={handleNavigate}>
                {text}
            </Button>

        </Stack>
    )
}
