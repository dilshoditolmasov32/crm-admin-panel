import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectMenu({
  inputLabel,
  option1,
  option2,
  option3,
  option4,
}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 190,
        background: "#10355B",
        color: "#fff",
        borderRadius: "6px",
        height: 48,
      }}
    >
      <FormControl
        fullWidth
        sx={{
          color: "#fff",
          height: 48,
        }}
      >
        {value === "" && (
          <InputLabel
            shrink={false}
            sx={{
              color: "#fff",
              fontSize: "16px",
              "&.Mui-focused": {
                color: "#fff",
              },
            }}
          >
            Company name
          </InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Company name"
          onChange={handleChange}
          defaultValue="Company name"
          sx={{
            color: "#fff",
            height: 48,
            fontSize: 18,
            svg: {
              color: "#fff",
            },
          }}
        >
          <MenuItem
            value={option1}
            sx={{
              color: "#B2B2B2",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            {option1}{" "}
          </MenuItem>
          <MenuItem
            value={option2}
            sx={{
              color: "#B2B2B2",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            {option2}
          </MenuItem>
          <MenuItem
            value={option3}
            sx={{
              color: "#B2B2B2",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            {option3}
          </MenuItem>
          <MenuItem
            value={option4}
            sx={{
              color: "#B2B2B2",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            {option4}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
