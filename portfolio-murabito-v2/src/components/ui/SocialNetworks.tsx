import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type SocialObject = Record<string, string | ReactNode>;

interface SocialNetworks {
  hidden?: Array<'instagram' | 'facebook' | 'linkedin'>;
}

const SocialNetworks = ({hidden}: SocialNetworks) => {
  const socials: Array<SocialObject> = [
    {
      type: 'instagram',
      name: '_antonio.jar',
      url: 'https://instagram.com/_antonio.jar',
      icon: <FontAwesomeIcon className="w-10" icon={faInstagram} />
    },
    {
      type: 'instagram',
      name: 'msworks.arw',
      url: 'https://instagram.com/msworks.arw',
      icon: <FontAwesomeIcon className="w-10" icon={faInstagram} />
    },
  ]

  return (
    <div className="flex flex-col not-lg:flex-row gap-4">
        { socials.map((social, index) =>
          <div key={index} className="text-primary glass p-2 shadow-md hover:shadow-primary hover-trans-long">
            <Link href={social.url as string} className="flex flex-row gap-3 items-center">{social.icon} <span className="not-lg:hidden">{social.name}</span></Link>
          </div>
        )}
    </div>
  );
}

export default SocialNetworks;