import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const inputs = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    msg: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    let data = {
      name,
      email,
      msg,
    };

    if (name === "") {
      setErrors((prevState) => ({ ...prevState, name: true }));
      return;
    }
    if (email === "") {
      setErrors((prevState) => ({ ...prevState, email: true }));
      return;
    }
    if (msg === "") {
      setErrors((prevState) => ({ ...prevState, msg: true }));
      return;
    }

    if (name !== "") {
      setErrors((prevState) => ({ ...prevState, name: false }));
    }
    if (email !== "") {
      setErrors((prevState) => ({ ...prevState, email: false }));
    }
    if (msg !== "") {
      setErrors((prevState) => ({ ...prevState, msg: false }));
    }
    if (
      errors.name === false ||
      errors.email === false ||
      errors.msg === false
    ) {
      e.preventDefault();
      console.log("Sending");

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    }
  };

  return (
    <motion.section
      exit={{ opacity: 0 }}
      className="relative text-gray-700 body-font"
    >
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
        className="container px-5 py-24 mx-auto"
      >
        <motion.div
          variants={title}
          className="flex flex-col w-full mb-12 text-center"
        >
          <h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl title-font font-zygoregular">
            CONTACT ME
          </h1>
          <p className="mx-auto text-white leading-relaxed lg:w-2/3">
            Send a message and I'll be in touch within 2-3 business days.
          </p>
        </motion.div>
        <motion.div variants={inputs} className="mx-auto lg:w-1/2 md:w-2/3">
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={
                  errors.name
                    ? "w-full px-4 py-2 text-base bg-gray-100 border border-red-800 rounded focus:outline-none focus:border-red-500"
                    : "w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500"
                }
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="w-1/2 p-2">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={
                  errors.email
                    ? "w-full px-4 py-2 text-base bg-gray-100 border border-red-800 rounded focus:outline-none focus:border-red-500"
                    : "w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500"
                }
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="w-full p-2">
              <textarea
                className={
                  errors.email
                    ? "block w-full h-48 px-4 py-2 text-base bg-gray-100 border border-red-800 rounded resize-none focus:outline-none focus:border-red-500"
                    : "block w-full h-48 px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded resize-none focus:outline-none focus:border-red-500"
                }
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                placeholder="Message"
              ></textarea>
            </div>
            <div className="w-full p-2">
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                disabled={submitted}
                className="flex px-8 py-2 mx-auto text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
              >
                {submitted ? "Thanks!" : "Send"}
              </button>
            </div>
            <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
              <a className="text-red-500">logan@email.com</a>
              <p className="my-5 leading-normal">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
