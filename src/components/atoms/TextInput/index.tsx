import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
export interface TextInputProps {
  label: string;
  type?: string;
  error: boolean;
  defaultValue?: string;
  helperText?: string;
  handleChange: (...props: any[]) => any;
  className?: string;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      onChange={(e): void => {
        props.handleChange(e.target.value);
      }}
      label={props.label}
      defaultValue={props.defaultValue || ""}
      error={props.error}
      helperText={props.helperText}
      type={props.type || "text"}
      className={`TextInput ${props.className && props.className} ${
        classes.root
      }`}
      disabled={props.disabled || false}
    />
  );
};

export default TextInput;
