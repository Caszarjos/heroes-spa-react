import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

    const links = ["Marvel", "DC", "Search", "Hero"];
    const divRef = useRef(null);
    const iconRef = useRef(null);
    const navigate = useNavigate();

    const onLogout = () => {
        // reemplaza la ruta a la cual regresa
        navigate('/login', {
            replace: true
        });
    }
    const onToggleMenu = () => {
        const icon = iconRef.current;
        const classGroup = divRef.current.classList;
        
        icon.name = icon.name === 'menu' ? 'close' : 'menu';
        classGroup.toggle('top-[50px]');
        classGroup.toggle('top-[-100%]');
    }

    return (
        <>
            <header className="bg-gray-400 h-20 flex justify-center">
                <nav className="flex justify-between items-center md:w-[80%] w-[95%] mx-auto">
                    <div className=" flex items-center gap-[2vw]">
                        <p className="text-white font-bold text-3xl">Heroes App</p>
                        <div ref={divRef} className="bg-gray-400 duration-500 md:static absolute md:min-h-fit min-h-[40vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                            <ul className="flex md:flex-row flex-col md:items-center md:gap-5 gap-y-8">
                                {
                                    links.map((link) => (
                                        <li key={link}>
                                            <NavLink
                                                onClick={onToggleMenu}
                                                className={({ isActive }) => `font-bold hover:text-gray-100 ${isActive ? 'text-gray-100' : 'text-gray-600'}`}
                                                to={`/${link.toLowerCase()}`}>
                                                {link}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center gap-[2vw]">
                        <span className="font-bold text-blue-800">
                            Jose
                        </span>
                        <button
                            onClick={onLogout}
                            className="font-bold hover:text-gray-600 text-gray-100">
                            Logout
                        </button>
                        <ion-icon
                            ref={iconRef}
                            onClick={onToggleMenu}
                            name="menu"
                            class="text-3xl cursor-pointer md:hidden" />
                    </div>
                </nav>
            </header>
        </>
    )
}
