"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
export default function Socials() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <Button
        variant={"outline"}
        className="w-full flex gap-2"
        onClick={() => signIn("google", { redirect: false, callbackUrl: "/" })}
      >
        <p> Login with google</p>

        <FcGoogle className="w-5 h-5" />
      </Button>
      <Button
        variant={"outline"}
        className="w-full flex gap-2"
        onClick={() => signIn("github", { redirect: false, callbackUrl: "/" })}
      >
        <p>Login with Github</p>
        <FaGithub className="w-5 h-5" />
      </Button>
    </div>
  );
}
