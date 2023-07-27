import Link from "next/link";
import { Icons } from "./icons";

type Props = {};

const MainNav = (props: Props) => {
  return (
    <div className="md:flex fixed hidden top-6 w-10/12 z-50 shadow-lg rounded-xl p-2 sm:px-4 md:px-6 lg:px-10 overflow-hidden bg-white justify-between">
      <Link href={"/"}>
        <Icons.logo height={50} width={170} />
      </Link>
      <nav className="flex items-center gap-10 text-sm font-medium">
        <Link href={"/features"}>Features</Link>
        <Link href={"/get-quote"}>Get quote</Link>
        <Link href={"/contact-us"}>Contact us</Link>
        <Link
          href={"/login"}
          className="font-bold bg-primary-light-violet hover:bg-pink-700 text-white text-sm px-6 py-1 rounded-full"
        >
          Log in
        </Link>
      </nav>
    </div>
  );
};

export default MainNav;
