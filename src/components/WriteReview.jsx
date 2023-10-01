import React from 'react'
import { Button } from 'react-bootstrap'

const WriteReview = (props) => {
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
    { settings?.ShowWriteReviewButton ?

    <div className='d-flex justify-content-end' style={cardbody}>

    <Button className='bg-primary m-2 '>
        <a style={{textDecoration:'none',color:'white',paddingLeft:'.5rem'}} href="https://www.google.com/maps/@27.9308066,6.7369589,3z?entry=ttu">
            Write a review
        </a>
    </Button>
    </div>
    : 
    ""
        }
    </>

  )
}

export default WriteReview