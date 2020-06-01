import React from "react";
import { Button, Menu, MenuItem, MenuMenu } from "semantic-ui-react";

const Navbar = (props) => (
  <div>
    <Menu attached="top">
      <MenuMenu position="right">
        <MenuItem>
          <Button primary>inicar sesion</Button>
        </MenuItem>
      </MenuMenu>
    </Menu>
  </div>
);

export default Navbar;
