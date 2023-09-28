import { Card, Page,Button,Divider, Form, FormLayout } from '@shopify/polaris'
import React, { useContext } from 'react'
import FormInput from '../components/FormInput'
import FormCheckBox from '../components/FormCheckBox'
import { ButtonSelectContext } from '../components/ButtonSelect'

const FormContainer = () => {
    const {buttonStatus} = useContext(ButtonSelectContext)
    const {selectedOptions} = useContext(ButtonSelectContext)
    const postSettings = ()=>{
        console.log(buttonStatus)
        console.log(selectedOptions)
    }
  return (
    <>
    <Form>
        <FormLayout>

            <Card>
                <Page
                fullWidth
                title='Widgets Settings'
                primaryAction={<Button primary onClick={postSettings()}>Update</Button>}
                secondaryActions={<Button>Reset to default</Button>}
                >
                </Page>

                <Divider borderColor='border-inverse'></Divider>

                <div className='row p-5'>

                        <div className='col-md-6 col-12'>

                            <FormInput></FormInput>
                        </div>


                        <div className='col-md-6 col-12'>
                            <FormCheckBox></FormCheckBox>
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