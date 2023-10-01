import React from 'react'
import { Text, Thumbnail } from '@shopify/polaris'

const OffieceData = (props) => {
  const {data,settings,setSettings} = props 
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
  let cardbody
  let text
  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'#303030'};
    text = {color : '#fff'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'#efefef'};
    text = {color : '#000'};
  }
  else if(settings?.theme==='transparent'){
  
    cardbody={background:'#efefef'}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }
  return (
    <>
        <div className='d-flex align-item-center justify-content-center' style={{width:'17rem'}}>
                <div className='d-flex flex-lg-column flex-md-row flex-xl-row'>
                <div className=''>

                <Thumbnail 
                source={data[0]?.photo}
                size='large'
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