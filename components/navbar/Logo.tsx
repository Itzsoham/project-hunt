import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="md:hidden">
        <Image
          src="/logo.png"
          className="p-1"
          width={50}
          height={50}
          alt="Project Hunt logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
