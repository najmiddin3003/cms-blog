import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { List } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Mobile() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <List />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Link href={"/"}>
              <h1 className="font-creteRound text-4xl">Sammi</h1>
            </Link>
            <Separator className="my-2" />
          </SheetTitle>
        </SheetHeader>
        <div className="gap-2 flex flex-col px-4 ">
          {navLinks.map((nav, index) => (
            <Link
              className={cn(
                `hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors`,
                pathname === nav.route && `text-blue-400 bg-blue-400/20`
              )}
              key={index}
              href={nav.route}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
