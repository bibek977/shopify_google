import { HorizontalStack, Thumbnail, VerticalStack,Text } from '@shopify/polaris'
import React from 'react'

const CoverCard = () => {
  return (
    
        <HorizontalStack>
          <div className="img px-2 pb-3 d-flex justify-content-center align-items-center">

        <Thumbnail 
            source={"https://lh5.googleusercontent.com/p/AF1QipMfZMRCV3ipOD54PJKJ0lY8E1QQJB4jFnxj3vLR=w410-h240-k-no"}
            size='large'
            >
        </Thumbnail> 
          </div>
        <VerticalStack>
          <Text>
            <h4>Nerd Platoon Pvt. Ltd.</h4>
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
          
        </VerticalStack>    
        </HorizontalStack>
  )
}

export default CoverCard