import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image
} from '@chakra-ui/react';

import { Link } from "react-router-dom"
import { DASHBOARD, LOGIN, REGISTER } from './lib/routes';
import { useAuth } from './hooks/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Landing() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {user, userLoading} = useAuth();

  useEffect(() => {
      if(!userLoading && user){
          navigate(DASHBOARD);
      }
  }, [pathname, user, userLoading, navigate]);

  return (
    <>

      <Container maxW={'3xl'}>
        
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 4, md: 8 }}
          py={{ base: 20, md: 36 }}>
            <Box>

            <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Only <br />
            <Text as={'span'} color={'purple.400'}>
              Swipes
            </Text>
          </Heading>
              </Box>
                       <Image src='https://i.ibb.co/YZjj0Ym/download.png' alt='Joe Bruin'/>
          <Text color={'gray.500'}>
            Get in on the action, and start easily trading your swipes. 
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Box>

            <Button
              as={Link}
              to={LOGIN}
              colorScheme={'purple'}
              bg={'purple.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.500',
              }}>
              Log In
            </Button>
            <Button
              as={Link}
              to={REGISTER}
              ml="5"
              colorScheme={'purple'}
              bg={'purple.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.500',
              }}>
              Register
            </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
