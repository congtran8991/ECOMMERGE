import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Box
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function LeftHeader() {
  return (
    <Box display={"flex"}>
      <Box color="var(--clr-white)" minWidth={"100px"}>LOGO</Box>
      <Box ml={5}>
        <Menu>
          <MenuButton>
            <FontAwesomeIcon
              color="var(--clr-white)"
              size="lg"
              icon={faBars as IconProp}
            />
          </MenuButton>
          <MenuList zIndex={999999} ml={7} borderRadius={"-moz-initial"}>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
