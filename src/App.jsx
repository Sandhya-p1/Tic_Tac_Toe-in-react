import { Button } from "@/components/ui/button";
// import { useState } from "react";
import ButtonsCollection from "./buttons-components/ButtonsCollection";

function App() {
  // const [buttonVal, setButtonVal] = useState("");

  // const handleButtonValue = () => {
  //   setButtonVal(buttonVal === "0" ? "X" : "0");
  // };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="w-full h-fit">
        <h1 className="font-semibold text-4xl py-5 text-white uppercase bg-black flex justify-center ">
          Tic Tac Toe Game
        </h1>
      </div>
      {/* <div className="grid grid-cols-3 items-center justify-center mx-auto sm:w-[40%] md:w-[20%] py-40  text-lg ">
        <Button
          variant="outline"
          size="lg"
          className="rounded-none py-8"
          onClick={() => {
            handleButtonValue();
          }}
          disabled={buttonVal}
        >
          {buttonVal}
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          2
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          3
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          4
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          5
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          6
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          7
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          8
        </Button>
        <Button variant="outline" size="lg" className="rounded-none py-8">
          9
        </Button>
      </div> */}
      <ButtonsCollection />
      <div className="w-[20%] flex items-center justify-center mx-auto">
        <Button>Play Again</Button>
      </div>
    </div>
  );
}

export default App;
