import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

function SideMenu() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon className="text-alkahfi-primary" />
        </SheetTrigger>
        <SheetContent className="[&>.closeBtn]:hidden text-alkahfi-primary font-bold">
          <SheetHeader>
            <SheetTitle className="text-alkahfi-primary font-extrabold">Main Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-10">
            <ul className="flex flex-col gap-5">
              <li>Home</li>
              <li>Blog</li>
              <li>Kegiatan</li>
              <li>Tentang Kita</li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default SideMenu;
