import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const SpanStyled = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
const BoxProductDetailInfo = styled(Box)`
  font-size: 16px;
  color: #1a202c;
`;
export default function ProdectDetail() {
  return (
    <Box
      p={1}
      mx={{
        base: '10px',
        xl: '80px',
      }}
      pb={8}
    >
      <Flex
        flexDirection={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box
          flex={1}
          //   p={3}
          mr={{
            base: '0',
            lg: '30px',
          }}
        >
          <AspectRatio
            ratio={{
              base: '2',
              lg: '1',
            }}
            w={'100%'}
          >
            <Image
              w={'100%'}
              borderRadius={8}
              src={
                'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
              }
            />
          </AspectRatio>
        </Box>
        <Box
          flex={1}
          ml={{
            base: '0',
            lg: '30px',
          }}
          mt={{
            base: '20px',
            lg: '0px',
          }}
        >
          <Heading
            fontSize={{
              base: '24px',
              md: '36px',
              lg: '48px',
            }}
            color="#1A202C"
          >
            Automatic Watch
          </Heading>
          <Box fontSize="24px">$350.00 USD</Box>
          <Box fontSize="24px" color="#718096" mt={6}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Box>
          <Box fontSize="18px" color="#1A202C" mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid
            amet at delectus doloribus dolorum expedita hic, ipsum maxime modi
            nam officiis porro, quae, quisquam quos reprehenderit velit? Natus,
            totam.
          </Box>
          <Divider mt={8} />
          <Box w={'100%'} mt={8}>
            <Box fontSize={'18px'} color="#D69E2E" fontWeight="500">
              FEATURES
            </Box>
            <Flex
              w={'100%'}
              mt={3}
              flexDirection={{
                base: 'column',
                sm: 'row',
              }}
            >
              <Box flex={1}>
                <Box>Chronograph</Box>
                <Box mt={2}>Master Chronometer Certified</Box>
                <Box mt={2}>Tachymeter</Box>
              </Box>
              <Box
                flex={1}
                mt={{
                  base: '30px',
                  sm: '0',
                }}
              >
                <Box>Anti-magnetic</Box>
                <Box mt={2}>Chronometer</Box>
                <Box mt={2}>Small seconds</Box>
              </Box>
            </Flex>
          </Box>
          <Divider mt={8} />
          <Box w={'100%'} mt={8}>
            <Box fontSize={'18px'} color="#D69E2E" fontWeight="500">
              PRODUCT DETAILS
            </Box>
            <BoxProductDetailInfo mt={4}>
              <SpanStyled>Between lugs:</SpanStyled>
              20 mm
            </BoxProductDetailInfo>
            <BoxProductDetailInfo mt={1}>
              <SpanStyled>Bracelet:</SpanStyled>
              leather strap
            </BoxProductDetailInfo>
            <BoxProductDetailInfo mt={1}>
              <SpanStyled>Case:</SpanStyled>
              Steel
            </BoxProductDetailInfo>
            <BoxProductDetailInfo mt={1}>
              <SpanStyled>Case diameter:</SpanStyled>
              42 mm
            </BoxProductDetailInfo>
            <BoxProductDetailInfo mt={1}>
              <SpanStyled>Dial color:</SpanStyled>
              Black
            </BoxProductDetailInfo>
            <BoxProductDetailInfo mt={1}>
              <SpanStyled>Crystal:</SpanStyled>
              Domed, scratch-resistant sapphire crystal with anti-reflective
              treatment inside
            </BoxProductDetailInfo>
            <BoxProductDetailInfo mt={1}>
              <SpanStyled>Water resistance:</SpanStyled>5 bar (50 metres / 167
              feet)
            </BoxProductDetailInfo>
            <Box w={'100%'} mt={8}>
              <Button w={'100%'} textTransform="uppercase" colorScheme="teal">
                Add to cart
              </Button>
              <Box w={'100%'} mt={4} textAlign="center">
                2-3 business days delivery
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
