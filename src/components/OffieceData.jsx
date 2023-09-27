import React from 'react'
import { Button, LegacyCard, LegacyStack, Text, Thumbnail,Card } from '@shopify/polaris'

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
        <div className='d-flex align-item-center justify-content-center' style={{width:'17rem'}}>
                <div className='d-flex flex-row'>
                <div className='d-flex '>

                <Thumbnail 
                source={data[0]?.photo}
                size='medium'
                ></Thumbnail>
                </div>
                <div className='d-flex flex-column'>
                    <Text><b>{data[0]?.title}</b></Text>
                    <Text><small>{stars}</small></Text>
                    <Text>
                  <p>{data[0]?.person} Google reviews</p>
                </Text>
                </div>

                </div>
        </div>
    </>
  )
}

export default OffieceData