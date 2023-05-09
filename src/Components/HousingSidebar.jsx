import { Checkbox, Radio, RadioGroup, Text, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export const HousingSidebar = () => {
    // filter
    const [searchParams, setSearchParam] = useSearchParams();
    const initialOwn = searchParams.getAll("ownerShip")
    const [ownerShip, setOwnership] = useState(initialOwn || "");
    const initialType = searchParams.getAll("type")
    const [type, setType] = useState(initialType || "")
    // sort
    const initSort = searchParams.get("orderPrice")
    const [orderPrice, setOrderPrice] = useState(initSort || "")
    const initRate = searchParams.get("orderRating")
    const [orderRating, setOrderRating] = useState(initRate || "")

    useEffect(() => {
        let params = {
            ownerShip: ownerShip,
            type: type,
        }
        orderPrice && (params.orderPrice = orderPrice)
        orderRating && (params.orderRating = orderRating)
        setSearchParam(params)
    }, [ownerShip, type, orderPrice, orderRating])

    // console.log(Ownership)
    const handleOwnerShip = (e) => {
        const { value } = e.target
        let newOwner = [...ownerShip]
        if (newOwner.includes(value)) {
            newOwner = newOwner.filter((el) => el !== value)
        }
        else {
            newOwner.push(value)
        }
        setOwnership(newOwner);


    }

    const handleType = (e) => {
        const { value } = e.target
        let newType = [...type]
        if (newType.includes(value)) {
            newType = newType.filter((el) => el !== value)
        }
        else {
            newType.push(value)
        }
        setType(newType)


    }

    return (
        <DIV>
            <Box border='1px' borderColor="#c4d3e8" p={"10px"}>


                <Text fontSize={20} p={"5px"}>Filter by Ownership</Text>

                <Checkbox type='checkbox' value={"rent"} onChange={handleOwnerShip} checked={ownerShip.includes("rent")} alignSelf={'start'}
                    size='lg' colorScheme='green'>Rent</Checkbox>

                <br />
                <Checkbox type='checkbox' value={"owner"} onChange={handleOwnerShip} checked={ownerShip.includes("owner")}
                    size='lg' colorScheme='green' >Owner</Checkbox>

                <br />
                <br />


                <Text fontSize={20} p={"5px"}>Filter by Housing Type</Text>
                <Checkbox type='checkbox' value={"resort"} onChange={handleType} checked={type.includes("resort")}
                    size='lg' colorScheme='green' >Resort</Checkbox>

                <br />
                <Checkbox type='checkbox' value={"villa"} onChange={handleType} checked={type.includes("villa")}
                    size='lg' colorScheme='green'>Villa</Checkbox>

                <br />
                <Checkbox type='checkbox' value={"guest house"} onChange={handleType} checked={type.includes("guest house")}
                    size='lg' colorScheme='green' >Guest House</Checkbox>

                <br />
                <Checkbox type='checkbox' value={"cottage"} onChange={handleType} checked={type.includes("cottage")}
                    size='lg' colorScheme='green'>Cottage</Checkbox>

                <br />
                <Checkbox type='checkbox' value={"hotel"} onChange={handleType} checked={type.includes("hotel")}
                    size='lg' colorScheme='green'>Hotel</Checkbox>

            </Box>
            <br />
            <br />

            <Box border='1px' borderColor="#c4d3e8" p={"10px"}>
                <Text fontSize={20} p={"5px"}>Sort by Price</Text>

                <RadioGroup onChange={setOrderPrice} value={orderPrice}>
                    <Radio data-testid="sort-asc" name="sortPrice" value={"asc"} colorScheme='green' size='lg'>Ascending</Radio>
                    <br />
                    <Radio
                        data-testid="sort-desc"
                        name="sortPrice"
                        value={"desc"}
                        colorScheme='green' size='lg'
                    >Descending</Radio>
                </RadioGroup>


                <br />
                <div className='radiobutton'>
                    <h2>Sort by Rating</h2>
                    <Text fontSize={20} p={"5px"}>Sort by Rating</Text>
                    <RadioGroup onChange={setOrderRating} value={orderRating}>
                        <Radio data-testid="sort-asc" name="sortRating" value={"asc"}
                            colorScheme='green' size='lg' >Ascending</Radio>
                        <br />
                        <Radio
                            data-testid="sort-desc"
                            name="sortRating"
                            value={"desc"}
                            colorScheme='green' size='lg'
                        >Descending</Radio>
                    </RadioGroup>

                </div>
            </Box>


        </DIV>
    )
}

const DIV = styled.div`
margin :30px 10px 30px 10px;
align-items:center;
padding: 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
height:100%;
`