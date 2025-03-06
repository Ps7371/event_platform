import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="wrapper mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/assets/images/logo.svg" 
            width={128} 
            height={38}
            alt="Evently logo" 
            className="h-10 w-auto"
          />
        </Link> 


        <SignedIn>
  <nav className="hidden md:flex w-full max-w-xs items-center justify-between">
    <NavItems />
  </nav>
</SignedIn>


        <div className="flex w-32 justify-end gap-3">
        <SignedIn>
            <UserButton afterSignOutUrl="/" />
           <MobileNav/>
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;