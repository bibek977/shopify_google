import { Avatar } from '@shopify/polaris'
import React from 'react'
import { google_logo } from './LogoGoogle'

const ViewReviewAll = (props) => {
  const {settings} = props
  return (
  <>
    {settings?.ShowViewAllReviewsLink?
    <div className='d-flex justify-content-end m-2'>
    <Avatar size='small' source={google_logo}></Avatar>
    <a style={{textDecoration:'none',color:'black',paddingLeft:'.5rem'}} href="https://www.google.com/maps/@27.9308066,6.7369589,3z?entry=ttu">
        View All Reviews
    </a>
    </div>
    :
    "hi"
    }

  </>
  )
}

export default ViewReviewAll