import { SelectField } from "react-admin";
import { incoterms } from 'ywemay-erp-choices/incoterms';

export default function IncotermField(props) {
  return <SelectField
    source="incoterm"
    choices={incoterms}
    {...props}
  />
}

IncotermField.defaultProps = { label: "incoterms.incoterm" }