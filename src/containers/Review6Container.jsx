import { Button, Page } from '@shopify/polaris'
import React from 'react'
import Card6Container from './Card6Container'

const Review6Container = () => {
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
            <Button primary>Select</Button>
        }
        >
            <Card6Container></Card6Container>

        </Page>
    </>
  )
}

export default Review6Container