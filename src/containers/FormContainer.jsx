import { Card, Page,Button,Divider, Form, FormLayout } from '@shopify/polaris'
import React, { useContext, useEffect } from 'react'
import FormInput from '../components/FormInput'
import FormCheckBox from '../components/FormCheckBox'
import { ButtonSelectContext } from '../components/ButtonSelect'
import axios from 'axios'

const FormContainer = () => {
    const {settings,setSettings,previewSettings,setPreviewSettings} = useContext(ButtonSelectContext)

    const resetForm = ()=>{
        setSettings({
            id:1,
            previewId:settings?.previewId,
            HideReviewsWithoutComments: true,
            HideRatingText: false,
            ShowReviewersPhoto: true,
            ShowReviewersName: true,
            ShowViewAllReviewsLink: false,
            ShowWriteReviewButton: false,
            AutoPlay: false,
            EnableHyperLink: false,
            minratings: '5',
            dateformat: "my",
            align: "left",
            theme: "light",
        })
    }

    const updateForm = (e)=>{

        axios
        .patch("http://127.0.0.1:8000/settings_api/",settings)
        // .post("http://127.0.0.1:8000/settings_api/",settings)
        .then((r)=>{
            console.log("posted")
            setPreviewSettings(settings)
        })
        .catch((e)=>{
            console.log(e)
        })
    }


  return (
    <>
    <Form>
        <FormLayout>

            <Card>
                <Page
                fullWidth
                title='Widgets Settings'
                primaryAction={<Button primary onClick={updateForm} >Update</Button>}
                secondaryActions={<Button onClick={resetForm}>Reset to default</Button>}
                >
                </Page>

                <Divider borderColor='border-inverse'></Divider>

                <div className='row p-5'>

                        <div className='col-md-6 col-12'>

                            <FormInput settings={settings} setSettings={setSettings }></FormInput>
                        </div>


                        <div className='col-md-6 col-12'>
                            <FormCheckBox settings = {settings} setSettings={setSettings}></FormCheckBox>
                        </div>
                </div>

                <Divider borderColor='border-inverse'></Divider>


            </Card>
        </FormLayout>

        </Form>

    </>
  )
}

export default FormContainer