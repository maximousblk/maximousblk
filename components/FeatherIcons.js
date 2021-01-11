import * as Feather from "react-feather";

export default function Icon(props) {
  const Icon = Feather[props.name];
  return <Icon {...props} />;
}
