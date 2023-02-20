import React, { useState, useEffect } from "react";
import {
  Grid,
  Avatar,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { SearchField } from "../basic/StyledComponents";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { useGetUsersQuery } from "../../app/services/accountApi";
import { Link } from "gatsby";
import { useSelector } from "react-redux";

const ViewUserSearchDialog = ({ searchTerm, handleClose }) => {
  const accountID = useSelector((state) => state.user.id);
  const [search, setSearch] = useState(searchTerm);
  const [finalSearch, setFinalSearch] = useState(searchTerm);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setFinalSearch(search);
    }, 800);

    return () => {
      clearTimeout(timeOutID);
    };
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const { data: result = [], isFetching } = useGetUsersQuery(
    finalSearch === "" ? "none" : finalSearch,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const returnNoData = () => { 
    if (finalSearch !== "" && result.length === 0 && !isFetching) {
      return (
        <Grid sx={{ width: "100%" }}>
          <Typography
            variant="body1"
            align="center"
            sx={{ width: "100%", fontFamily: "Raleway", p: 3 }}
          >
            {"'" + search + "' has no matching result."}
          </Typography>
        </Grid>
      );
    }
    
    if (finalSearch === "" && !isFetching){
        return (
            <Grid sx={{ width: "100%" }}>
              <Typography
                variant="body1"
                align="center"
                sx={{ width: "100%", fontFamily: "Raleway", p: 3 }}
              >
                {"Search by name or username"}
              </Typography>
            </Grid>
          );
    }
  };

  return (
    <React.Fragment>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          width: { xs: "100%", sm: 400, md: 500 },
          height: {xs: '100vh', sm:600, md:600},
          bgcolor: "#f3f4f8",
        }}
      >
        <Stack direction="row" alignItems="center" sx={{ width: "100%", p: 2, mb:1 }}>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, fontFamily: "Arvo", fontWeight: "bold" }}
          >
            {"Search"}
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton onClick={() => handleClose()}>
            <CancelRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          alignItems={"center"}
          sx={{
            backgroundColor: "white",
            width: "95%",
            borderRadius: 10,
            border: "1px solid #E7E9EB",
          }}
        >
          <SearchField
            variant="outlined"
            inputProps={{ style: { fontFamily: "Arvo" } }}
            placeholder={"Search Plantmunity"}
            value={search}
            onChange={handleSearchChange}
            size="small"
          />
        </Stack>

        {isFetching ? (
          <Grid sx={{ width: "100%" }}>
            <Typography
              variant="body1"
              align="center"
              sx={{ width: "100%", fontFamily: "Raleway", p: 3 }}
            >
              {"Searching..."}
            </Typography>
          </Grid>
        ) : result ? (
          result.map(
            ({
              id,
              first_name,
              middle_name,
              last_name,
              username,
              profile_picture,
            }) => {
              const linksState = {
                uid: id,
              };
              return (
                <Stack
                  key={id}
                  direction="row"
                  alignItems="center"
                  sx={{
                    width: "95%",
                    borderRadius: 5,
                    height: 70,
                    mt: 1,
                    pl: 2,
                    pr: 2,
                    boxShadow: "2.0px 4.0px 4.0px hsl(0deg 0% 0% / 0.38)",
                    bgcolor: "white",
                    color: "#5C6D63",
                    "&:hover": { bgcolor: "#BFCBA5", color: "white" },
                  }}
                >
                  <Avatar alt={first_name} src={profile_picture} />
                  <Stack direction="column" sx={{ ml: 2, flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ fontFamily: "Arvo" }}>
                      {first_name +
                        " " +
                        (middle_name === "" ? "" : middle_name) +
                        " " +
                        last_name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontFamily: "raleway" }}
                    >
                      {"@" + username}
                    </Typography>
                  </Stack>
                  <Link
                    id="label"
                    style={{ textDecoration: "none", color: "white" }}
                    to={id === accountID ? "/profile" : "/viewProfile"}
                    state={linksState}
                  >
                    <Button
                      contained
                      sx={{
                        textTransform: "none",
                        fontFamily: "arvo",
                        fontSize: 12,
                        border: "1px white solid",
                        bgcolor: "#BFCBA5",
                        color: "white",
                        borderRadius: 5,
                        width: 130,
                      }}
                    >
                      View Profile
                    </Button>
                  </Link>
                </Stack>
              );
            }
          )
        ) : (
          []
        )}

        {returnNoData()}
      </Stack>
    </React.Fragment>
  );
};

export default ViewUserSearchDialog;
