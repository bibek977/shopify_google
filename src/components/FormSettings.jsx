import {Form, FormLayout, Card} from '@shopify/polaris';
import { useCallback} from 'react';
import FormInput from '../components/FormInput'
import FormCheckBox from '../components/FormCheckBox'


export const FormSettings = ()=> {

  const handleSubmit = useCallback(() => {

  }, []);


  return (
    <Card>

    <Form onSubmit={handleSubmit}>
      <FormLayout>

        <div className='d-flex flex-row justify-content-start my-5'>
            <FormInput></FormInput>
            <FormCheckBox></FormCheckBox>
        </div>

        {/* <Button submit>Submit</Button> */}
      </FormLayout>
    </Form>
    </Card>
  );
}