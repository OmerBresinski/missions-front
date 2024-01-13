import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <NavigationMenu className="flex max-w-full justify-between">
      <NavigationMenuList>
        <Link to={"/"}>
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuItem>
        </Link>
        <Link to="/about">
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuItem>
        </Link>
        <Link to="/missions">
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
            Missions
          </NavigationMenuItem>
        </Link>
      </NavigationMenuList>
      <NavigationMenuList className="flex gap-2">
        <Link to="/auth">
          <Button variant="outline">Log in</Button>
        </Link>
        <Link to="/auth">
          <Button>Register</Button>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
