import React, {  useState } from 'react'
import OffieceData from '../components/OffieceData'
import { Card,Text } from '@shopify/polaris'
import Swiper5Container from './Swiper5Container'

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useApiData } from '../components/ContextData'
import CoverCard from '../components/CoverCard';


function Card5Container(props) {
  const {settings,setSettings,apiData} = props
  const {officeData} = useApiData()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let cardbody
  let cardbody2
  let text
  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'black'};
    cardbody2 = {backgroundColor:'rgb(48, 48, 48)'};
    text = {color : 'white'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'rgb(239, 239, 239)'};
    cardbody2={backgroundColor:'rgb(239, 239, 239)'}
    text = {color : 'black'};
  }
  else if(settings?.theme==='transparent'){
  
    cardbody={background:''}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }

  return (
    <>
    <Card>

      <div onClick={handleShow} className="me-2 office-width">
        <div style={cardbody} className='py-4'>

        <CoverCard data={officeData} settings={settings} setSettings={setSettings}></CoverCard>
        </div>
      </div>
      <Text><p className='pt-3'>Click on badge to see the list of reviews.</p></Text>

      <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true' backdrop='false' backdropClassName='backdrop-color' >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={cardbody}>
          <Swiper5Container data={apiData} settings={settings} setSettings={setSettings}></Swiper5Container>
        </Offcanvas.Body>
      </Offcanvas>
      </Card>

    </>
  );
}


export default Card5Container