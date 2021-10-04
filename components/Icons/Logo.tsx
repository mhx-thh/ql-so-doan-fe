import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="cursor-pointer">Logo</div>
    </Link>
  );
}
