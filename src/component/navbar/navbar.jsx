
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Icon from '../../assets/images/icon.jpg'
export function NavbarComponent() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
                <img src={Icon} className=" h-14 sm:h-9" alt="Flowbite React Logo" />


                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Live Chat</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
