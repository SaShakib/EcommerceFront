import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
function NavButton() {
  return (
    <div>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  );
}

export default NavButton;
