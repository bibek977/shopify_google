import React, { useContext } from 'react'
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
  return (
    <>
    <div style={{backgroundColor:'white'}} className='p-3'>

        <WriteReview></WriteReview>

        {
            settings?.previewId === 1 ? (<CardContainer settings={settings} setSettings={setSettings}></CardContainer>) 
            : settings?.previewId === 2 ? (<Card2Container settings={settings} setSettings={setSettings} ></Card2Container>)
            : settings?.previewId === 3 ? (<Card3Container settings={settings} setSettings={setSettings}></Card3Container>)
            : settings?.previewId === 4 ? (<Card4Container settings={settings} setSettings={setSettings}></Card4Container>)
            : settings?.previewId === 5 ? (<Card5Container settings={settings} setSettings={setSettings}></Card5Container>)
            : settings?.previewId === 6 ? (<Card6Container settings={settings} setSettings={setSettings}></Card6Container>)
            :(<h1>Not Found</h1>)
        }

        <ViewReviewAll></ViewReviewAll>

</div>

    </>
  )
}

export default Preview