import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FeaturePage } from "@/types";

interface MobileDisplayFeatureProps {
  featurePages: FeaturePage[];
  renderDisplay: FeaturePage | undefined;
  setRenderDisplay: React.Dispatch<
    React.SetStateAction<FeaturePage | undefined>
  >;
}

const MobileDisplayFeature = ({
  featurePages,
  renderDisplay,
  setRenderDisplay,
}: MobileDisplayFeatureProps) => {
  const activePage = featurePages.filter((page) => page.isActive)[0];

  return (
    <>
      {featurePages.map((fe) => (
        <Collapsible
          defaultOpen={activePage ? activePage.id === fe.id : false}
          className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm"
          key={fe.id}
        >
          <CollapsibleTrigger className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                {fe.mainTitle}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {fe.subtitle}
              </p>
            </div>
            <svg
              className="w-4 h-4 ml-2 shrink-0 transition-transform group-data-[state=open]:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </CollapsibleTrigger>

          <CollapsibleContent className="px-3 pb-3 pt-1">
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-medium text-gray-600 dark:text-gray-400 shrink-0">
                  Title:
                </span>
                <span className="text-gray-800 dark:text-gray-200">
                  {fe.title}
                </span>
              </div>

              {fe.displayImageUrl && (
                <div className="mt-2">
                  <img
                    src={fe.displayImageUrl}
                    alt={fe.mainTitle}
                    className="w-full h-32 object-cover rounded-md"
                  />
                </div>
              )}

              <div className="flex items-center gap-2 pt-1">
                <span className="font-medium text-gray-600 dark:text-gray-400">
                  Status:
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    fe.isActive
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {fe.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </>
  );
};

export default MobileDisplayFeature;
