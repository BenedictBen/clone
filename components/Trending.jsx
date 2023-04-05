import { Box, Heading, Flex, Show, Text, chakra} from '@chakra-ui/react';
import Image from 'next/image';
import {trending} from "../components/data"

const Trending = () => {
  const OurImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
  })
  return (
    <Box >
        <Show above='lg'>
          <Text pl="130px" py="5px">Trending today</Text>
          <Flex alignItems="center" justifyContent="center" gap="4">
            {trending?.map((trend) => (
              <Box key={trend.id} position="relative">
                {/* <Image src={trend.image} width='20px'/> */}
                <OurImage src={trend.image} width={{lg:"220px",xl:"260px"}} rounded="lg"/>
                <Box position="absolute" top="12" color="white"px="12px" >
                  <Text fontWeight="bold">{trend.title}</Text>
                  <Text>{trend.sub}</Text>
                  <Flex gap={1} >
                    <OurImage src={trend.user} width={{lg:"15px"}}/>
                    <Text>r/worldnews and more</Text>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </Show>
    </Box>
  )
}

export default Trending