import { Grid } from '@shopify/polaris'
import React from 'react'
import CardItem from './CardItem'
import "../components/slider4.css"

const Slider4 = () => {
  return (
    <>
    <div className="custom-scrollbar">
    <div className="scroll-content">


      {/* <Card > */}
        <Grid>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
          <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
            <CardItem></CardItem>
          </Grid.Cell>
        </Grid>
      {/* </Card> */}
      </div>
    </div>
    </>
  )
}

export default Slider4