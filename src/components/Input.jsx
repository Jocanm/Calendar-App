import TextField from '@mui/material/TextField';


export const Input = ({ name, placeholder, required = false, defaultValue, type="text", variant = "outlined", multiline = false, maxRows = 4, size="normal",className="" }) => {
    return (
        <TextField
            name={name}
            label={placeholder}
            type={type}
            defaultValue={defaultValue}
            required={required}
            variant={variant}
            multiline={multiline}
            maxRows={maxRows}
            size={size}
            className={className}
            // InputLabelProps={{ shrink: true }}
        />
    )
}

export const InputValue = ({ name, placeholder, required = false, value, type="text", variant = "outlined", multiline = false, maxRows = 4, size="normal",className="", onChange = ()=>{}}) => {
    return (
        <TextField
            name={name}
            label={placeholder}
            type={type}
            value={value}
            required={required}
            variant={variant}
            multiline={multiline}
            maxRows={maxRows}
            size={size}
            className={className}
            onChange={onChange}
        />
    )
}