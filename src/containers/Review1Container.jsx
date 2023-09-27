import { Button, Page } from '@shopify/polaris'
import React from 'react'
import CardContainer from './CardContainer'

const Review1Container = () => {
  return (
    <>
        <Page
        fullWidth
        title='1. Review with Badge-I'
        primaryAction={
            <Button primary>Select</Button>
        }
        >
            <CardContainer></CardContainer>

        </Page>
    </>
  )
}

export default Review1Container