import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

// import { Link } from 'react-router-dom';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const SocialMediaLinksList = () => {
  const socialMediaLinks = socials.map((socialMediaLink) => {
    return (
      <a href={socialMediaLink.url}
        children={<FontAwesomeIcon icon={socialMediaLink.icon} size="2x"/>} />
    );
  });
  return <ul>{socialMediaLinks}</ul>
}

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8} > 
              {/* Add social media links based on the `socials` data */            
                /*
                version-01:
                <ul>
                  <SocialMediaLinksList />
                </ul>
                */ 
                
                // version-02:
                socials.map((social) => (
                  <a
                    key={social.url} 
                    href={social.url}
                    children={<FontAwesomeIcon 
                      key={social.url}
                      icon={social.icon} 
                      size="2x"/>} />
                ))
                
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */
                <a
                  children="Projects"
                  onClick={handleClick("projects")} />
              }
              {
                <a children="Contact Me"
                  href="/#contact-me"
                  onClick={handleClick("contactme")}/>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
