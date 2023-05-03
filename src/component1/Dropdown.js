import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown(props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    props.handler(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">{ props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.value}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.items.map((item,) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
}
