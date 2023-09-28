import { Card, Page,Button,Divider, Form, FormLayout } from '@shopify/polaris'
import React from 'react'
import FormInput from '../components/FormInput'
import FormCheckBox from '../components/FormCheckBox'

const FormContainer = () => {
  return (
    <>
    <Form>
        <FormLayout>

            <Card>
                <Page
                fullWidth
                title='Widgets Settings'
                primaryAction={{content:"Update"}}
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