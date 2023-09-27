import { HorizontalStack, VerticalStack,Text } from '@shopify/polaris'
import React from 'react'

const CoverCard2 = (props) => {
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
          <Text>
            <h4 className='text-center'>Excellent</h4>
          </Text>
          <div className='text-center'>
            {stars}
          </div>

          <Text>
            <h5 className='text-center'>{data[0]?.person} Google reviews</h5>
          </Text>
          <div className="img text-center">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="80px" alt="" />
          </div>
          
        </VerticalStack>    

  )
}

export default CoverCard2