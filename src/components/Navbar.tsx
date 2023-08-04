import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

function Navbar() {
    return (
        <div className="fixed w-full z-50 flex justify-between items py-2 px-4 border-b border-primary/10 bg-secondary">
            <div>
                <Menu/>
            </div>
            <UserButton afterSignOutUrl="/"/>
        </div>
    );
}

export default Navbar;