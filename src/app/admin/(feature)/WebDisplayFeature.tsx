"use client";
import { FeaturePage } from "@/types";
import { Trash2Icon } from "lucide-react";
import Featured from "./Featured";

interface WebDisplayProps {
  featurePages: FeaturePage[];
  renderDisplay: FeaturePage | undefined;
  setRenderDisplay: React.Dispatch<
    React.SetStateAction<FeaturePage | undefined>
  >;
}

const WebDisplayFeature = ({
  featurePages,
  renderDisplay,
  setRenderDisplay,
}: WebDisplayProps) => {
  return (
    <>
      <div className="flex gap-6">
        <div className="w-1/2">
          <Featured renderDisplay={renderDisplay} />
        </div>
        <div className="w-1/2 p-2 bg h-120 overflow-y-auto rounded-lg">
          {["Active", "Inactive"].map((status) => (
            <div className="pb-8" key={status}>
              <div className="font-thin">{status}</div>

              {featurePages
                .filter((fe) => fe.isActive === (status === "Active"))
                .map((fe) => (
                  <div
                    key={fe.id}
                    className="flex justify-between items-center"
                  >
                    <div
                      className={`pt-2 pb-2 font-light px-2 truncate w-11/12 last:border-b-0 cursor-pointer hover:rounded-lg hover:bg-gray-300  ${
                        renderDisplay?.id === fe.id
                          ? "bg-gray-200 dark:bg-gray-700 rounded-lg"
                          : ""
                      }`}
                      onClick={() => setRenderDisplay(fe)}
                    >
                      {fe.mainTitle}
                    </div>
                    <Trash2Icon className="w-1/12 h-6 hover:transition-all hover:scale-115" />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="h-16" />
    </>
  );
};
export default WebDisplayFeature;
