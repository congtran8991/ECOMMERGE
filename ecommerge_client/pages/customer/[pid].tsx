import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import PageWrapper from "basicComponents/PageWrapper";
import Account from "components/account";
import History from "components/history";
import Coupons from "components/coupons";
import { useRouter } from "next/router";
import TabMenu from "components/TabMenu";
import { APP_PATHS } from "../../constants"

export default function TagPage() {
  const router = useRouter();
  const pathUrl = router.asPath;
  const [keyActiveTab, setKeyActiveTab] = useState<string>("");
  const { PROFILE, ORDER_HISTORY, COUPONS} = APP_PATHS

  useEffect(() => {
    setKeyActiveTab(pathUrl);
  }, [pathUrl]);

  let page;
  switch (pathUrl) {
    case PROFILE:
      page = <Account />;
      break;
    case ORDER_HISTORY:
      page = <History />;
      break;
    case COUPONS:
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
