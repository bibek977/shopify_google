import React, { useContext, useState } from 'react'
import { ChromePicker } from 'react-color'
import { ButtonSelectContext } from './ButtonSelect'

export const CustomColor = () => {
  const {settings,setSettings} = useContext(ButtonSelectContext)
  const [initialColor,finalColor] = useState('red')
  const [initialTextColor,finalTextColor] = useState('green')
  const [initialBgColor,finalBgColor] = useState('blue')
  const colorbox = {
    width:'1.5rem',
    height:'1.5rem',
    borderRadius:'50%',
  }
  const colorpicker = {
    position:'absolute',
    bottom:'4rem',
    zIndex:100,
    left:"5rem"
  }
  const [showPicker,setShowPicker] = useState(false)
  const handleClickShow = ()=>{
    setShowPicker(!showPicker)
  }
  const handleGetColor = (color)=>{
    finalColor(color.hex)
    setSettings((prev)=>({
      ...prev,
      cardbody:color.hex
    }))
  }

  const [showTextPicker,setShowTextPicker] = useState(false)
  const handleClickTextShow = ()=>{
    setShowTextPicker(!showTextPicker)
  }

  const handleTextColor = (color)=>{
    finalTextColor(color.hex)
    setSettings((prev)=>({
      ...prev,
      text:color.hex
    }))
  }

  const [showBgPicker,setShowBgPicker] = useState(false)
  const handleClickBgShow = ()=>{
    setShowBgPicker(!showBgPicker)
  }

  const handleBgColor = (color)=>{
    finalBgColor(color.hex)
    setSettings((prev)=>({
      ...prev,
      cardbg:color.hex
    }))
  }
  return (
    <div className='mt-2 w-100' style={{position:'relative'}}>
        <div className='d-flex flex-xl-row flex-column  justify-content-around'>
          <div className='d-flex flex-row '>

          <div style={{...colorbox,backgroundColor:initialColor}} onClick={handleClickShow}> </div>
          <p className='p-1'>Background</p>
          </div>
          <div className='d-flex flex-row'>

          <div style={{...colorbox,backgroundColor:initialTextColor}} onClick={handleClickTextShow}> </div>
          <p  className='p-1'>Text</p>
          </div>
          <div className='d-flex flex-row'>

          <div style={{...colorbox,backgroundColor:initialBgColor}} onClick={handleClickBgShow}> </div>
          <p  className='p-1'>Card Background</p>
          </div>
        </div>
        {showPicker?
        <div style={colorpicker}>

        <ChromePicker color={initialColor} onChange={handleGetColor}></ChromePicker>
        </div>
      :
      ""}
        {showTextPicker?
        <div style={colorpicker}>

        <ChromePicker color={initialTextColor} onChange={handleTextColor}></ChromePicker>
        </div>
      :
      ""}
        {showBgPicker?
        <div style={colorpicker}>

        <ChromePicker color={initialBgColor} onChange={handleBgColor}></ChromePicker>
        </div>
      :
      ""}

    </div>
  )
}
