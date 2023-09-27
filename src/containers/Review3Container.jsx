import { Button, Page } from '@shopify/polaris'
import React from 'react'
import Card3Container from './Card3Container'

const Review3Container = () => {
  return (
    <>
        <Page
        fullWidth
        title='3. Review with Badge-III'
        primaryAction={
            <Button primary>Select</Button>
        }
        >
            <Card3Container></Card3Container>

        </Page>
    </>
  )
}

export default Review3Container