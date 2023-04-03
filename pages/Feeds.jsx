
import Trending from '@/components/Trending'
import PopularContent from '@/components/PopularContent'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Feeds = () => {
  return (
    <Box bg='gray.300'>
        <Trending/>
        {/* <Popular/> */}
        <PopularContent/>
    </Box>
  )
}

export default Feeds