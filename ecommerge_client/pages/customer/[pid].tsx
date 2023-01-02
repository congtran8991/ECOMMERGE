import { Box, Flex } from "@chakra-ui/react";
import PageWrapper from "basicComponents/PageWrapper";
import Account from "components/account";
import History from "components/history";
import Coupons from "components/coupons";
import { useRouter } from "next/router";
import TabMenu from "components/TabMenu";

export default function TagPage() {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);
  return (
    <PageWrapper>
      <Flex gap={4} direction={["column", "column", "column", "row"]}>
        <TabMenu />
          {/* <Account /> */}
          {/* <History /> */}
          <Coupons />
      </Flex>
    </PageWrapper>
  );
}
