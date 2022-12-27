import {
  Box,
  Flex,
  List,
  ListItem,
  Avatar,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Button,
} from "@chakra-ui/react";
import PageWrapper from "basicComponents/PageWrapper";
import BoxWrapper from "basicComponents/BoxWrapper";
import LeftInformation from "components/account/LeftInformation";
import RightInformation from "components/account/RightInformation";
import TabMenu from "components/TabMenu";

export default function Account() {
  return (
    <PageWrapper>
      <Flex gap={4} direction={["column", "column", "column", "row"]}>
        <TabMenu />
        <Box width={["100%", "100%", "100%", "80%"]}>
          <Box className="text-page">Thông tin tài khoản</Box>
          <BoxWrapper>
            <Flex my={3} gap={6}>
              <LeftInformation />
              <RightInformation />
            </Flex>
          </BoxWrapper>
        </Box>
      </Flex>
    </PageWrapper>
  );
}
