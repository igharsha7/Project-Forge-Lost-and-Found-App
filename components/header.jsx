import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from './user-menu';

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
        <Image
  src={"/logo.png"}
  alt="Finder Logo"
  width={300}  // Increase width
  height={84}  // Increase height
  className="h-20 w-auto object-contain"  // Increase Tailwind height class
/>
 
        </Link>
      <div className="flex items-center gap-4">
      
      <Link href='/project/create'>
      <Button variant="destructive">
        <PenBox size={18 } />
        <span>Create Project</span>
      </Button>
      </Link>
      
         <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl="/onboarding">
        <Button variant="outline">Login</Button>
        </SignInButton> {/* ✅ Corrected self-closing tag */}
      </SignedOut>

      <SignedIn>
        <UserMenu />
      </SignedIn>
      </div>
      </nav>
    </header>
  );
};

export default Header;
