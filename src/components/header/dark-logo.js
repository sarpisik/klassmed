import Link from "next/link";
import Image from "next/image";

function DarkLogo() {
  return (
    <Link href="/">
      <a className="inline-block align-middle leading-[1]">
        <Image
          src="/images/logo/logo-2.png"
          alt="Logo"
          width={139}
          height={50}
        />
      </a>
    </Link>
  );
}

export default DarkLogo;
