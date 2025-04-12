import React from "react";
import { RandomizedTextEffect } from "@/utils/text-randomized";

function index() {
  return (
    <>
      <div className="py-4">
        <h1 className=" text-center font-genos font-bold text-[24px] leading-[100%] text-white relative capitalize  h-[120px] md:h-auto ">
          <RandomizedTextEffect text="making your business smarter, faster, and more efficient." />
        </h1>
      </div>
    </>
  );
}

export default index;
