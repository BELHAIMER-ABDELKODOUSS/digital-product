import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import Link from "next/link";
import Logo from "./logo";

export default async function Nav() {
  const Session = await auth();

  return (
    <header className=" py-4 ">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href={"/"}>
              {" "}
              <Logo />{" "}
            </Link>{" "}
          </li>
          <li> {Session?.user?.name} </li>
        </ul>
        <UserButton expires={Session?.expires} user={Session?.user} />
      </nav>
    </header>
  );
}
