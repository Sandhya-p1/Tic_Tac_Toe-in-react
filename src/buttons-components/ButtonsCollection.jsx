import React from "react";
import { Button } from "@/components/ui/button";

export default function ButtonsCollection() {
  return (
    <div className="grid grid-cols-3 items-center justify-center mx-auto sm:w-[40%] md:w-[20%] py-40  text-lg ">
      <Button
        variant="outline"
        size="lg"
        className="rounded-none py-8"
      ></Button>
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
    </div>
  );
}
