import TextField from '@mui/material/TextField';


export const Input = ({ name, placeholder, required = true, defaultValue, type = "text", variant = "outlined", multiline = false, maxRows = 4, size = "normal", className = "" }) => {
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

export const InputLabel = ({ name, placeholder, required = true, defaultValue, type = "text", variant = "outlined", multiline = false, maxRows = 4, size = "normal", className = "", label = "",value,onChange = () => {} }) => {
    return (
        <label className="flex flex-col gap-1">
            <span>{label}</span>
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
                value={value}
                onChange={onChange}
            // InputLabelProps={{ shrink: true }}
            />
        </label>
    )
}

export const InputValue = ({ name, placeholder, required = true, value, type = "text", variant = "outlined", multiline = false, maxRows = 4, size = "normal", className = "", onChange = () => { } }) => {
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