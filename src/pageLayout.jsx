import { Outlet } from "react-router"
import { NavbarComponent } from "./component/navbar/navbar"


export const MainLayout = () => {
    return (
        <>
            <NavbarComponent />
            <Outlet />
        </>
    )
}