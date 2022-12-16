
import LeftHeader from "../component/header/leftHeader";
import CenterHeader from "../component/header/centerHeader";
import RightHeader from "../component/header/rightHeader";

export default function Home() {
  return (
    <div className="header bg-dashboard">
        <div className="custom-container mx-auto header-wrapper h-24 flex items-center">
            <LeftHeader/>
            <CenterHeader/>
            <RightHeader/>
        </div>
    </div>
  );
}
