import { Box, Flex } from "@chakra-ui/react";
import BoxWrapper from "basicComponents/BoxWrapper";
import LeftInformation from "components/account/LeftInformation";
import RightInformation from "components/account/RightInformation";
import { useRouter } from "next/router";

export default function Account() {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);
  return (
    <Box width={["100%", "100%", "100%", "80%"]}>
      <Box className="text-page">Thông tin tài khoản</Box>
      <BoxWrapper>
        <Flex my={3} gap={6}>
          <LeftInformation />
          <RightInformation />
        </Flex>
      </BoxWrapper>
    </Box>
  );
}
