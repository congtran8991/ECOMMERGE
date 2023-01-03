import { ListItem } from "@chakra-ui/react";

interface propsType {
  title: string;
  icon: JSX.Element;
  active: boolean;
  urlAttr: string
}
const MenuItem = (props: Partial<propsType>) => {
  const { active = false, title, icon, urlAttr } = props;
  const bg: string = active ? "var(--clr-gray-third)" : "";
  return (
    <ListItem
      className="text-label"
      cursor={"pointer"}
      bg={bg}
      padding={2}
      _hover={{ bg: "var(--clr-gray-third)" }}
      url-attr={urlAttr}
    >
      {title}
    </ListItem>
  );
};

export default MenuItem;
