import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

const PopupItem = ({ currentTarget, childrenMenu, closePopup }) => (
  <Menu
    anchorEl={currentTarget}
    anchorOrigin={{
      vertical: "center",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
    }}
    getContentAnchorEl={null}
    open={!!currentTarget}
    onClose={closePopup}
  >
    {childrenMenu.map((val, index) => {
      const {
        text: textChildren,
        icon: iconChildren,
        link: linkChildren
      } = val;
      return (
        <NavLink
          // eslint-disable-next-line react/no-array-index-key
          key={`MPU-${index}-${textChildren}`}
          to={linkChildren}
          exact
          activeClassName="active-menu"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem
            onClick={closePopup}
            className="nested"
            style={{ color: "inherit" }}
          >
            <ListItemIcon>
              <Icon className="icon material-icons-round">{iconChildren}</Icon>
            </ListItemIcon>
            <ListItemText primary={textChildren} className="text" />
          </MenuItem>
        </NavLink>
      );
    })}
  </Menu>
);

PopupItem.propTypes = {
  currentTarget: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  childrenMenu: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  closePopup: PropTypes.func.isRequired
};

PopupItem.defaultProps = {
  currentTarget: null,
  childrenMenu: null
};

export default PopupItem;
