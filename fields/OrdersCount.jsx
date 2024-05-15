import { NumberField } from "react-admin";

export default function OrdersCountField(props) {
  return <NumberField
    label="orders.count"
    source="orders_count"
    className="number-field"
    {...props}
    />
}

OrdersCountField.defaultProps = {label: 'orders.count' }