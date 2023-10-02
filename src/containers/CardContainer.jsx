import React, { useContext } from 'react'
import SwiperContainer from './SwiperContainer'
import OffieceData from '../components/OffieceData'
import { ApiDataContext } from '../components/ContextData'

const CardContainer = (props) => {
  const {settings,setSettings, apiData} = props
    const {officeData}=useContext(ApiDataContext)
    let cardbody
  let text
  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'#000'};
    text = {color : '#fff'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'white'};
    text = {color : '#000'};
  }
  else if(settings?.theme==='transparent'){
  
    cardbody={background:''}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbg}
    text={color:settings?.text}
 }
 
  return (
    <>

    <div style={cardbody}>
        <div className='row py-5 '>
          <div className='d-flex justify-content-center align-items-center col-lg-3 col-12'>

        <OffieceData data={officeData} settings={settings} setSettings={setSettings}></OffieceData>

          </div>
          <div className='col-lg-9 col-12'>

        <SwiperContainer data={apiData} settings={settings} setSettings={setSettings}></SwiperContainer>
          </div>
        </div>
    </div>
    </>
  )
}

export default CardContainer