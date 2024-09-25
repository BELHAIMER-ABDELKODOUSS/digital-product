import Link from "next/link";

const BackButton = ({ href, label }: { href: string; label: string }) => {
  return (
    <button>
      <Link aria-label={label} href={href}>
        {label}
      </Link>
    </button>
  );
};

export default BackButton;
