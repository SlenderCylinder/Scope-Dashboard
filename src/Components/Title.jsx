import React from "react";

export default function Title({ name, darkMode }) {
  return (
    <section className="p-2">
      <h1 className={`text-black sm:text-4xl text-2xl font-normal leading-[46.80px] mt-5 ${darkMode ? "text-white" : ""}`}>
        Hey {name}!
      </h1>
    </section>
  );
}
