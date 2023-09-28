import React, { useContext } from 'react'
import { PreviewCardContext } from './PreviewCard'
import CardContainer from '../containers/CardContainer'
import Card2Container from '../containers/Card2Container'
import Card3Container from '../containers/Card3Container'
import Card4Container from '../containers/Card4Container'
import Card5Container from '../containers/Card5Container'
import Card6Container from '../containers/Card6Container'

const Preview = () => {
    const {previewId} = useContext(PreviewCardContext)
  return (
    <>
        {
            previewId === 1 ? (<CardContainer></CardContainer>) 
            : previewId === 2 ? (<Card2Container></Card2Container>)
            : previewId === 3 ? (<Card3Container></Card3Container>)
            : previewId === 4 ? (<Card4Container></Card4Container>)
            : previewId === 5 ? (<Card5Container></Card5Container>)
            : previewId === 6 ? (<Card6Container></Card6Container>)
            :(<h1>Not Found</h1>)
        }
    </>
  )
}

export default Preview