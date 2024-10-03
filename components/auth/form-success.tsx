import { CheckCircle } from "lucide-react";

export const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) {
    console.log("there's no message");
    return null;
  }
  console.log(message);
  return (
    <div className="bg-teal-400 flex items-center gap-2 text-secondary-foreground p-3 rounded-md">
      <CheckCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
