import React, { useContext} from 'react'
import Swiper3Container from './Swiper3Container'
import CoverCard2 from '../components/CoverCard2'
import { Card } from '@shopify/polaris'
import { ApiDataContext } from '../components/ContextData'

const Card3Container = (props) => {
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
    text={color:'#fff'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbg}
    text={color:settings?.text}
 }
  return (
    <>

    <div style={cardbody}>
        <div className='row py-5'>
          <div className='d-flex justify-content-center align-items-center col-12'>

        <CoverCard2 data={officeData} settings={settings} setSettings={setSettings}></CoverCard2>
          </div>
          <div className='col-12'>

        <Swiper3Container data={apiData} settings={settings} setSettings={setSettings}></Swiper3Container>
          </div>
        </div>
    </div>
    </>
  )
}

export default Card3Container