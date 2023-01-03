import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import PageWrapper from "basicComponents/PageWrapper";
import Account from "components/account";
import History from "components/history";
import Coupons from "components/coupons";
import { useRouter } from "next/router";
import TabMenu from "components/TabMenu";

export default function TagPage() {
  const router = useRouter();
  const pathUrl = router.asPath;
  const [keyActiveTab, setKeyActiveTab] = useState<string>("");

  useEffect(() => {
    setKeyActiveTab(pathUrl);
  }, [pathUrl]);
  // const { pid } = router.query;
  // console.log("vwvw",router.asPath);
  let page;
  switch (pathUrl) {
    case "/customer/account":
      page = <Account />;
      break;
    case "/order/history":
      page = <History />;
      break;
    case "/customer/coupons":
      page = <Coupons />;
      break;
    case "history":
      page = <Account />;
      break;
    case "history":
      page = <Account />;
      break;
    case "history":
      page = <Account />;
      break;
    default:
      break;
  }
  return (
    <PageWrapper>
      <Flex gap={4} direction={["column", "column", "column", "row"]}>
        <TabMenu
          keyActiveTab={keyActiveTab}
          setKeyActiveTab={setKeyActiveTab}
        />
        {page}
      </Flex>
    </PageWrapper>
  );
}
