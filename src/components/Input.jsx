import TextField from '@mui/material/TextField';


export const Input = ({ name, placeholder, required = false, defaultValue, type, variant = "outlined", multiline = false, maxRows = 4, size="normal" }) => {
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
            // InputLabelProps={{ shrink: true }}
        />
    )
}