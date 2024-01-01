import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const NavBar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = async (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigateToProfile = () => {
    navigate("/profile");
  };

  const handlelogout = () => {
    debugger;
    localStorage.clear();
    navigate("/login");
  };
  const handleClose = async () => {
    setAnchorEl(null);
  };
  return (
    <nav className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          className="lg:mr-10 cursor-pointer flex items-center space-x-4"
          onClick={() => navigate("/")}
        >
          <li className="logo font-semibold text-gray-300 text-2xl uppercase">
            Negi Food
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <IconButton>
          <SearchIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
        {true ? (
          <span
            onClick={true ? handleOpenMenu : navigateToProfile}
            className="font-semibold cursor-pointer"
          >
            Charlie Coders
          </span>
        ) : (
          <IconButton>
            <PersonIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        )}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
          <MenuItem onClick={handlelogout}>Logout</MenuItem>
        </Menu>

        <IconButton onClick={() => navigate("/cart")}>
          <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
