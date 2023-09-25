import {VerticalStack} from '@shopify/polaris'
import React from 'react'
import Badge1 from '../containers/Badge1'
import Badge2 from '../containers/Badge2'
import Badge3 from '../containers/Badge3'
import Badge5 from '../containers/Badge5'
import Badge6 from '../containers/Badge6'
import Badge4 from '../containers/Badge4'

export const Tab2 = () => {
  return (
    <>
        <VerticalStack>
          <div >
          <Badge1></Badge1>
          </div>
          <div >
          <Badge2></Badge2>
          </div>
          <div >
          <Badge3></Badge3>
          </div>
          <div>
            <Badge4></Badge4>
          </div>
          <div>
            <Badge5></Badge5>
          </div>
          <div>
            <Badge6></Badge6>
          </div>

        </VerticalStack>
    </>
  )
}
