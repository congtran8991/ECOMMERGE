import {
  Input,
  Button
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

export default function CenterHeader() {
  return (
    <div style={{maxWidth: "70rem"}} className="header-center w-full flex  ml-5">
      <Input
        border={"1px"}
        borderColor="var(--clr-white)"
        className="search-input mr-3"
        placeholder="Tìm sản phẩm, danh mục, thương hiệu mong muốn"
        size="md"
        variant={""}
      />
      <Button
        className="text-white"
        color="var(--clr-white)"
        border={"1px"}
        borderColor="var(--clr-white)"
        loadingText="Loading"
        variant=""
        spinnerPlacement="start"
      >
        <FontAwesomeIcon icon={faSearch as IconProp} /> Tìm kiếm
      </Button>
    </div>
  );
}
