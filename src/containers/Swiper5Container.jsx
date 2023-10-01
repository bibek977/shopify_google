import React from 'react'
import CustomCard from '../components/CustomCard'

const Swiper5Container = (props) => {
    const {data,settings,setSettings} = props
    let cardbody
    let cardbody2
    let text
    if (settings?.theme === 'dark') {
      cardbody = {backgroundColor:'black'};
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


<div className='d-flex flex-column'>

        {
            data?.map((e,i)=>{
                return(
                <div>

                <CustomCard data={e} key={i} settings={settings} setSettings={setSettings}></CustomCard>
                </div>
            )
        })
    }
</div>

    </>
  )
}

export default Swiper5Container