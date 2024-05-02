import {
  Create,
  useNotify,
} from "react-admin";

export function EmbededCreate(props) {

  const { onCreated, children, ...rest } = props

  const notify = useNotify();

  const onSuccess = (data) => {
    notify(`ra.notification.created`);
    if (typeof onCreated === 'function') onCreated(data.id);
  };

  return <Create
    mutationOptions={{ onSuccess }}
    {...rest}>
      {children}
  </Create>
}