import React from "react";

export default function FooterSocialMediaCard({ link, icon, name }) {
  return (
    <div>
      <a href={link} target="blank">
        <img src={icon} alt={name} className="w-8 h-8" />
      </a>
    </div>
  );
}
