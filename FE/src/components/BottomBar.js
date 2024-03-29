// feed, main, menu 버튼 컴포넌트
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Paper from "@mui/material/Paper";

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(null);
  const ref = useRef(null);
  const navigate = useNavigate();
  const loginUser = sessionStorage.getItem("loginUser");
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", display: "flex", bottom: 0 }}
        elevation={3}
      >
        <BottomNavigation
          className="BottomBar"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            " .Mui-selected": {
              color: "#FFFFFF !important",
              bgcolor: "#FFB9B9",
              borderRadius: "7px",
            },
          }}
        >
          <BottomNavigationAction
            onClick={() => {
              navigate(`/feed/${loginUser}`);
            }}
            icon={<MailOutlineIcon />}
          />
          <BottomNavigationAction
            onClick={() => {
              navigate("/main/new/0");
            }}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            onClick={() => {
              navigate("/menu");
            }}
            icon={<MenuIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

// .
