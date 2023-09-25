import React from 'react'
import SlideContainer from '../components/SlideContainer'
import CoverCard from '../components/CoverCard'
import { Card,LegacyStack,Button,Text, VerticalStack} from '@shopify/polaris'

const Badge1 = () => {
  return (
    <>
         <Card background='bg-subdued'>
      <VerticalStack gap='5'>

    <LegacyStack>
      <LegacyStack.Item fill>
        <Text>
          <h4>Review with Badge-I</h4>
        </Text>
      </LegacyStack.Item>
      <LegacyStack.Item>
        <Button primary>Select</Button>
      </LegacyStack.Item>
    </LegacyStack>


      <Card >

        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-3'>
            <CoverCard></CoverCard>
          </div>
          <div className='col-9'>
            <SlideContainer></SlideContainer>
          </div>
        </div>

      </Card>
      
      </VerticalStack>
    </Card>
    </>

  )
}

// const Placeholder = ()=>{
//   return(
//     <div
//       // className='d-flex justify-content-center align-items-center'
//     >
//       <CoverCard></CoverCard>

//     </div>
//   )
// }

export default Badge1