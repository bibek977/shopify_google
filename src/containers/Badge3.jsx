import React from 'react'
import CoverCard2 from '../components/CoverCard2'
import { Card,LegacyStack,Button,Text, VerticalStack} from '@shopify/polaris'
import Slider3 from '../components/Slider3'

const Badge2 = () => {
  return (
    <>
         <Card background='bg-subdued'>
      <VerticalStack gap='5'>

    <LegacyStack>
      <LegacyStack.Item fill>
        <Text>
          <h4>Review with Badge-III</h4>
        </Text>
      </LegacyStack.Item>
      <LegacyStack.Item>
        <Button primary>Select</Button>
      </LegacyStack.Item>
    </LegacyStack>


      <Card >

        <div>
          <div className='d-flex justify-content-center align-items-center'>
            <CoverCard2></CoverCard2>
          </div>
          <div>
            <Slider3></Slider3>
          </div>
        </div>

      </Card>
      
      </VerticalStack>
    </Card>
    </>

  )
}


export default Badge2