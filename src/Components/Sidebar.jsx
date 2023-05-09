import React from "react";
import styled from "styled-components";

import {
  Box,
  Image,
  Checkbox,
  CheckboxGroup,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <Box mt={"40px"}>
      <VStack pt={"30px"} pb={"30px"} border={"3px solid #3A98B9"}>
        <Image
          width="30%"
          borderRadius={"50%"}
          src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Center>
          <Text as="b" fontFamily={"heading"}>
            Matthew Scott
          </Text>
        </Center>
        <CheckboxGroup colorScheme="orange">
          <VStack spacing={5}>
            <Checkbox value="personal-info" alignSelf={"start"}>
              Personal info
            </Checkbox>
            <Checkbox value="bookings" alignSelf={"start"}>
              Bookings
            </Checkbox>
            <Checkbox value="promo-codes" alignSelf={"start"}>
              Promo codes
            </Checkbox>
            <Checkbox value="bonuses" alignSelf={"start"}>
              Bonuses
            </Checkbox>
            <Checkbox value="reviews" alignSelf={"start"}>
              Reviews
            </Checkbox>
            <Checkbox value="payment-method" alignSelf={"start"}>
              Payment method
            </Checkbox>
            <Checkbox value="messages" alignSelf={"start"}>
              Promo Codes
            </Checkbox>
            <Checkbox value="wishlist" alignSelf={"start"}>
              Wishlist
            </Checkbox>
            <Checkbox value="settings" alignSelf={"start"}>
              Settings
            </Checkbox>
          </VStack>
        </CheckboxGroup>
      </VStack>
    </Box>
  );
};
