import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  IconButton,
  Button,
  Paper,
  Toolbar,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SearchField } from "../basic/StyledComponents";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Background from "../../images/AboutIntroImage.jpg";
import { BsCart, BsReceiptCutoff } from "react-icons/bs";
import ProductsCard from "../card/marketCards/ProductsCard";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MarketPlace = () => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down(1450));
  const mobile = useMediaQuery(theme.breakpoints.down(750));
  const mobile2 = useMediaQuery(theme.breakpoints.down(500));
  //const tablet = useMediaQuery(theme.breakpoints.down(1450));

  const [search, setSearch] = React.useState("");
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Grid
      container
      direction="column"
      alignitems="center"
      sx={compStyle["main-container"]}
    >
      {/* title */}
      <Grid item sx={{ width: "100%" }}>
        <Paper sx={compStyle["paper-container"]} elevation={0}>
          <Stack direction="column" alignItems="center">
            <Typography
              variant={mobile ? "body2" : "h6"}
              sx={{
                fontFamily: "raleway",
                letterSpacing: 2,
                fontWeight: "bold",
                color: "gold",
              }}
            >
              WELCOME TO THE
            </Typography>
            <Typography
              variant={mobile ? "h4" : "h2"}
              align="center"
              sx={{
                color: "white",
                fontFamily: "Arvo",
                fontWeight: "bold",
                mt: "-10px",
              }}
            >
              Market Place
            </Typography>
            <Grid sx={{ mt: 4 }}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{
                  backgroundColor: "#F0F2F5",
                  width: { xs: 250, sm: 500, md: 600 },
                  p: 2,
                  pt: 0,
                  pb: 0,
                  borderRadius: 10,
                  border: "1px solid #E7E9EB",
                }}
              >
                <SearchField
                  variant="outlined"
                  inputProps={{ style: { fontFamily: "raleway" } }}
                  placeholder={"Search by user's name, email or username"}
                  value={search}
                  onChange={handleSearchChange}
                  size="small"
                />
                <IconButton color="secondary">
                  <SearchRoundedIcon sx={{ color: "gray" }} />
                </IconButton>
              </Stack>
            </Grid>
          </Stack>
        </Paper>
      </Grid>

      <Grid item sx={compStyle["market-container"]}>
        <Stack direction="column" alignItems="center" sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "100%",
              position: "sticky",
              top: 70,
              zIndex: 3,
              backgroundColor: "white",
              p: 2,
              pb: 0,
            }}
          >
            <Stack direction="row" alignItems="center">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{ flexGrow: 1 }}
              >
                <Tab
                  label={
                    <Typography
                      variant={mobile ? "caption" : "body1"}
                      sx={{ textTransform: "none", fontFamily: "Arvo" }}
                    >
                      Followed Users
                    </Typography>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <Typography
                      variant={mobile ? "caption" : "body1"}
                      sx={{ textTransform: "none", fontFamily: "Arvo" }}
                    >
                      Public Market
                    </Typography>
                  }
                  {...a11yProps(1)}
                />
              </Tabs>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  width: 170,
                  border: "2px solid #5B8C4A",
                  borderRadius: 5,
                  display: {
                    xs: "none",
                    sm: mobile ? "none" : "flex",
                    md: "flex",
                  },
                }}
                startIcon={
                  <BsCart style={{ color: "#5B8C4A", fontSize: 18 }} />
                }
              >
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "none",
                    fontFamily: "Arvo",
                    color: "#5B8C4A",
                  }}
                >
                  My Cart
                </Typography>
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  width: 170,
                  border: "2px solid #5B8C4A",
                  borderRadius: 5,
                  ml: 1,
                  display: {
                    xs: "none",
                    sm: mobile ? "none" : "flex",
                    md: "flex",
                  },
                }}
                startIcon={
                  <BsReceiptCutoff style={{ color: "#5B8C4A", fontSize: 18 }} />
                }
              >
                <Typography
                  variant="body2"
                  sx={{
                    textTransform: "none",
                    fontFamily: "Arvo",
                    color: "#5B8C4A",
                  }}
                >
                  History
                </Typography>
              </Button>

              <IconButton
                sx={{
                  display: {
                    xs: "flex",
                    sm: mobile ? "flex" : "none",
                    md: "none",
                  },
                }}
              >
                <BsCart
                  style={{ color: "#5B8C4A", fontSize: mobile2 ? 18 : 22 }}
                />
              </IconButton>

              <IconButton
                sx={{
                  display: {
                    xs: "flex",
                    sm: mobile ? "flex" : "none",
                    md: "none",
                  },
                  ml: 1,
                }}
              >
                <BsReceiptCutoff
                  style={{ color: "#5B8C4A", fontSize: mobile2 ? 18 : 22 }}
                />
              </IconButton>
            </Stack>

            <Grid
              container
              direction="row"
              alignItems={"center"}
              sx={{ width: "100%", mt: 2 }}
            >
                {
                    sampleProducts.map(({product_name, id, product_image, product_price})=>{
                      return(
                        
                        <Grid
                          key={id}
                          item
                          sx={{
                            width: {
                              xs: "47%",
                              sm: mobile ? "31%" : "32%",
                              md: tablet ? "31%" : "32%",
                            },
                            height: { xs: 200, sm: 250, md: 250 },
                            mr: { xs: 1, sm: 1, md: 2 },
                            mb: { xs: 1, sm: 1, md: 2 },
                            bgcolor: "blue",
                            borderRadius: 3,
                            overflow: "hidden",
                            boxShadow: "2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)",
                          }}
                        >
                            <ProductsCard productName={product_name} id={id} productImage={product_image} productPrice={product_price}/>
                        </Grid>
                        
                      )  
                    })
                }

      
                
            </Grid>
            <Toolbar/>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MarketPlace;

const sampleProducts = [
    {
      id:1,
      product_price: "250",
      product_name:'Phelodendron',
      product_image:"https://www.allaboutgardening.com/wp-content/uploads/2022/06/Long-Life-of-Philodendron-in-Pot-1200x667.jpg"
    },
    {
      id:2,
      product_price: "250",
      product_name:'Snake Plant',
      product_image:"https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg"
    },
    {
      id:3,
      product_price: "250",
      product_name:'Aglonema',
      product_image:"https://www.cleanipedia.com/images/5h1w0177knh8/ZSxqnAaznoMpxb7jPtYNR/4ea02ddf210f1a6dfe4623029332491a/MDguX0NsZWFuaXBlZGlhX01laV8yMDIyX0hlYWRlci5qcGc/990w-660h/08.-cleanipedia-mei-2022-header.jpg"
    }
  
  ]

const compStyle = {
  "main-container": {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  "paper-container": {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    width: "100%",
    height: { xs: "100%", sm: 300, md: 280 },
    borderRadius: 0,
    padding: { xs: 4, sm: 8, md: 8 },
    mt:{xs:3, sm:0, md:0}
  },
  "market-container": {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
};
