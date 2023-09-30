import React, { useContext } from 'react'
import { PreviewCardContext } from './PreviewCard'
import CardContainer from '../containers/CardContainer'
import Card2Container from '../containers/Card2Container'
import Card3Container from '../containers/Card3Container'
import Card4Container from '../containers/Card4Container'
import Card5Container from '../containers/Card5Container'
import Card6Container from '../containers/Card6Container'
import WriteReview from './WriteReview'
import ViewReviewAll from './ViewReviewAll'
import { ButtonSelectContext } from './ButtonSelect'

const Preview = () => {
  const {settings,setSettings} = useContext(ButtonSelectContext)
    const {previewId} = useContext(PreviewCardContext)
  return (
    <>
    <div style={{backgroundColor:'white'}} className='p-3'>

        <WriteReview></WriteReview>

        {
            previewId === 1 ? (<CardContainer settings={settings} setSettings={setSettings}></CardContainer>) 
            : previewId === 2 ? (<Card2Container settings={settings} setSettings={setSettings} ></Card2Container>)
            : previewId === 3 ? (<Card3Container settings={settings} setSettings={setSettings}></Card3Container>)
            : previewId === 4 ? (<Card4Container settings={settings} setSettings={setSettings}></Card4Container>)
            : previewId === 5 ? (<Card5Container settings={settings} setSettings={setSettings}></Card5Container>)
            : previewId === 6 ? (<Card6Container settings={settings} setSettings={setSettings}></Card6Container>)
            :(<h1>Not Found</h1>)
        }

        <ViewReviewAll></ViewReviewAll>

</div>

    </>
  )
}

export default Preview