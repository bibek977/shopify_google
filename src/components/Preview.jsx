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
import { ApiDataContext } from './ContextData'

const Preview = (props) => {
  const {settings,setSettings} = props
  // const {settings,setSettings} = useContext(ButtonSelectContext)
  const {apiData,officeData}=useContext(ApiDataContext)
  let cardbg
  let text
  if (settings?.theme === 'dark') {
    cardbg = {backgroundColor:'#000'};
    text = {color : '#fff'};
  }
  else if(settings?.theme==='light') {
    cardbg = {backgroundColor:'white'};
    text = {color : '#000'};
  }
  else if(settings?.theme==='transparent'){
  
    cardbg={backgroundColor:"#000"}
    text={color:'#000'}
 }
 else if(settings?.theme==='custom'){
    cardbg={backgroundColor:settings?.cardbg}
    text={color:settings?.text}
 }

   let newData = apiData;

   if (settings?.minratings === '4') {
     newData = apiData?.filter((item) => item.star >= 4)
   }
   else if (settings?.minratings === '3') {
     newData = apiData?.filter((item) => item.star >= 3);
   }
   else if (settings?.minratings === '5') {
     newData = apiData?.filter((item) => item.star >= 5);
   }
   else if (settings?.minratings === '2') {
     newData = apiData?.filter((item) => item.star >= 2);
   }
   else if (settings?.minratings === '1') {
     newData = apiData?.filter((item) => item.star >= 1);
   }

   let finalData = newData;

   if (settings?.HideReviewsWithoutComments===true) {

     finalData = newData?.filter((item)=>item.description!=="")
    }
 
  return (
    <>
    <div  className='' style={{position:'relative'}}>

        <WriteReview settings={settings} setSettings={setSettings}></WriteReview>

        {
            settings?.previewId === 1 ? (<CardContainer apiData={finalData} settings={settings} setSettings={setSettings}></CardContainer>) 
            : settings?.previewId === 2 ? (<Card2Container apiData={finalData} settings={settings} setSettings={setSettings} ></Card2Container>)
            : settings?.previewId === 3 ? (<Card3Container apiData={finalData} settings={settings} setSettings={setSettings}></Card3Container>)
            : settings?.previewId === 4 ? (<Card4Container apiData={finalData} settings={settings} setSettings={setSettings}></Card4Container>)
            : settings?.previewId === 5 ? (<Card5Container apiData={finalData} settings={settings} setSettings={setSettings}></Card5Container>)
            : settings?.previewId === 6 ? (<Card6Container apiData={finalData} settings={settings} setSettings={setSettings}></Card6Container>)
            :(<h1>Not Found</h1>)
        }

        <ViewReviewAll settings={settings} setSettings={setSettings}></ViewReviewAll>

</div>

    </>
  )
}

export default Preview