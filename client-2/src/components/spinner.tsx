import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <Loader2 className=" animate-spin size-10" />
    </div>
  );
};

export default Spinner;
