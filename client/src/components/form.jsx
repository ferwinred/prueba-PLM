import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "./Form.css";

export default function BasicSelect() {
  const [user, setUser] = React.useState({
    nombre: "",
    apellido: "",
    tipo_documento: "",
    documento: 0,
    email: "",
    celular: "",
    fecha_nacimiento: "",
    archivo: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
        
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth onSubmit={handleSubmit}>
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
              value={user.nombre}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="apellido"
              placeholder="ingrese su apellido"
              value={user.apellido}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-number"
              label="Documento"
              type="number"
              placeholder="ingrese su documento"
              value={user.documento}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-number"
              label="celular"
              type="text"
              placholder="ingrese su celular"
              value={user.celular}
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              type="date"
              placholder="ingrese su fecha de nacimiento"
              value={user.date}
              onChange={handleChange}
            />
          </div>
          <div className="select">
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Tipo de documento
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user.tipo_documento}
                label="Tipo_documento"
                onChange={handleChange}
              >
                <MenuItem value="CC">CC</MenuItem>
                <MenuItem value="CE">CE</MenuItem>
                <MenuItem value="TI">TI</MenuItem>
                <MenuItem value="PASAPORTE">PASAPORTE</MenuItem>
              </Select>
            </Box>
          </div>
          <div>
            <input
              accept="image/*"
              name="archivo"
              className="upload"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              value={user.archivo}
              onChange={handleChange}
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                className="btn_upload"
              >
                Upload
              </Button>
            </label>
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Button label="submit" type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Stack>
          </div>
        </Box>
      </FormControl>
    </Box>
  );
}
