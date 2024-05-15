import { NumberField } from 'react-admin'

export default function NrField(props) {
  return <NumberField
    label="common.nr"
    source="id"
    className="number-field"
    {...props}
    />
}

NrField.defaultProps = { label: 'common.nr' }