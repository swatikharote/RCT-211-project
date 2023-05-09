import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDestination, deleteDestination } from '../Redux/productReducer/action';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminSideBar from '../Components/AdminSideBar'

const AdminDestination = () => {
    const data = useSelector((store) => store.productReducer.products);
    const loading = useSelector((store) => store.productReducer.isLoading);
    const dispatch = useDispatch()

    let limit = 11;






    useEffect(() => {
        dispatch(getDestination(limit))
    }, [])

    const deleteDes = (id) => {
        dispatch(deleteDestination(id))
        dispatch(getDestination(limit))
        alert('Destination Deleted')
    }

    if (loading) {
        return <h1 style={{ fontSize: '40px', textAlign: 'center', marginTop: '20px' }}>Loading...</h1>
    }

    return (
        <Flex justifyContent={'space-between'} w={"98%"} m={"auto"}>
            <Box width={'20%'}>
               <AdminSideBar/>
            </Box>
            <Box width={'80%'}> <DIV>


                {data.map((e) => {
                    return (
                        <div key={e.id}>
                            <img src={e.image} alt={e.destination} />
                            <Text position={'absolute'}
                                top={'22px'}
                                left={'25px'}
                                color={'#3A5BA0'}
                                bg={'whitesmoke'}
                                p={'3px'}
                                pl={'5px'}
                                pr={'5px'}
                                borderRadius={'10px'}
                                as={'b'} >{e.destination}</Text>
                            <p>{e.details}</p>
                            <Flex justifyContent={'space-between'}>
                                <Button _hover={{ bg: 'green.400' }}>
                                    <Link to={`/edit/${e.id}`}>Edit</Link>
                                </Button>
                                <Button onClick={() => deleteDes(e.id)} _hover={{ bg: 'red' }}>Delete</Button>
                            </Flex>

                        </div>
                    )

                })}

            </DIV></Box>
        </Flex>
    )
}


const DIV = styled.div`
margin-top:10px;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-template-rows:auto;
gap:8px;
 

div{border-radius:5px;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
align-items:center;
padding:10px;
position: relative;
text-align: center;
}

.img{
    width:100%;
    padding:5px;

}
@media  all and (max-width: 425.5px){
  grid-template-columns: repeat(1,1fr);
}
@media  all and (min-width:426px) and  (max-width: 768px){
  grid-template-columns: repeat(2,1fr);
}


`

export default AdminDestination
