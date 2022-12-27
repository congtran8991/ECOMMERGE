import { Button } from "@chakra-ui/react";

interface propsType {
  size: string;
  text: string;
  typeButton: number;
}

interface themeType {
  color: string;
  border: string;
  bg: string;
}
export default function CustomButton(props: Partial<propsType>) {
  const { size = "sm", text = "", typeButton = 1 } = props;
  const theme: themeType = {
    color: typeButton === 1 ? "var(--clr-green-primary)" : "var(--clr-white)",
    border: "1px solid var(--clr-green-primary)",
    bg: typeButton === 1 ? "" : "var(--clr-green-primary)",
  };

  return (
    <Button
      {...theme}
      borderRadius={0}
      loadingText="Loading"
      variant=""
      size={size}
    >
      {text}
    </Button>
  );
}
