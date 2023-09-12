import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Email from '../assets/email.png'
import Phone from '../assets/phone.png'
import Address from "../assets/address.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("user_name");
    const email = formData.get("user_subject");
    const phone = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !phone || !message) {
      Swal.fire({
        text: "Please fill out all fields.",
        icon: "error",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_ojurt7k",
        "template_vux32jb",
        form.current,
        "gH9xcFG-wkasuh4IB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Messege Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const Alert = () => {
    Swal.fire({
      text: "Messege Sent Successfully!",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload("/");
      }
    });
  };

  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center py-20">
        <form className="w-10/12 md:w-5/12 bg-stone-800 border border-amber-500 py-14 rounded-lg">
          <div className="space-y-4">
            <div className="flex flex-row justify-center ml-10">
              <div className="mt-1">
                <img src={Email} alt="" className="h-10 w-10" />
              </div>
              <div className="ml-2">
                <p className="text-white text-lg font-bold">Email:</p>
                <p className="text-white text-md sm:text-md">
                  earljay0606@gmail.com
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-center mr-4">
              <div className="mt-1">
                <img src={Phone} alt="" className="h-10 w-10" />
              </div>
              <div className="ml-2">
                <p className="text-white text-lg font-bold">Call:</p>
                <p className="text-white text-md">+63 9092611496</p>
              </div>
            </div>

            <div className="flex flex-row justify-center pr-10">
              <div className="mt-1">
                <img src={Address} alt="" className="h-10 w-10" />
              </div>
              <div className="ml-2">
                <p className="text-white text-lg font-bold">Location:</p>
                <p className="text-white text-md">Cainta, Rizal</p>
              </div>
            </div>

            <div className="flex justify-center items-center p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.454898295602!2d121.11782477618425!3d14.573135849579653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c79e60b5e0cd%3A0xde3f5b8dbb53c6b5!2sRobles%20Subdivision%2C%2021%20San%20Fabian%2C%20Cainta%2C%201900%20Rizal!5e0!3m2!1sen!2sph!4v1683641276691!5m2!1sen!2sph"
                className="w-10/12 md:w-3/3 h-30 md:h-40"
              ></iframe>
            </div>
          </div>
        </form>

        <div className="w-screen md:w-9/12 rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            action="form"
            className="space-y-4 bg-stone-800 border border-amber-500 p-10 rounded-lg lg:w-full"
            style={{ height: "490px" }}
          >
            <div>
              <label className="sr-only" for="name">
                Name
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Name"
                name="user_name"
                type="text"
                id="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" for="email">
                  Subject
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Subject"
                  type="text"
                  name="user_subject"
                  id="subject"
                />
              </div>

              <div>
                <label className="sr-only" for="phone">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border bor der-gray-200 p-3 text-sm"
                  placeholder="Email"
                  type="text"
                  name="user_email"
                  id="email"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" for="message">
                Message
              </label>

              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                placeholder="Message"
                name="message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                onClick={Alert}
                a
                href="home"
                type="submit"
                value="Send"
                className="text-white border-2 bg-amber-500 hover:border-amber-500 px-4 py-3 my-4 lg:my-8 mx-auto flex items-center"
              >
                Send Messege
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

