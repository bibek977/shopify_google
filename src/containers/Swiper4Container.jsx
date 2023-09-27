import { Grid } from '@shopify/polaris'
import React from 'react'
import "../components/slider4.css"
import CustomCard from '../components/CustomCard'

const Swiper4Container = (props) => {
    const {data} = props
  return (
    <>
    <div className="custom-scrollbar p-5">
    <div className="scroll-content">


      {/* <Card > */}
        <Grid >
        {
          data?.map((e,i)=>{
            return(
            <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                <CustomCard data={e} key={i}></CustomCard>
            </Grid.Cell>
            )
          })
        }
         
        </Grid>
      {/* </Card> */}

      
      </div>
    </div>
    </>
  )
}

export default Swiper4Container