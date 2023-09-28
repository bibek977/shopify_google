import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import Card6Container from './Card6Container'
import {PreviewCardContext} from '../components/PreviewCard'

const Review6Container = () => {
  const {setPreviewId} = useContext(PreviewCardContext)
  return (
    <>
        <Page
        fullWidth
        title='Review with Floating'
        primaryAction={
            <Button primary onClick={()=>setPreviewId(6)}>Select</Button>
        }
        >
            <Card6Container></Card6Container>

        </Page>
    </>
  )
}

export default Review6Container