import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'



const HorizontalScrollBar = ({data, bodyPart, serBodyPart }) => {
  return (
    <ScrollMenu>
        {data.map((item) =>( 
        <Box
        key = { item.id || item}
        itemID = { item.id   || item}
        title = { item.id || item}     
        m ='0 40px'
        >
          <BodyPart item ={item} bodyPart= {bodyPart}
          setBodyPart={serBodyPart}
          />
        </Box>
        )
        
        )}

    </ScrollMenu>
  )
}

export default HorizontalScrollBar