import React, { HtmlHTMLAttributes, useState } from "react";
import { useRouter } from 'next/router'
import { Box, List, ListItem } from "@chakra-ui/react";
import MenuItem from "./item/MenuItem";
import { tabMenu } from "../constants";

export default function TabMenu(props: any) {
  const {keyActiveTab, setKeyActiveTab} = props
  const router = useRouter()
  return (
    <Box width={["100%", "100%", "100%", "20%"]}>
      <List
        onClick={(event: any) => {
          const keyTab = event.target.getAttribute("url-attr");
          setKeyActiveTab(keyTab);
          router.push(keyTab)
        }}
      >
        {tabMenu.map((item, index) => (
          <MenuItem
            urlAttr={item?.url}
            key={index}
            active={item.url === keyActiveTab}
            title={item?.title}
          />
        ))}
      </List>
    </Box>
  );
}
