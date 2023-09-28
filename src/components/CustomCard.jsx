import { Avatar, Box, HorizontalStack, Text } from '@shopify/polaris'
import React from 'react'
import { google_logo } from './LogoGoogle'

const CustomCard = (props) => {
  const {data} = props
  const stars = Array.from({ length: data.star }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));
  const truc = (desc,len)=>{
    return(
      
      desc.slice(0,len)+ (desc.length>len?"...":"")
    )
  }
  return (
    <>
      {/* <h1>{data?.name}</h1> */}
      <Box id="CardBody">
        <div className="p-3 mb-5 mt-2" style={{height:'250px'}} >
        <HorizontalStack align="space-between">
          <HorizontalStack>
          
            <div >
              <Avatar size="medium" name={data.name} source={data.imageLink} />
            </div>
            
            <div className="mb-lg-2 mb-1 ms-1" >
              <Text as="p" variant="headingSm">
                {data.name}
              </Text>

             <div >
             <Text variant="bodySm" as="p">
                {data.date}
              </Text>
             </div>
            </div>
          </HorizontalStack>
          
          <div >
            <Avatar size='small' source={google_logo} name='G' />
          </div>
        </HorizontalStack>
        <div >
          <Text variant="bodyMd" as="h5">
            {stars}
          </Text>
        </div>
        <div>
          {/* <Text variant="bodyMd" as="p"> */}
            {/* <p className='text-truncate'> */}
            <p>
              {truc(data.description,70)}
            {/* {data.description}       */}
            </p>
          {/* </Text> */}
        </div>
        </div>
      </Box>
    </>
  )
}

export default CustomCard