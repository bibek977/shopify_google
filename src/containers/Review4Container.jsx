import { Button, Page } from '@shopify/polaris'
import React from 'react'
import Card4Container from './Card4Container'

const Review4Container = () => {
  return (
    <>
        <Page
        fullWidth
        title='4. Review with Grid'
        primaryAction={
            <Button primary>Select</Button>
        }
        >
            <Card4Container></Card4Container>

        </Page>
    </>
  )
}

export default Review4Container