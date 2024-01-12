import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    <NavigationMenu>
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
      </NavigationMenuList>
    </NavigationMenu>
  );
};
