import { Button, Page } from '@shopify/polaris'
import React from 'react'
import Card5Container from './Card5Container'

const Review5Container = () => {
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
            <Button primary>Select</Button>
        }
        >
            <Card5Container></Card5Container>

        </Page>
    </>
  )
}

export default Review5Container