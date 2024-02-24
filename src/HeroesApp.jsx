import { Navbar } from "./ui/components/Navbar"
import { Outlet } from "react-router-dom";
import { AuthProvider } from './auth';

export const HeroesApp = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}
