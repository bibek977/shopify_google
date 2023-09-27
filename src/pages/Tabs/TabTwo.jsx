import { Divider, Layout, Page } from '@shopify/polaris'
import React from 'react'
import Review1Container from '../../containers/Review1Container'
import Review2Container from '../../containers/Review2Container'
import Review3Container from '../../containers/Review3Container'
import Review4Container from '../../containers/Review4Container'

const TabTwo = () => {
  return (
    <Page
    fullWidth
    >
      <Layout>
        <Layout.Section>
          <Review1Container></Review1Container>
        </Layout.Section>
        <Layout.Section>
        <Divider borderColor='border-inverse'></Divider>
        </Layout.Section>
        <Layout.Section>
          <Review2Container></Review2Container>
        </Layout.Section>
        <Layout.Section>
        <Divider borderColor='border-inverse'></Divider>
        </Layout.Section>
        <Layout.Section>
          <Review3Container></Review3Container>
        </Layout.Section>
        <Layout.Section>
        <Divider borderColor='border-inverse'></Divider>
        </Layout.Section>
        <Layout.Section>
          <Review4Container></Review4Container>
        </Layout.Section>
        <Layout.Section>
        <Divider borderColor='border-inverse'></Divider>
        </Layout.Section>
      </Layout>
    </Page>
  )
}

export default TabTwo