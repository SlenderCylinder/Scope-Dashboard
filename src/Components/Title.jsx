import React from "react";

export default function Title({ name }) {
  return (
    <section className="p-2">
      <h1 className="text-black sm:text-4xl text-2xl font-normal leading-[46.80px] mt-5">
        Hey {name} !
      </h1>
    </section>
  );
}
