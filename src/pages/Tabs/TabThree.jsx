import {  Layout, Page,Text  } from '@shopify/polaris'
import React, { useContext } from 'react'
import FormContainer from '../../containers/FormContainer'
import Preview from '../../components/Preview'
import { ButtonSelectContext } from '../../components/ButtonSelect'

const TabThree = () => {
  const preview = (text)=>{
    return(
      <Text>
        <p className='fw-medium'>{text}</p>
      </Text>
    )
  }
  const {settings,setSettings} = useContext(ButtonSelectContext)
  return (
    <>
       <Page
      fullWidth
    >
      <Layout>
        <Layout.Section>
          <div className="bg-img mb-5">
            <Page
             title={preview('Preview')}
             fullWidth
             >
              <Preview settings={settings} setSettings={setSettings}></Preview>
            </Page>
          </div>
        </Layout.Section>
        <Layout.Section>
          <FormContainer></FormContainer>
        </Layout.Section>
      </Layout>
    </Page>
    </>
  )
}

export default TabThree