import {
    Box,
  Select,
  MenuItem,
  FormHelperText,
  FormControl,
  InputLabel,
} from "@material-ui/core";

interface ISelectionProps {
    children?: React.ReactNode;
    id:string;
    props?: any;
    label:string;
    helperText:string;
    value: string|number;
    values:any[];
    onChange?: any
}


 const InputCommands: React.FC<ISelectionProps> = ({ id,onChange, children,label,helperText,value,values, ...props }) => {

    return ( <FormControl  required variant="outlined" style={{ marginRight: 10 }}>
    <InputLabel shrink>{label}</InputLabel>
    <Select name={id}  label={label} value={value} onChange={onChange}>
   {generateMenuItems(values)}
    </Select>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
    );
};

const generateMenuItems=(values:number[] | string[])=>{
    return values.map(menu =><MenuItem value={menu}>{menu}</MenuItem> )
}

export default InputCommands;
