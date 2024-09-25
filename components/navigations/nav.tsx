import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
export default async function Nav() {
  const Session = await auth();

  return (
    <header className="bg-slate-400 py-4 ">
      <nav>
        <ul className="flex justify-between w-6/12 mx-auto from-teal-100">
          <li>Logo </li>
          <li> {Session?.user?.name} </li>
        </ul>
        <UserButton expires={Session?.expires} user={Session?.user} />
      </nav>
    </header>
  );
}
