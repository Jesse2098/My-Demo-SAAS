import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";

function Navbar() {
    return (
        <div className="fixed w-full z-50 flex justify-between items py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex justify-between">
                <MobileSidebar/>
                <Link href="/">
                    <h1 className="hidden sm:block">
                        SaaS
                    </h1>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    );
}

export default Navbar;