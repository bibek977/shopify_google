import { Layout, Page,Text } from '@shopify/polaris'
import React, { useContext } from 'react'
import { Connect } from '../../components/Connect'
import { Update } from '../../components/Update'
import Footer from '../../components/Footer'
import Preview from '../../components/Preview'
import { ButtonSelectContext } from '../../components/ButtonSelect'

const TabOne = () => {
  const preview = (text)=>{
    return(
      <Text>
        <p className='fw-medium'>{text}</p>
      </Text>
    )
  }
  const {previewSettings,setSettings} = useContext(ButtonSelectContext)
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
              {/* <CardContainer></CardContainer> */}
              <Preview settings={previewSettings}></Preview>
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