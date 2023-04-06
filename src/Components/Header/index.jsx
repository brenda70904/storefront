import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const {cart} = useSelector(state => state);
  return (
    <>
    <Grid>
      <Grid item>
      <Typography variant="h3"> 401d51 Our Store </Typography>
      </Grid>
      <Grid item xs style={{textAlign:'right', alignSelf:'center'}}>
        <Typography >Cart ({cart.length})</Typography>
      </Grid>
    </Grid>
      <p>cart</p>
    </>
  )
}
export default Header;
