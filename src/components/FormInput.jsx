import { Select, Text } from '@shopify/polaris';
import React, { useCallback } from 'react';
import { CustomColor } from './CustomColor';

const FormInput = (props) => {

  const {settings,setSettings} = props

  const RatingsOptions = [
    { label: "1 Star", value: '1' },
    { label: "2 Star", value: '2' },
    { label: "3 Star", value: '3' },
    { label: "4 Star", value: '4' },
    { label: "5 Star", value: '5' },
  ];

  const DateOptions = [
    { label: "Month Year", value: "my" },
    { label: "Year Month Day", value: "ymd" },
    { label: "Month Day Year", value: "mdy" },
    { label: "Hide", value: "hide" },
  ];

  const AlignOptions = [
    { label: "Left", value: "left" },
    { label: "Center", value: "center" },
    { label: "Right", value: "right" },
  ];

  const ThemeOptions = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Transparent", value: "transparent" },
    { label: "Custom", value: "custom" }
  ];

  const handleRatingChange = useCallback(
    (value)=> setSettings((prev)=>({
      ...prev,
      minratings : value
    })),[setSettings])
  const handleDateChange = useCallback(
    (value)=> setSettings((prev)=>({
      ...prev,
      dateformat : value
    })),[setSettings])
  const handleAlignChange = useCallback(
    (value)=> setSettings((prev)=>({
      ...prev,
      align : value
    })),[setSettings])
  const handleThemeChange = useCallback(
    (value)=> setSettings((prev)=>({
      ...prev,
      theme : value
    })),[setSettings])


  return (

    <div className="w-100">

      <div className="d-flex justify-content-start mb-3">
        <label className="w-50">
          <Text>Minimum Rating</Text>
        </label>
        <span className="w-50">
          <Select
          name='minratings'
          options={RatingsOptions}
          value={settings?.minratings}
          onChange={handleRatingChange}
          >
          </Select>
        </span>
      </div>
      <div className="d-flex justify-content-start mb-3">
        <label className="w-50">
          <Text>Select Date format</Text>
        </label>
        <span className="w-50">
          <Select
          name='dateformat'
          options={DateOptions}
          value={settings?.dateformat}
          onChange={handleDateChange}
          >
          </Select>
        </span>
      </div>
      <div className="d-flex justify-content-start mb-3">
        <label className="w-50" htmlFor='align'>
          <Text>Align</Text>
        </label>
        <span className="w-50">
          <Select
          name='align'
          options={AlignOptions}
          value={settings?.align}
          onChange={handleAlignChange}
          >
          </Select>
        </span>
      </div>
      <div className="d-flex justify-content-start mb-3">
        <label className="w-50" htmlFor='theme'>
          <Text>Theme</Text>
        </label>
        <span className="w-50">
          <Select
          name='theme'
          options={ThemeOptions}
          value={settings?.theme}
          onChange={handleThemeChange}
          >
          </Select>
          {settings?.theme==='custom'?
          <CustomColor></CustomColor>
          :
          ""
        }
        </span>
      </div>

    </div>
  )
}

export default FormInput;
