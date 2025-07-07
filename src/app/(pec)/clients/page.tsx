import { Navigation } from "@/components/layout/navigation";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="relative w-full bg-black">
        <Navigation />
      </div>
      <div className="px-4 md:px-14 py-12">
        <div>
          {/* Left Column - Text */}
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-4xl font-semibold md:font-semibold text-navy-800 mb-6">
              Working with forward-thinking organizations to create lasting
              impact through strategic engineering solutions
            </h1>

            <div className="flex gap-4">
              {["Private", "Government", "International"].map((value) => (
                <p key={value} className="border rounded px-4 py-2">
                  {value}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12 mt-8">
            <div className="col-span-2 flex flex-col gap-2">
              <div className="flex flex-col gap-2 mt-8">
                <h2 className="text-3xl font-bold">30+</h2>
                <p>Money saved</p>
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <h2 className="text-3xl font-bold">USD 30B</h2>
                <p>peoject money</p>
              </div>
            </div>
            <div className="relative col-span-10 h-[400px]">
              <Image
                src={
                  "https://res.cloudinary.com/teenkevo-cloud/image/upload/v1742877869/marten-bjork-6dW3xyQvcYE-unsplash_kxslgq.jpg"
                }
                alt={"hshs"}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Image */}
          {/* <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Page;
