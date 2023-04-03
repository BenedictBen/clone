import { Box, Button, Flex, Hide, chakra, Icon, Stack, Text, Show } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsFire, BsFillHandThumbsUpFill,BsFillBarChartFill, BsThreeDots, BsBorderAll, BsFillArrowDownSquareFill,BsFillArrowUpSquareFill } from "react-icons/bs"
import { popular, posts} from "../components/data"


const PopularContent = () => {
    const OurImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
  })
  return (
    <Flex alignItems={"center"} justifyContent="center" gap={"3"} px="130px" mt="20px">
      <Box flex="3" >
        Popular
        <Flex  bg="white" alignItems={"center"} justifyContent="space-between" px="12px" mb="10">
                <Flex flexDirection={"row"} gap={"5"}>

                 <Button size={["base","sm","md","lg"]}>
                    <Icon as={BsFire}/>
                    Hot
                 </Button>
                 <Button size={["base","sm","md","lg"]}>
                    <Icon as={BsFillHandThumbsUpFill}/>
                    Everywhere
                 </Button>
                 <Button size={["base","sm","md","lg"]}>
                    <Icon as={BsFillBarChartFill}/>
                    New
                 </Button>
                 <Button size={["base","sm","md","lg"]}> 
                    <Icon as={BsFire}/>
                    Top
                 </Button>
                 <Button size={["base","sm","md","lg"]}>
                    <Icon as={BsThreeDots}/>
                  
                 </Button>
                </Flex>
                <Flex flexDirection={"row"} gap={"5"}>

                 <Button size={["base","sm","md","lg"]}>
                    
                     <Icon as={BsBorderAll}/>
                 </Button>
                </Flex>
            </Flex>
            <Box>
              <Box display={"flex"} alignItems="center" width='full'>
                <Box w={["12rem","24rem","36rem","60rem"]}>
                  {posts.map((post) => (
                    <Flex alignItems={"center"} gap="4" mb="6" bg="white" >

                    <Box display={"flex"} flexDirection="column">
                      <Button  size={["base","sm","md","lg"]}>
                            <Icon as={BsFillArrowUpSquareFill}/>
                        </Button>
                            <Text pl="2" fontSize={{base: "6px", sm: "8px", md: '12px', lg: '16px'}}>26.5k</Text>
                        <Button size={["base","sm","md","lg"]}>
                            <Icon as={BsFillArrowDownSquareFill}/>

                        </Button>
                   </Box>
                    
                    
                    <Box key={post.id} display="flex" direction={['column','column','row']} gap="6">
                      
                      <Text>{post.title}</Text>
                       <OurImage src={post.image} w={["32","40","50","80"]}/>

                      
                      
                    </Box>
                    </Flex>
                  ))}
                </Box>
              </Box>
              
              
            </Box>
      </Box>
      <Box flex="1" mt="-141rem">
      <Show above="md" >
        <Stack  bg="white">
                  {popular.map((pop) => (
                            <Box as="span"  textAlign='left' display={"flex"} flexDirection="column" >
                                <Text size={["base", "sm", "md","lg"]}>{pop.title}</Text>
                            </Box>
                             ))}
            </Stack>
            <Box bg="white" mt="3" >
              <Flex gap={"2"}>
                <Box>
                <Text>User Agreement</Text>
                <Text>Privacy Policy</Text>

                </Box>
                <Box>
                <Text>Content Policy</Text>
                <Text>
                    Moderator Code Of Conduct
                    </Text>

                </Box>
              </Flex>
            </Box>
      </Show>
      </Box> 
    </Flex>
  )
}

export default PopularContent