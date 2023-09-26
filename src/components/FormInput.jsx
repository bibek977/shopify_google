import { Select, Text } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'
import '../components/form.css'

const FormInput = () => {
  const [selected, setSelected] = useState('1');

  const handleSelectChange = useCallback(
    (value) => setSelected(value),
    [],
  );

  const rating = [
    {label: '1 star', value: '1'},
    {label: '2 star', value: '2'},
    {label: '3 star', value: '3'},
    {label: '4 star', value: '4'},
    {label: '5 star', value: '5'},

  ];
  const date = [
    {label: 'Month Year', value: '1'},
    {label: 'Year Month Day', value: '2'},
    {label: 'Month Day Year', value: '3'},
    {label: 'Hide', value: '4'},
  ];
  const align = [
    {label: 'Center', value: '1'},
    {label: 'Left', value: '2'},
    {label: 'Right', value: '3'},
  ];
  const theme = [
    {label: 'Light', value: '1'},
    {label: 'Dark', value: '2'},
    {label: 'Transparent Background', value: '3'},
    {label: 'Custom', value: '4'},
  ];
  return (
    
    <div className='w-100'>
      <div className="d-flex justify-content-start mb-3">

      <label className='w-50'>
        <Text>Minimum Rating</Text>
      </label>
      <span className='w-50'>

       <Select
      options={rating}
      onChange={handleSelectChange}
      value={selected}
      />
      </span>
      </div>
      <div className="d-flex justify-content-start mb-3">

      <label className='w-50'>
        <Text>Select Date format</Text>
      </label>
      <span className='w-50'>

       <Select
      options={date}
      onChange={handleSelectChange}
      value={selected}
      />
      </span>
      </div>
      <div className="d-flex justify-content-start mb-3">

      <label className='w-50'>
        <Text>Align</Text>
      </label>
      <span className='w-50'>

       <Select
      options={align}
      onChange={handleSelectChange}
      value={selected}
      />
      </span>
      </div>
      <div className="d-flex justify-content-start mb-3">

      <label className='w-50'>
        <Text>Theme</Text>
      </label>
      <span className='w-50'>

       <Select
      options={theme}
      onChange={handleSelectChange}
      value={selected}
      />
      </span>
      </div>
    </div>
   
  )
}

export default FormInput