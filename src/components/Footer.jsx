import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <div className="mt-14 border-t py-10 border-neutral-700 flex">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-md font-semibold mb-4 uppercase">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource, idxx) => (
              <li key={idxx}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={resource.href}
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 uppercase">Platforms</h3>
          <ul className="space-y-2">
            {platformLinks.map((platform, idxx) => (
              <li key={idxx}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={platform.href}
                >
                  {platform.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 uppercase">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((community, idxx) => (
              <li key={idxx}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={community.href}
                >
                  {community.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
