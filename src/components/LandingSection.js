import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

import { useState, useEffect } from "react";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {


  /*
  version-00:

  const [btcData, setBtcData] = useState({}); 
 
  const fetchData = () => { 
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
      .then((response) => response.json()) 
      .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
      .catch((error) => console.log(error)); 
  }; 
 
  useEffect(() => { 
    fetchData(); 
  }, []);
  */

  const [userData, setUserData] = useState({
      greeting: '',
      bio1: '',
      bio2: '',
      imageUrl: '',
  });

  
  const fetchData = () => { 
    
    const newUserData = {
      ...userData,
      greeting: greeting,
      bio1: bio1,
      bio2: bio2,
      imageUrl: 'https://i.pravatar.cc/150?img=7',
    };
    setUserData(newUserData);
     
  }; 

  useEffect(() => { 
    fetchData(); 
  }, []);
  
return (
  <>
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      
      <VStack spacing={6}>
        <Avatar
          size="2xl"
          name='Pete Nwamba'
          src={userData.imageUrl}
        />
        <Text fontSize='s'>
          {userData.greeting}
        </Text>
        <Heading as='h1' size='4xl' noOfLines={1}>
          {userData.bio1}
        </Heading>
        <Text fontSize='xl'>
          {userData.bio2}
        </Text>
      </VStack>
      
      
    </FullScreenSection>
  </>
);
  
};

export default LandingSection;
