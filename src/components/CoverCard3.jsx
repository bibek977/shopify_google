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
    cardbody = {backgroundColor:'white'};
    text = {color : '#000'};

 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }

  const stars = Array.from({ length: data[0]?.rate }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "20px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));
  return (
    <div style={cardbody} className='w-100'>


        <VerticalStack align='center'>
          <div className="img px-1 d-flex align-items-end">
            <img className='align-self-start' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="100px" alt="" />
            <span className='px-2 fs-4 ' style={text}>Rating</span>
          </div>
          <HorizontalStack>
          <Text>
            <h4 className='text-center p-1' style={text}>{data[0]?.rate}</h4>
          </Text>
          <div className='text-center '>
            {stars}
          </div>

          <div className='pt-2'>

          <Text>
          {settings?.EnableHyperLink?
                    <small>
                    <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg" className='text-decoration-none' style={text}>{data[0]?.person} Google reviews</a>  
                    </small>
                    :
                    <small style={text}>
                      {data[0]?.person} Google reviews
                    </small> 
                  }
          </Text>
                  </div>
          </HorizontalStack>

          
        </VerticalStack> 
        </div>   

  )
}

export default CoverCard3