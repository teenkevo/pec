"use client";
import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center space-x-2 items-center h-screen">
      <MoonLoader color="#128191" />
      <p className=" text-lg">PEC</p>
    </div>
  );
}
