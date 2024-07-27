import React, { useState, useRef } from "react";
//import { SMTPClient } from "emailjs";
import ContactCard from "../ContactCard/ContactCard";
import skypeIcon from "../../Assets/SocialMediaIcons/skypeIcon.png";
import whatsappIcon from "../../Assets/SocialMediaIcons/whatsappIcon.png";
import messengerIcon from "../../Assets/SocialMediaIcons/messengerIcon.png";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [myForm, setMyForm] = useState({});
  const form = useRef();
  const contactOptions = [
    {
      name: "Messenger",
      icon: messengerIcon,
      contact: "llukawczyk",
      link: "https://m.me/llukawczyk",
    },
    {
      name: "WhatsApp",
      icon: whatsappIcon,
      contact: "+4915734548082",
      link: "https://wa.me/4915734548082",
    },
    {
      name: "Skype",
      icon: skypeIcon,
      contact: "kawec91",
      link: "https://join.skype.com/invite/CYRyfHwUmdHp",
    },
  ];
  const inputStyle = "border border-1-grey-200 p-2 rounded w-full";

  const handleChanges = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
    console.log(myForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`========>`, myForm);

    emailjs
      .sendForm(
        "service_ezohnzp",
        "template_rpxjabm",
        form.current,
        "DwM3X5hj6levTfqVB"
      )
      .then(
        (result) => {
          console.log(result.text);
          const inputs = document.getElementsByTagName("input");
          for (let i of inputs) i.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      className="min-h-full max-w-full flex flex-col items-center justify-end"
      id="contact"
    >
      <h3 className="text-4xl uppercase font-bold pt-16 pb-2">Contact</h3>
      <div className="flex flex-wrap justify-center items-center gap-4 lg:grid lg:grid-cols-2 lg:w-3/4 xl:w-1/2 bg-white p-8 rounded-t-lg">
        <div className="flex flex-col w-full md:flex-row lg:col-span-2 gap-2 pb-2 lg:pb-4">
          {contactOptions.map((item) => (
            <ContactCard
              name={item.name}
              icon={item.icon}
              contact={item.contact}
              link={item.link}
              key={item.name}
            />
          ))}
        </div>
        <form
          className="flex flex-col gap-2 items-center md:w-full lg:col-span-2"
          ref={form}
        >
          <input
            placeholder="Vorname"
            className={inputStyle}
            name="vorname"
            onChange={(e) => handleChanges(e)}
          />
          <input
            placeholder="Nachname"
            className={inputStyle}
            name="user_name"
            onChange={(e) => handleChanges(e)}
          />
          <input
            placeholder="E-mail"
            className={inputStyle}
            name="user_email"
            onChange={(e) => handleChanges(e)}
          />
          <input
            placeholder="Thema (optional)"
            className={inputStyle}
            name="thema"
            onChange={(e) => handleChanges(e)}
          />
          <div className="flex items-center sm:justify-between gap-2 w-full">
            <select
              className="p-2 border border-1-gray-200 w-full"
              onChange={(e) => handleChanges(e)}
              name={"defaultThema"}
            >
              <option value={"kein-wahl"}>Themen Liste</option>
              <option value={"arbeit-angebote"}>Arbeit angebote</option>
              <option value={"seite-erstellen"}>Seite erstellen</option>
              <option value={"mobile-app"}>Mobile App</option>
              <option value={"andere"}>Andere</option>
            </select>
            <input
              placeholder="Budget € (optional)"
              className={inputStyle}
              type="number"
              name="budget"
              onChange={(e) => handleChanges(e)}
            />
          </div>
          <textarea
            className="p-2 border border-1-gray-200 rounded resize-none w-full"
            placeholder="Nachricht"
            rows={9}
            name="message"
          ></textarea>
          <button
            onClick={(e) => handleSubmit(e)}
            className="uppercase bg-red-500 rounded-full px-8 py-2 font-bold text-white max-w-96"
          >
            Senden
          </button>
        </form>
      </div>
    </section>
  );
}
