import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCartFlatbed,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function RightHeader() {
  return (
    <div className="header-right flex min-width-250 ">
      <div className="header-account ml-5 flex w-full">
        <FontAwesomeIcon
          className="text-white"
          size="lg"
          icon={faUser as IconProp}
        />
        <div className="text-white ml-1">Công trần</div>
      </div>
      <div className="flex w-full">
        <FontAwesomeIcon
          className="text-white"
          size="lg"
          icon={faCartFlatbed as IconProp}
        />
        <div className="text-white ml-1">Giỏ hàng</div>
      </div>
    </div>
  );
}
