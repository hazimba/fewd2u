import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useMobileDetectClient } from "@/lib/hooks/useMobileDetect";
import { LogOut } from "lucide-react";

const TopNavigation = () => {
  const router = useRouter();
  const isMobile = useMobileDetectClient();
  console.log("isMobile", isMobile);

  return (
    <div className="flex border-1 rounded-lg justify-between items-center px-4 h-12">
      <div className="flex gap-4 justify-center items-center">
        <div>
          <b>FEWD2U {`${isMobile ? "" : " | Admin Dashboard"}`}</b>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <ModeToggle toggle />
        <Button
          variant="red"
          onClick={() => {
            router.push("../login");
          }}
          className="border-none"
        >
          {isMobile ? <LogOut className="h-4 w-4" /> : "Logout"}
        </Button>
      </div>
    </div>
  );
};
export default TopNavigation;
