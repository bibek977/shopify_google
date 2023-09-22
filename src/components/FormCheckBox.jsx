import { Checkbox } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'

const FormCheckBox = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = useCallback(
    (newChecked) => setChecked(newChecked),
    [],
  )
  return (
    <Checkbox
    label="Hide Reviews without Comments"
    checked={checked}
    onChange={handleChange}
  />
  )
}

export default FormCheckBox