import { HorizontalStack, VerticalStack,Text } from '@shopify/polaris'
import React from 'react'

const CoverCard3 = (props) => {
  const {data} = props 

  const stars = Array.from({ length: data[0]?.rate }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));
  return (
    
        <VerticalStack align='center'>
          <div className="img p-1">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="80px" alt="" />
            <span className='p-2 fs-4'>Rating</span>
          </div>
          <HorizontalStack>
          <Text>
            <h4 className='text-center p-1'>{data[0]?.rate}</h4>
          </Text>
          <div className='text-center '>
            {stars}
          </div>

          <Text>
            <p className='text-center p-1'>{data[0]?.person} reviews</p>
          </Text>
          </HorizontalStack>

          
        </VerticalStack>    

  )
}

export default CoverCard3