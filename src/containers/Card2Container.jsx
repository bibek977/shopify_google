import React, { useContext} from 'react'
import Swiper2Container from './Swiper2Container'
import CoverCard2 from '../components/CoverCard2'
import { Card } from '@shopify/polaris'
import { ApiDataContext } from '../components/ContextData'

const Card2Container = (props) => {
  const {settings,setSettings,apiData} = props
  const {officeData} = useContext(ApiDataContext)
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
  
    cardbody={background:'none'}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbg}
    text={color:settings?.text}
 }
  return (
    <>

    <div style={cardbody}>
        <div className='row py-5'>
          <div className='d-flex justify-content-center align-items-center col-lg-3 col-12'>

        {/* <OffieceData data={officeData}></OffieceData> */}
        <CoverCard2 data={officeData} settings={settings} setSettings={setSettings}></CoverCard2>
        {/* <CoverCard3 data={officeData}></CoverCard3> */}
          </div>
          <div className='col-lg-9 col-12'>

        <Swiper2Container data={apiData} settings={settings} setSettings={setSettings} ></Swiper2Container>
          </div>
        </div>
    </div>
    </>
  )
}

export default Card2Container