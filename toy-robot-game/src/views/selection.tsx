import {
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@material-ui/core";

interface IButtonProps {
    children?: React.ReactNode;
    id:string;
    props?: any;
    label:string;
    value:number;
    values:any[];
    onChange?: any
}


 const InputCommnds: React.FC<IButtonProps> = ({ id,onChange, children,label,value,values, ...props }) => {

    return ( <FormControl  required variant="outlined" style={{ marginRight: 10 }}>
    <InputLabel shrink>{label}</InputLabel>
    <Select name={id}  label={label} value={value} onChange={onChange}>
   {generateMenuItems(values)}
    </Select>
    <FormHelperText>Select row</FormHelperText>
  </FormControl>
    );
};

const generateMenuItems=(values:number[] | string[])=>{
    return values.map(menu =><MenuItem value={menu}>{menu}</MenuItem> )
}

export default InputCommnds;
