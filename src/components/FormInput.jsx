import { Select } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'

const FormInput = () => {
  const [selected, setSelected] = useState('1');

  const handleSelectChange = useCallback(
    (value) => setSelected(value),
    [],
  );

  const options = [
    {label: '1 star', value: '1'},
    {label: '2 star', value: '2'},
    {label: '3 star', value: '3'},
    {label: '4 star', value: '4'},
    {label: '5 star', value: '5'},

  ];
  return (


    <Select
      options={options}
      onChange={handleSelectChange}
      value={selected}
      />


  )
}

export default FormInput