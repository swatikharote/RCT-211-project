import React from 'react'
import { Stack, Button, } from "@chakra-ui/react"

export const ButtonComp = () => {
    return (
        <Stack direction='row' spacing={4} align='center'>
            <Button colorScheme='teal' variant='solid'>
                Button
            </Button>

        </Stack>
    )
}
