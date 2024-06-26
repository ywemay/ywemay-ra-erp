import { TextField } from "react-admin";

export default function SKUField (props) {
  return <TextField 
    label="products.sku"
    source="id"
    {...props}
    />
}

SKUField.props = { label: 'products.sku' }