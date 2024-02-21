import { Navbar } from "./ui/components/Navbar"
import { Outlet } from "react-router-dom";

export const HeroesApp = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}
