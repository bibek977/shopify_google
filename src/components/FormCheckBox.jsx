import { Checkbox } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'

const FormCheckBox = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback(
    (newChecked) => setChecked(newChecked),
    [],
  )
  return (
    <div className='w-100'>
    <div className='w-100 mx-5 mb-2'>

    <Checkbox
    label="Hide Reviews without Comments"
    checked={checked}
    onChange={handleChange}
    />
    </div>
    <div className='w-100 mx-5 mb-2'>

    <Checkbox
    label="Hide Rating Text"
    checked={checked}
    onChange={handleChange}
    />
    </div>
    <div className='w-100 mx-5 mb-2'>

    <Checkbox
    label="Show Reviewers Photo"
    checked={checked}
    onChange={handleChange}
    />
    </div>
    <div className='w-100 mx-5 mb-2'>

    <Checkbox
    label="Show Reviewers Name"
    checked={checked}
    onChange={handleChange}
    />
    </div>
    <div className='w-100 mx-5 mb-2'>

    <Checkbox
    label="Show View All Reviews Link"
    checked={checked}
    onChange={handleChange}
    />
    </div>
    <div className='w-100 mx-5 mb-2'>

    <Checkbox
    label="Show Write a Review Button"
    checked={checked}
    onChange={handleChange}
    />
    </div>
    </div>
  )
}

export default FormCheckBox