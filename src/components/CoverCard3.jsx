import { HorizontalStack, VerticalStack,Text } from '@shopify/polaris'
import React from 'react'

const CoverCard3 = (props) => {
  const {data,settings} = props 
  let cardbody 
  let text

  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'rgb(48, 48, 48)'};
    text = {color : 'white'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'#efefef'};
    text = {color : 'black'};
  }
  else if(settings?.theme==='transparent'){

 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }

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
            <span className='p-2 fs-4' style={text}>Rating</span>
          </div>
          <HorizontalStack>
          <Text>
            <h4 className='text-center p-1' style={text}>{data[0]?.rate}</h4>
          </Text>
          <div className='text-center '>
            {stars}
          </div>

          <Text>
          {settings?.EnableHyperLink?
                    <p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg" className='text-decoration-none' style={text}>{data[0]?.person} Google reviews</a>  
                    </p>
                    :
                    <p style={text}>
                      {data[0]?.person} Google reviews
                    </p> 
                  }
          </Text>
          </HorizontalStack>

          
        </VerticalStack>    

  )
}

export default CoverCard3