import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import Link from "next/link";
import Logo from "./logo";

export default async function Nav() {
  const Session = await auth();
  console.log("Session");
  console.log(Session);
  return (
    <header className=" py-4 ">
      <nav className="flex items-center justify-between">
        <ul className="flex justify-between">
          <li>
            <Link href={"/"}>
              <Logo />
            </Link>
          </li>
          <li> {Session?.user?.name} </li>
        </ul>
        <UserButton expires={Session?.expires} user={Session?.user} />
      </nav>
    </header>
  );
}
