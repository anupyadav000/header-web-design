import { Box, Button } from "@chakra-ui/react";
import React from "react";

function Header(props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      backgroundColor={"#C21818"}
      textColor={"white"}
      fontWeight={"bold"}
      justifyContent={"space-around"}
    >
      <Box display={"flex"} flexDirection={"row"}>
        <Box display={"flex"} flexDirection={"row"} alignContent={"center"}>
          <i class="fa fa-solid fa-user"></i>
          <Button backgroundColor={"#C21818"}>Jobs</Button>
        </Box>
        <Box display={"flex"} flexDirection={"row"} alignContent={"center"}>
          <i class="fa fa-solid fa-calendar"></i>
          <Button backgroundColor={"#C21818"}>Calendar</Button>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <i class="fa fa-solid fa-indian-rupee-sign"></i>
          <Button backgroundColor={"#C21818"}>Tenders</Button>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <i class="fa fa-solid fa-cart-shopping"></i>
          <Button backgroundColor={"#C21818"}>Payment Gateway</Button>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <i class="fa fa-solid fa-user"></i>
          <Button backgroundColor={"#C21818"}>Recruiters/Careers</Button>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <i class="fa fa-solid fa-user"></i>
          <Button backgroundColor={"#C21818"}>IGES</Button>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          <i class="fa fa-solid fa-user"></i>
          <Button backgroundColor={"#C21818"}>GIVE</Button>
        </Box>
      </Box>
      <Box>
        <Button backgroundColor={"#C21818"}>
          <i class="fa fa-brands fa-twitter"></i>
        </Button>
        <Button backgroundColor={"#C21818"}>
          <i class="fa fa-brands fa-linkedin"></i>
        </Button>
        <Button backgroundColor={"#C21818"}>
          <i class="fa fa-brands fa-facebook"></i>
        </Button>
      </Box>
      <Box>IITD Email</Box>
    </Box>
  );
}

export default Header;
