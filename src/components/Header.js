import React from "react";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from '../assets/Kensa cropped2.png';


const Header = () => {

  return (
    <>
      <Flex h='10vh' px="100px" py="10px" bg="#FDEEDC" alignItems="center" justifyContent="space-between">
        <Link to="/"> 
          <Image css={`&:hover {transform: translate(0,2px)`} h="70px" w="150px" src={logo} />
        </Link>
        <Flex alignItems="space-between">
          <HStack fontFamily="Helvetica" justifyContent="space-between" spacing="150px" letterSpacing={".5px"} fontSize="20px" color="#DEA057" fontWeight="500" >
            <Link to="/whykensa">
              <Text css={`&:hover {color: #E38B29; font-weight: 550`}> WHY KENSA</Text>
            </Link>
            <a href="https://github.com/oslabs-beta/Kensa" target="_blank" rel="noreferrer">
              <Text css={`&:hover {color: #E38B29; font-weight: 550`}>DOCS</Text>
            </a>   
            <Link to="/team">
              <Text css={`&:hover {color: #E38B29; font-weight: 550`}>TEAM</Text>
            </Link>        
          </HStack>
        </Flex>

        <Flex alignItems="flex-end">
          <HStack fontFamily="Helvetica" alignItems='center' justifyContent="flex-end" spacing="50px" fontSize="20px" letterSpacing={".5px"} color="#DEA057" fontWeight="500" >
            <a href='http://Kensa-env.eba-qrqpsy69.us-west-1.elasticbeanstalk.com/'>
              <Text css={`&:hover {color: #E38B29; font-weight: 550`}>SIGN UP</Text>
            </a>
            <a href='http://Kensa-env.eba-qrqpsy69.us-west-1.elasticbeanstalk.com/login'><Text>LOGIN</Text></a>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;