import Swiper4Container from './Swiper4Container'
import { Card } from '@shopify/polaris'
import CoverCard3 from '../components/CoverCard3'
import { useApiData } from '../components/ContextData'

const Card4Container = (props) => {
  const {settings,setSettings,apiData} = props
  const {officeData} = useApiData()
  let cardbody
  let cardbody2
  let text
  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'#000'};
    cardbody2 = {backgroundColor:'rgb(48, 48, 48)'};
    text = {color : '#fff'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'white'};
    cardbody2={backgroundColor:'rgb(239, 239, 239)'}
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
        <div className='row'>
            <div>
          <div className='d-flex justify-content-start align-items-center col-12 p-3' style={cardbody2}>

        <CoverCard3 data={officeData} settings={settings} setSettings={setSettings}></CoverCard3>
          </div>
            </div>
          <div className='col-12 p-5'>

        <Swiper4Container data={apiData} settings={settings} setSettings={setSettings}></Swiper4Container>
          </div>
        </div>
    </div>
    </>
  )
}

export default Card4Container