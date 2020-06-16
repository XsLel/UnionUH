import React from "react";
import { Segment, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";

function TopMenu(props) {
  const { showSearchRestaurant, filterRestaurant } = props;
  return (
    <Segment inverted color="teal" className="no-radius">
      <Menu inverted color="teal" secondary>
        <Menu.Item name="home" active />
        <Menu.Item>
          <NavLink to="/calendar">Calendario de festividades</NavLink>
        </Menu.Item>
        {showSearchRestaurant === true ? (
          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                icon="search"
                placeholder="Search..."
                onChange={(event, data) => filterRestaurant(data.value)}
              />
            </Menu.Item>
          </Menu.Menu>
        ) : null}
      </Menu>
    </Segment>
  );
}

export default TopMenu;
