import { Button } from "@chakra-ui/react";

interface PropsType {
  size: string;
  text: string;
  typeButton: number;
}

interface ThemeType {
  color: string;
  border: string;
  bg: string;
}
export default function CustomButton(props: Partial<PropsType>) {
  const { size = "sm", text = "", typeButton = 1 } = props;
  const theme: ThemeType = {
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
