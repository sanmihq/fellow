"use client";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

type Menu = {
  name: string;
  path: string;
  color: any;
  variant: any;
};

export default function RootHeader() {
  const pathname = usePathname();
  const menu: Menu[] = [
    {
      name: "Create account",
      path: "/creator/setup",
      color: "secondary",
      variant: "solid",
    },
    {
      name: "Login",
      path: "/creator/dashborad/explore",
      color: "secondary",
      variant: "bordered",
    },
  ];
  return (
    pathname === "/" && (
      <header>
        <nav className="flex items-center justify-between px-10 py-4">
          <span>Fellow</span>
          <div className="flex items-center gap-4">
            {menu.map((item, index) => (
              <Button
                key={index}
                as={Link}
                href={item.path}
                size="sm"
                color={item.color}
                variant={item.variant}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </nav>
      </header>
    )
  );
}
