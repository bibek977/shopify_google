import { Grid } from '@shopify/polaris'
import React from 'react'
import "../components/slider4.css"
import CustomCard from '../components/CustomCard'

const Swiper5Container = (props) => {
    const {data} = props
  return (
    <>


<div className='d-flex flex-column'>

        {
            data?.map((e,i)=>{
                return(
                <div>

                <CustomCard data={e} key={i}></CustomCard>
                </div>
            )
        })
    }
</div>

    </>
  )
}

export default Swiper5Container