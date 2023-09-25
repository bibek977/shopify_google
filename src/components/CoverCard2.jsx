import { HorizontalStack, VerticalStack,Text } from '@shopify/polaris'
import React from 'react'

const CoverCard2 = () => {
  return (
    
        <VerticalStack>
          <Text>
            <h4>Excellent</h4>
          </Text>
          <HorizontalStack>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          <i class="fa-solid fa-star" style={{color: 'rgb(247, 187, 4)'}}></i>
          </HorizontalStack>

          <Text>
            <h5>18 Google reviews</h5>
          </Text>
          <div className="img">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="80px" alt="" />
          </div>
          
        </VerticalStack>    

  )
}

export default CoverCard2