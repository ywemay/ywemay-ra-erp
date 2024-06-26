import { 
  ReferenceField,
  TextField,
} from "react-admin";
import CustomerReferenceField from "./CustomerReference";

export default function ProjectReferenceField({short, ...props}) {
  return (
  <ReferenceField
    source="project_id"
    reference="projects"
    {...props}
    >
    <TextField source="id" />, <TextField source="title" />{!short && <>,  <CustomerReferenceField /></>}
  </ReferenceField>
  )
}
ProjectReferenceField.defaultProps = { label: "projects.project" }