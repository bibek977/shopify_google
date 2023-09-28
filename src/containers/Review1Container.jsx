import { Button, Page } from '@shopify/polaris'
import React, { useContext } from 'react'
import CardContainer from './CardContainer'
import {PreviewCardContext} from '../components/PreviewCard'

const Review1Container = () => {
  const {setPreviewId} = useContext(PreviewCardContext)
  const clickedButton = ()=>{
    setPreviewId(1)
    
  }
  return (
    <>
        <Page
        fullWidth
        title='1. Review with Badge-I'
        primaryAction={
            <Button primary onClick={clickedButton}>Select</Button>
        }
        >
            <CardContainer></CardContainer>

        </Page>
    </>
  )
}

export default Review1Container