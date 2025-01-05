import { AlignJustify} from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
 
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavigationAction = () => {
  return (
    <div>
      <div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="flex flex-col space-y-4 items-start  w-full mt-4 text-black">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/solution">Our Solutions</Link>
                    <Link to="/blogs">Our Solutions</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Button variant="destructive">Free Consultation</Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex md:space-x-1">
         
        <Button variant="ghost">Fb</Button>
        <Button variant="ghost">In</Button>
        <Button variant="destructive">Free Consultation</Button>
        </div>
      </div>
    </div>
  );
};

export default NavigationAction;
