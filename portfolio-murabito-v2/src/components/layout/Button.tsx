import Link from "next/link";
import { ReactNode } from "react";

interface Button {
  type?: string;
  children: React.ReactNode;
  textSize?: string;
  url?: string;
}

const Button = ({ type = 'link', children, textSize = 'lg', url = '#' }: Button) => {
  const size = `text-${textSize}`;
  const ButtonType: Record<string, ReactNode> = {
    'link': <Link className={`${size} button-primary`}
                  href={url}>{children}</Link>,
  }

  return (
    <>
      { ButtonType[type] }
    </>
  );
}

export default Button;