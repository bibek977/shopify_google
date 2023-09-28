import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card5Container from './Card5Container'
import {PreviewCardContext} from '../components/PreviewCard'

const Review5Container = () => {
  const {setPreviewId} = useContext(PreviewCardContext)
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
            <Button primary onClick={()=>setPreviewId(5)}>Select</Button>
        }
        >
            <Card5Container></Card5Container>

        </Page>
    </>
  )
}

export default Review5Container