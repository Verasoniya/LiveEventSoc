import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <nav className="sticky top-0 w-full px-2 py-2.5 bg-white flex justify-between shadow-lg">
      <Link id="to-homepage" className="text-black font-bold" href="/">
        Event.
      </Link>
      <div className="flex gap-4">
        <Link id="to-login" className="text-black font-bold" href="login">
          Login
        </Link>
        <Link id="to-register" className="text-black font-bold" href="register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Header;
