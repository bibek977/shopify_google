import React from 'react'
import CoverCard2 from '../components/CoverCard2'
import { Card,LegacyStack,Button,Text, VerticalStack} from '@shopify/polaris'
import Slider2 from '../components/Slider2'

const Badge2 = () => {
  return (
    <>
         <Card background='bg-subdued'>
      <VerticalStack gap='5'>

    <LegacyStack>
      <LegacyStack.Item fill>
        <Text>
          <h4>Review with Badge-II</h4>
        </Text>
      </LegacyStack.Item>
      <LegacyStack.Item>
        <Button primary>Select</Button>
      </LegacyStack.Item>
    </LegacyStack>


      <Card >

        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-3'>
            <CoverCard2></CoverCard2>
          </div>
          <div className='col-9'>
            <Slider2></Slider2>
          </div>
        </div>

      </Card>
      
      </VerticalStack>
    </Card>
    </>

  )
}


export default Badge2