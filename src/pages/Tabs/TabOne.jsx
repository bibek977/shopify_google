import { Layout, Page,Text } from '@shopify/polaris'
import React from 'react'
import { Connect } from '../../components/Connect'
import { Update } from '../../components/Update'
import CardContainer from '../../containers/CardContainer'
import Footer from '../../components/Footer'

const TabOne = () => {
  const preview = (text)=>{
    return(
      <Text>
        <p className='fw-medium'>{text}</p>
      </Text>
    )
  }
  return (
    <>
    <Page
      fullWidth
    >
      <Layout>
        <Layout.Section>
          <Connect></Connect>
        </Layout.Section>
        <Layout.Section>
          <Update></Update>
        </Layout.Section>
        <Layout.Section>
          <div className="bg-img mb-5">
            <Page
             title={preview('Preview')}
             fullWidth
             >
              <CardContainer></CardContainer>
            </Page>
          </div>
        </Layout.Section>
      </Layout>
    </Page>

    <Page
    fullWidth
    >

      <Layout>
        <Layout.Section>

        <Footer></Footer>
        </Layout.Section>
      </Layout>
    </Page>
    </>
  )
}

export default TabOne