import React from 'react'
import { Text, Thumbnail } from '@shopify/polaris'

const OffieceData = (props) => {
  const {data,settings,setSettings} = props 
  // console.log(data)
  // console.log(props)
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
    cardbody={backgroundColor:settings?.cardbg}
    text={color:settings?.text}
 }
  return (
    <>
        <div className='d-flex align-item-center justify-content-center py-2' style={{...cardbody,width:'17rem'}}>
                <div className='d-flex flex-lg-column flex-md-row flex-xl-row'>
                <div className='px-2'>

                <Thumbnail 
                source={data[0]?.photo}
                size='large'
                ></Thumbnail>
                </div>
                <div className='d-flex flex-column'>
                    <Text><b style={text}>{data[0]?.title}</b></Text>
                    <Text><small>{stars}</small></Text>
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
                </div>

                </div>
        </div>
    </>
  )
}

export default OffieceData