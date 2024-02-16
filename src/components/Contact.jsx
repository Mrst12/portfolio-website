import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-200 pb-6 pt-24"
    >
      <div className="flex items-center justify-center">
        <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mt-10 mb-6">
          Contact Me
        </h1>
        {/*<p>Temporarily unavailable</p>*/}
      </div>

      <div className="flex rounded-lg p-12 md:px-0 border border-cyan-600 justify-center items-center m-6 bg-cyan-100 ">
        <form
          action="https://getform.io/f/aac39631-dfd3-4fb8-9edb-d45140c25379"
          method="POST"
          className="flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 border rounded-md border-cyan-600 text-black focus:outline-none placeholder:text-black mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 border rounded-md border-cyan-600 text-black focus:outline-none placeholder:text-black mb-4"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            className="p-2 border rounded-md border-cyan-600 text-black focus:outline-none placeholder:text-black"
            required
          ></textarea>

          <button className="p-4 border border-cyan-600 rounded-md bg-navigation m-4 hover:bg-hoveron">
            Lets Talk!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
