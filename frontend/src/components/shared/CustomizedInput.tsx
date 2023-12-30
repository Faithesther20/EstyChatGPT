import { TextField } from "@mui/material";

type Props={
    name:string;
    type:string;
    label:string;
}

const CustomizedInput = (props: Props) => {
  return (
    <TextField InputLabelProps={{style:{color:"white"}  }} name={props.name} label={props.label} type={props.type} />
  )
}

export default CustomizedInput