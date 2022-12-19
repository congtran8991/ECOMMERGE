import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function LeftHeader() {
  return (
    <div className="header-left flex">
      <div className="header-logo min-width-150 text-white">LOGO</div>
      <div className="header-item  ml-5">
        <Menu>
          <MenuButton>
            <FontAwesomeIcon
              color="var(--clr-white)"
              size="lg"
              icon={faBars as IconProp}
            />
          </MenuButton>
          <MenuList zIndex={999999} className="mt-7" borderRadius={"-moz-initial"}>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
