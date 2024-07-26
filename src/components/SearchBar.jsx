//SearchBar.jsx
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";


 const SearchBar = ({setSearchQuery}) => {

  return (
      <form
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          margin: "20px 0",
          width: "100%",
        }}
      >
        <TextField
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
          variant="outlined"
          placeholder="Search..."
          style={{
            width: "70%",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
  );
 };

export default SearchBar;


