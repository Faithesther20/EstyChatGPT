import { TextField } from "@mui/material";

type Props={
    name:string;
    type:string;
    label:string;
}

const CustomizedInput = (props: Props) => {
  return (
    <TextField InputLabelProps={{style:{color:"white", }  }} name={props.name} label={props.label} type={props.type}  InputProps={{style:{width:"400px", borderRadius:10, fontSize:15, color:"white"}}}
    />
  )
}

export default CustomizedInput