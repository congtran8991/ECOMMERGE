
import LeftHeader from "./header/LeftHeader";
import CenterHeader from "./header/CenterHeader";
import RightHeader from "./header/RightHeader";

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
