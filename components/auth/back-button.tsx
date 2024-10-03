import Link from "next/link";
import { Button } from "@/components/ui/button";
const BackButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <Button asChild className="w-full" variant={"link"}>
      <Link aria-label={label} href={href}>
        {label}
      </Link>
    </Button>
  );
};

export default BackButton;
