import { Heading, HStack, Image, Text, VStack, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  // See <https://chakra-ui.com/docs/styled-system/style-props#border-radius>.
  return (<>
      <VStack boxShadow='outline' p='6' rounded='md' cursor="pointer" align='stretch' bg='white' color='black' >
        <Image  
          borderRadius="x1"
          src={imageSrc} 
          alt={title} />
        
        <Stack p={5} spacing={3}>
          <Heading  as='h4' size='md' noOfLines={1} >
            {title}
          </Heading>
          <Text fontSize='sm' color='gray'>
            {description}
          </Text>
          <HStack fontSize='xs'>
            <Text spacing={2} >
              See more
            </Text> 
            <FontAwesomeIcon icon={faArrowRight} />
          </HStack>
        </Stack>
        
      </VStack>
      
    
  </>);
};

export default Card;
