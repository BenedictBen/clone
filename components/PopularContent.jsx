import { Box, Button, Flex, Grid, GridItem,chakra, Icon, Stack, Text, Show, Spacer, Accordion, AccordionItem, AccordionButton, AccordionIcon, Center } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsFire,BsFillBarChartFill, BsThreeDots, BsBorderAll, BsBookmark,BsFillArrowUpSquareFill,BsFillPersonFill,BsReddit, BsFillChatDotsFill, BsArrow90DegRight } from "react-icons/bs"
import { popular, posts} from "../components/data"
import { GoArrowUp, GoArrowDown} from "react-icons/go";


const PopularContent = () => {
    const OurImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
  })
  return (
    <Grid templateColumns='repeat(5, fr)'   mt="20px" justifyItems="center" px={["0","28","44","20","44"]}>
         <GridItem colSpan={3}>
             <Box  alignItems={"center"} justifyContent="center" >
        Popular posts
        <Flex  bg="white" alignItems={"center"} justifyContent="space-between"  mb="10">
                <Flex flexDirection={"row"} gap={"5"} alignItems="center" justifyContent={"center"} p="2">

                 <Center  color="#0079d3" fontWeight={"bold"}>
                    <Icon as={BsFire} mr="2"/>
                    <Text fontSize={["5","7","12"]}>Hot</Text>
                 </Center>
                 <Center  color="#0079d3" fontWeight={"bold"}>
                    {/* <Icon as={BsFillHandThumbsUpFill} mr="2"/> */}
                    <Accordion >
                      <AccordionItem display="flex" alignItems="center">
                       <Text fontSize={["5","7","12"]}>Everywhere</Text>  
                        <AccordionIcon />
                      </AccordionItem>
                    </Accordion>
                   
                 </Center>
                 <Center color="gray.500" fontWeight={"bold"}>
                    <Icon as={BsFillBarChartFill} mr="2"/>
                    <Text fontSize={["5","7","12"]}>New</Text>
                    
                 </Center>
                 <Center color="gray.500" fontWeight={"bold"}> 
                    <Icon as={BsReddit} mr="2"/>
                    <Text fontSize={["5","7","12"]}>Top</Text>
                 </Center>
                 <Center color="gray.500">
                    <Icon as={BsThreeDots} mr="2"/>
                  
                 </Center>
                </Flex>
                <Flex flexDirection={"row"} gap={"5"}>

                 <Center size={["base","sm","md","lg"]} pr="1">
                    
                     <Icon as={BsBorderAll}/>
                 </Center>
                </Flex>
            </Flex>
            <Box>
              <Box display={"flex"} alignItems="center">
                <Box w="full">
                  {/* w={["12rem","24rem","36rem","60rem"]} */}
                  {posts.map((post) => (
                    <Flex alignItems={"start"} justifyContent={"start"} gap="4" mb="6" bg="white" key={post.id} direction={["column"]} px="2" py="3" >

                    <Box display={"flex"} flexDirection="row" alignItems={"start"} justifyContent={"start"} gap="3" cursor="pointer">
                      <Box display={"flex"} flexDirection="column" alignItems={"center"} gap="1">
                            <Icon as={GoArrowUp} />          
                            <Text pl="2" fontSize={{base: "6px", sm: "8px", md: '12px'}}>{post.number}k</Text>          
                            <Icon as={GoArrowDown}/>
                      </Box>
                      <Box display={"flex"} flexDirection="row" gap="40"alignItems={"center"}>
                        <Stack direction={"row"}>
                          <Icon as={BsFillPersonFill}/>
                          <Text fontSize={["5","7","5","9"]}>{post.groups}</Text>
                          <Text fontSize={["5","7","5","9"]}> {post.by}</Text>
                        </Stack>
                        <Button variant={"solid"} size={["base","sm"]} bg="blue.400"  rounded={["lg","xl"]} color="white">Join</Button>
                      </Box> 
                   </Box>
                     
                    
                    
                    <Stack margin="auto" mt={["-3","-4","-4"]}  direction={['row', 'row', 'column']}  > 
                      <Text fontSize={["12","16","20"]}>{post.title}</Text>
                      <Box>
                        <OurImage src={post.image} w={["20","24","50","full"]} /> 
                      </Box>
                    </Stack>
                    <Box pl="24" display='flex' gap={"5"} cursor="pointer">
                      <Box display={"flex"} flexDirection="row" gap="1">
                        <Icon as={BsFillChatDotsFill} boxSize={["1","3","5"]}/>
                        <Text fontSize={{base: "6px", sm: "8px", md: '12px'}}>315 Comments</Text>
                      </Box>
                      <Box display={"flex"} flexDirection="row" gap="1">
                        <Icon as={BsArrow90DegRight} boxSize={["1","3","5"]}/>
                        <Text fontSize={{base: "6px", sm: "8px", md: '12px'}}>Share</Text>
                      </Box>
                      <Box display={"flex"} flexDirection="row" gap="1">
                        <Icon as={BsBookmark} boxSize={["1","3","5"]}/>
                        <Text fontSize={{base: "6px", sm: "8px", md: '12px'}}>Save</Text>
                      </Box>
                      
                      <Box>
                      <Icon as={BsThreeDots}  boxSize={["1","3","5"]}/>
                      </Box>
                      
                    </Box>
                    </Flex>
                  ))}
                </Box>
              </Box>
              
              
            </Box>
      </Box>
         </GridItem>
         <GridItem colStart={5} mt="1.5rem">
       
        <Show above="lg">
        <Stack  bg="white">
                  {popular.map((pop) => (
                    <>


    <Accordion  >
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" textAlign='left' flex='1' display={"flex"} flexDirection="column" >
         <Text fontSize={["9"]} fontWeight="bold">{pop.title}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  </AccordionItem>

</Accordion>
</>
            ))}
            </Stack>


            <Box bg="white" mt="3" >
              <Flex gap={"2"} p="2">
                <Box>
                <Text fontSize={["12"]}>User Agreement</Text>
                <Text fontSize={["12"]}>Privacy Policy</Text>

                </Box>
                <Box>
                <Text fontSize={["12"]}>Content Policy</Text>
                <Text fontSize={["12"]}>
                    Moderator Code Of Conduct
                    </Text>

                </Box>
              </Flex>
            </Box>
        </Show>

    
         </GridItem>
        </Grid>
  )
}

export default PopularContent