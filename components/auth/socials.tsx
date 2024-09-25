"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Socials() {
  return (
    <div>
      <Button
        className="mx-4"
        onClick={() => signIn("google", { redirect: false, callbackUrl: "/" })}
      >
        Login with google
      </Button>
      <Button
        onClick={() => signIn("github", { redirect: false, callbackUrl: "/" })}
      >
        Login with Github
      </Button>
    </div>
  );
}
