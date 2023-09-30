import React, { useContext, useState } from 'react'
import OffieceData from '../components/OffieceData'
import { Card,Text } from '@shopify/polaris'
import Swiper5Container from './Swiper5Container'

import Offcanvas from 'react-bootstrap/Offcanvas';
import { ApiDataContext } from '../components/ContextData'


function Card6Container(props) {
  const {settings,setSettings} = props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {apiData,officeData} = useContext(ApiDataContext)
  return (
    <>
    <Card>

      <div variant="primary" onClick={handleShow} className="me-2 office-width">
        <Card background='bg-subdued'>

        <OffieceData data={officeData}></OffieceData>
        </Card>
      </div>
      <Text><p className='pt-3'>Click on badge to see the list of reviews.</p></Text>
      <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true' backdrop='false' backdropClassName='backdrop-color'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Swiper5Container data={apiData} settings={settings} setSettings={setSettings}></Swiper5Container>
        </Offcanvas.Body>
      </Offcanvas>
      </Card>

    </>
  );
}


export default Card6Container