import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={28}
            height={28}
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center gap-6 bg-white w-full py-6 px-4 shadow-lg rounded-t-lg">
          {/* ✅ Accessibility Fix */}
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>

          {/* Logo */}
          <div className="flex justify-center">
            <Image 
              src="/assets/images/logo.svg" 
              alt="logo" 
              width={140} 
              height={42} 
              className="transition-opacity duration-300 hover:opacity-80"
            />
          </div>

          <Separator className="border border-gray-300 w-full" />

          {/* Navigation Items - Fully Vertical & Centered */}
          <div className="w-full">
            <NavItems />
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
