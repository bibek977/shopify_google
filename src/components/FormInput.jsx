import { Select, Text } from '@shopify/polaris';
import React, { useContext, useState } from 'react';
import { ButtonSelectContext } from './ButtonSelect';

const FormInput = () => {
  const {selectedOptions,setSelectedOptions} = useContext(ButtonSelectContext)

  const options = {
    rating: [
      { label: '1 star', value: '1' },
      { label: '2 star', value: '2' },
      { label: '3 star', value: '3' },
      { label: '4 star', value: '4' },
      { label: '5 star', value: '5' },
    ],
    date: [
      { label: 'Month Year', value: '1' },
      { label: 'Year Month Day', value: '2' },
      { label: 'Month Day Year', value: '3' },
      { label: 'Hide', value: '4' },
    ],
    align: [
      { label: 'Center', value: '1' },
      { label: 'Left', value: '2' },
      { label: 'Right', value: '3' },
    ],
    theme: [
      { label: 'Light', value: '1' },
      { label: 'Dark', value: '2' },
      { label: 'Transparent Background', value: '3' },
      { label: 'Custom', value: '4' },
    ],
  };

  // const [selectedOptions, setSelectedOptions] = useState({
  //   rating: '1',
  //   date: '1',
  //   align: '1',
  //   theme: '1',
  // });

  const handleSelectChange = (key, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };
  // console.log(selectedOptions)

  return (
    <div className="w-100">
      {Object.keys(options).map((key) => (
        <div className="d-flex justify-content-start mb-3" key={key}>
          <label className="w-50">
            <Text>{`Select ${key} format`}</Text>
          </label>
          <span className="w-50">
            <Select
              options={options[key]}
              onChange={(value) => handleSelectChange(key, value)}
              value={selectedOptions[key]}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default FormInput;
