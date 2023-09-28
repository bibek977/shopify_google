import React from 'react'
import { Button } from 'react-bootstrap'

const WriteReview = () => {
  return (
    <div className='d-flex justify-content-end'>

    <Button className='bg-primary m-2 '>
        <a style={{textDecoration:'none',color:'white',paddingLeft:'.5rem'}} href="https://www.google.com/maps/@27.9308066,6.7369589,3z?entry=ttu">
            Write a review
        </a>
    </Button>
    </div>
  )
}

export default WriteReview