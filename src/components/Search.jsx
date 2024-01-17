import { TextField } from "@mui/material";

export default function Search(props) {
  const { onChange, value } = props;

  return <TextField
    label='search'
    variant='standard'
    fullWidth
    type='search'
    value={value}
    onChange={onChange}
    sx={{
      mb: '1.5rem',
    }}
  />;
};
