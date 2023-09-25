import React from 'react'
import { Card,LegacyStack,Button,Text, VerticalStack} from '@shopify/polaris'
import Slider4 from '../components/Slider4'

const Badge4 = () => {
  return (
    <>
         <Card background='bg-subdued'>
      <VerticalStack gap='5'>

    <LegacyStack>
      <LegacyStack.Item fill>
        <Text>
          <h4>4. Review with Grid</h4>
        </Text>
      </LegacyStack.Item>
      <LegacyStack.Item>
        <Button primary>Select</Button>
      </LegacyStack.Item>
    </LegacyStack>


      <Card>

        <div>
          <div className='d-flex justify-content-start align-items-center'>
            {/* <CoverCard2></CoverCard2> */}
          </div>
          <div>
            <Slider4></Slider4>
          </div>
        </div>

      </Card>
      
      </VerticalStack>
    </Card>
    </>

  )
}


export default Badge4