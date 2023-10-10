import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const Signup = () => {
    const [show,setShow]=useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmpassword,setconfirmpassword]=useState();
    const [pic,setNPic]=useState();
    const handleClick=()=>setShow(!show);
    const postDetails=(pics)=>{};
    const submitHandler = async () => {};
  return (
    <VStack spacing='5px'>
        <FormControl id="first-name" is isRequired>

                <FormLabel>Name</FormLabel>
                <Input
                placeholder="Enetr your name"
                onChange={(e)=>setName(e.target.value)}
                />
            
            
        </FormControl>

        <FormControl id="email" is isRequired>

                <FormLabel>Email</FormLabel>
                <Input
                placeholder="Enetr your Email"
                onChange={(e)=>setEmail(e.target.value)}
                />
            
            
        </FormControl>


        <FormControl id="password" is isRequired>

                <FormLabel>password</FormLabel>
                <InputGroup size="md">
                <Input type={show?"text": "password"}
                placeholder="Enetr your Password"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show? "Hide":"show"}
                    </Button>                
                </InputRightElement>
                
                </InputGroup>
                
            
            
        </FormControl>
         <FormControl id="password" is isRequired>

                <FormLabel>Confirm password</FormLabel>
                <InputGroup size="md">
                <Input type={show?"text": "password"}
                placeholder="Confirm Password"
                onChange={(e)=>setconfirmpassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show? "Hide":"show"}
                    </Button>                
                </InputRightElement>
                
                </InputGroup>
                
            
            
        </FormControl>
        <FormControl id="pic">

                <FormLabel>Upload your Picture</FormLabel>
                <Input
                type='file'
                p={"1.5"}
                accept="image/*"
                onChange={(e)=>postDetails(e.target.files[0])}
                />
            
            
        </FormControl>
    <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        
      >
        Sign Up
    </Button>


      
    </VStack>
  )
};

export default Signup
