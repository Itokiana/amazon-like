import { Badge, Box, ChakraProvider, Image } from '@chakra-ui/react'

import Rating from "react-rating";

import data from "./data";


function App() {
  return (
    <ChakraProvider>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="index.html">amazona</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products && data.products.map((product, index) => (
              <Box maxW='sm' margin='8' borderWidth='1px' borderRadius='lg' overflow='hidden'key={index}>
                <Image src={product.image} />
          
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      New
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      //
                    </Box>
                  </Box>
          
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {product.name}
                  </Box>
          
                  <Box>
                    {product.price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                      {' '}$
                    </Box>
                  </Box>
          
                  <Box display='flex' mt='2' alignItems='center'>
                    <Rating
                      initialRating={product.rating}
                      readonly
                      style={{color: "orange", fontSize: "8px"}}
                    />
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {product.numReviews} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))
          }
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </ChakraProvider>
  );
}

export default App;
