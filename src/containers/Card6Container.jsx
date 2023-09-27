import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OffieceData from '../components/OffieceData'
import { Card,Text } from '@shopify/polaris'
import Swiper5Container from './Swiper5Container'

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Card6Container() {
  const [apiData,setApiData] = useState([])
  const [officeData,setOfficeData] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    const getApiData = ()=>{
      axios
        .get("http://127.0.0.1:8000/api/")
        .then((r)=>{
          console.log(r.data.company)
          const {data} = r.data
          setApiData(data)
          setOfficeData(r?.data?.company)
        })
    }
    getApiData()
  },[])

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
          <Swiper5Container data={apiData}></Swiper5Container>
        </Offcanvas.Body>
      </Offcanvas>
      </Card>

    </>
  );
}


export default Card6Container