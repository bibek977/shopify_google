import { HorizontalStack, VerticalStack,Text } from '@shopify/polaris'
import React from 'react'

const CoverCard2 = (props) => {
  const {data,settings,setSettings} = props 

  const stars = Array.from({ length: data[0]?.rate }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "20px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));
  let cardbody
  let text
  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'black'};
    text = {color : '#fff'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'white'};
    text = {color : '#000'};
  }
  else if(settings?.theme==='transparent'){
  
    cardbody={background:'white'}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }
  return (
    
        <VerticalStack align='center' inlineAlign='center'>
          <div style={text} className='text-center'>

          <Text variant='headingXl' as='h2'>
           Excellent
          </Text>
          </div>
          <div className='text-center'>
            {stars}
          </div>

          <Text>
          {settings?.EnableHyperLink?
                    <p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg" className='text-decoration-none' style={text}>{data[0]?.person} Google reviews</a>  
                    </p>
                    :
                    <p style={text}>
                      Based on 
                      <b>

                      {data[0]?.person} reviews
                      </b>
                    </p> 
                  }
          </Text>
          <div className="img">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" width="100px" alt="" />
          </div>
          
        </VerticalStack>    

  )
}

export default CoverCard2