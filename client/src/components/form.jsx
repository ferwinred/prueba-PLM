import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function BasicSelect() {
  const [type, setType] = React.useState("");
  const [user, setUser] = React.useState({
      nombre: "",
      apellido: "",
      tipo_documento: "",
      documento: 0,
      email: "",
      celular: "",
      fecha_nacimiento: "",
      archivo: ""
  })

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="nombre"
              placeholder="ingrese su nombre"
            />
            <TextField
              required
              id="outlined-required"
              label="apellido"
              placeholder="ingrese su apellido"
            />
              <Box>
                <InputLabel id="demo-simple-select-label">
                  Tipo de documento
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Tipo_documento"
                  onChange={handleChange}
                >
                  <MenuItem value="CC">CC</MenuItem>
                  <MenuItem value="CE">CE</MenuItem>
                  <MenuItem value="TI">TI</MenuItem>
                  <MenuItem value="PASAPORTE">PASAPORTE</MenuItem>
                </Select>
              </Box>
            <TextField
              id="outlined-number"
              label="Documento"
              type="number"
              placeholder="ingrese su documento"
            />
            <TextField
              id="outlined-number"
              label="celular"
              type="text"
              placholder="ingrese su celular"
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="date"
              placholder="ingrese su fecha de nacimiento"
            />
          </div>
        </Box>
      </FormControl>
    </Box>
  );
}
