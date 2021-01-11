import { XCircle } from "react-feather";

export default function ConsCard({ title, cons }) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900 rounded p-6 my-6 w-full">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <XCircle className="h-4 w-4 text-red-500" />
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
