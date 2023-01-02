import { ListItem } from "@chakra-ui/react";

interface propsType {
  text: string;
  icon: JSX.Element;
  active: boolean;
}
const MenuItem = (props: Partial<propsType>) => {
  const { active = false, text, icon } = props;
  const bg: string = active ? "var(--clr-gray-third)" : "";
  return (
    <ListItem
      className="text-label"
      bg={bg}
      padding={2}
      _hover={{ bg: "var(--clr-gray-third)" }}
    >
      {text}
    </ListItem>
  );
}

export default MenuItem
