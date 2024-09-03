import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { useStore } from "@/zustand/useStore";

const Page2 = () => {
  const navigate = useNavigate();
  const { bears, increasePopulation, removeAllBears } = useStore();

  return (
    <div className="flex p-20 flex-col gap-4">
      test component {bears}
      <Button onClick={increasePopulation} type="primary">
        +
      </Button>
      <Button onClick={removeAllBears} type="dashed">
        remove All Bears
      </Button>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        home
      </Button>
    </div>
  );
};

export default Page2;
