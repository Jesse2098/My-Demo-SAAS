import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import Sidebar from "./Sidebar";

function MobileSidebar() {
    return ( 
        <Sheet> 
            <SheetTrigger className="sm:hidden pr-4">
                <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
                <Sidebar/>
            </SheetContent>
        </Sheet>
     );
}


export default MobileSidebar;