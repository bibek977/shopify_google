import React from 'react'
import { HorizontalStack, Thumbnail, VerticalStack,Text } from '@shopify/polaris'

const OffieceData = (props) => {
  const {data} = props 
  console.log(data)
  console.log(props)
  const stars = Array.from({ length: data[0]?.rate }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));
  return (
    <>
        <HorizontalStack>
          <div className="img px-2 pb-3 d-flex justify-content-center align-items-center">

        <Thumbnail 
            source={data[0]?.photo}
            size='large'
            >
        </Thumbnail> 
          </div>
        <VerticalStack>
          <Text>
            <h4>{data[0]?.title}</h4>
          </Text>
          <HorizontalStack>
          <div >
          <Text variant="bodyMd" as="h5">
            {stars}
          </Text>
        </div>
          </HorizontalStack>

          <Text>
            <h5>{data[0]?.person}Google reviews</h5>
          </Text>
          
        </VerticalStack>    
        </HorizontalStack>
    </>
  )
}

export default OffieceData