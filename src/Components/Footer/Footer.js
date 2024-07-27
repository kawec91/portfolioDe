import React from "react";
import FooterSocialMediaCard from "../FooterSocialMediaCard/FooterSocialMediaCard";
import skypeIcon from "../../Assets/SocialMediaIcons/skypeIcon.png";
import whatsappIcon from "../../Assets/SocialMediaIcons/whatsappIcon.png";
import messengerIcon from "../../Assets/SocialMediaIcons/messengerIcon.png";
import gitIcon from "../../Assets/SocialMediaIcons/githubIcon.png";

export default function Footer() {
  const socialMedia = [
    {
      id: 201,
      name: "GitHub",
      icon: gitIcon,
      contact: "lukasz.lukawczyk",
      link: "https://github.com/kawec91",
    },
    {
      id: 202,
      name: "Messenger",
      icon: messengerIcon,
      contact: "lukasz.lukawczyk",
      link: "https://m.me/llukawczyk",
    },
    {
      id: 203,
      name: "WhatsApp",
      icon: whatsappIcon,
      contact: "+4915734548082",
      link: "https://wa.me/4915734548082",
    },
    {
      id: 204,
      name: "Skype",
      icon: skypeIcon,
      contact: "kawec91",
      link: "https://join.skype.com/invite/CYRyfHwUmdHp",
    },
  ];
  return (
    <>
      <footer className="w-full flex flex-col p-4 items-center gap-2">
        <p>&copy;2024 Lukasz Lukawczyk</p>
        <div className="flex items-center justify-center gap-4">
          {socialMedia.map((item) => (
            <FooterSocialMediaCard
              key={item.id}
              link={item.link}
              icon={item.icon}
              name={item.name}
            />
          ))}
        </div>
      </footer>
    </>
  );
}
