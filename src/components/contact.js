import { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    console.log(values);
    //Send or Mail the data received.
  };
  return (
    <form className="w-full max-w-xl mx-auto">
      <div className="flex flex-wrap mx-3 mb-6">
        <div className="w-full mx-2 md:mx-0 md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
              error ? "border-red-500" : "border-gray-200"
            } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            id="grid-first-name"
            name="fname"
            type="text"
            placeholder="John"
            onChange={handleChange("fname")}
          />
          {error && (
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3 mx-2 md:mx-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            name="lname"
            type="text"
            placeholder="Doe"
            onChange={handleChange("lname")}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-6">
        <div className="w-full px-3 mx-2 md:mx-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            onChange={handleChange("email")}
          />
          <p className="text-gray-600 text-xs italic">
            Some tips - as long as needed
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mx-3 mb-6">
        <div className="w-full px-3 mx-2 md:mx-0">
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Message
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            name="message"
            onChange={handleChange("message")}
          ></textarea>
          <p className="text-gray-600 text-xs italic">
            Re-size can be disabled by set by resize-none / resize-y / resize-x
            / resize
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center mx-3 pb-8">
        <div className="md:w-1/3 mx-2 px-3 md:mx-0">
          <button
            className="shadow bg-blueText bg-opacity-[0.8] hover:bg-opacity-[0.6] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={clickSubmit}
          >
            Send
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
}
