import { Button, Page } from '@shopify/polaris'
import React from 'react'
import Card2Container from './Card2Container'

const Review2Container = () => {
  return (
    <>
        <Page
        fullWidth
        title='2. Review with Badge-II'
        primaryAction={
            <Button primary>Select</Button>
        }
        >
            <Card2Container></Card2Container>

        </Page>
    </>
  )
}

export default Review2Container