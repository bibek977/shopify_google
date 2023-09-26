import { Page } from '@shopify/polaris'
import React from 'react'
import TabHome from '../Tabs/TabHome'

const Main = () => {
 
  return (
    <>
        <Page
        // title={title_text}
        // fullWidth
        >
          <TabHome></TabHome>
        </Page>
    </>
  )
}

const title_text = "Google reviews: the digital mirror for businesses to reflect their service"


export default Main