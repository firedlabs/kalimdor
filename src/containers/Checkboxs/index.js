import styled from 'styled-components'
import { CheckboxStyle } from '@firedlabs/design-system/dist/components/Field/Checkbox/styles'

const Checkboxs = styled.fieldset`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > ${CheckboxStyle} {
    margin: 0 var(--gap-small) var(--gap-medium);
  }
`

export default Checkboxs
