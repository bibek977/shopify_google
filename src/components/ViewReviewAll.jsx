import { Avatar } from '@shopify/polaris'
import React from 'react'
import { google_logo } from './LogoGoogle'

const ViewReviewAll = (props) => {
  const {settings} = props
  let cardbody
  let text
  if (settings?.theme === 'dark') {
    cardbody = {backgroundColor:'#000'};
    text = {color : '#fff'};
  }
  else if(settings?.theme==='light') {
    cardbody = {backgroundColor:'white'};
    text = {color : '#000'};
  }
  else if(settings?.theme==='transparent'){
  
    cardbody={background:'white'}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbody={backgroundColor:settings?.cardbody}
    text={color:settings?.text}
 }
 
  return (
  <>
    {settings?.ShowViewAllReviewsLink?
    <div className='d-flex justify-content-end p-2' style={{position:'absolute',right:'1rem',bottom:'.3rem'}}>
    <Avatar size='small' source={google_logo}></Avatar>
    <a style={{...text,textDecoration:'none',paddingLeft:'.5rem'}} href="https://www.google.com/maps/@27.9308066,6.7369589,3z?entry=ttu">
        View All Reviews
    </a>
    </div>
    :
    ""
    }

  </>
  )
}

export default ViewReviewAll