import React from "react";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-10 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-14">
        What People Are Saying...
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-center">
                <img
                  className="w-12 h-12 rounded-full mr-6 border border-neutral-500"
                  src={testimonial.image}
                  alt="Images of persons, who review this and our others Apps"
                />
                <div>{testimonial.user}</div>
                <span className="text-sm font-normal italic text-neutral-600 ml-4">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
