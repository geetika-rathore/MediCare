import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImage from "../../assets/images/feature-img.png"
import { Link, NavLink } from "react-router-dom"
import {BiMenu} from "react-icons/bi"
const Header = () => {
    const navLinks = [
        {
            path: '/home',
            display: 'Home'
        },
        {
            path: '/services',
            display: 'Services'
        },
        {
            path: '/doctors',
            display: 'Doctor'
        },
        {
            path: '/contact',
            display: 'Contact'
        }
    ]

const headerRef = useRef(null);
const menuRef =useRef(null);

const handleStickyheader = () =>{
    window.addEventListener('scroll' ,()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
            headerRef.current.ClassList.add('sticky_header')
        }else{
            headerRef.current.ClassList.remove('sticky_header')
        }
    })
}
    useEffect(()=>{
        handleStickyheader()
        return ()=> window.removeEventListener('scroll' ,handleStickyheader);
    });

    const toogleMenu =()=> menuRef.current.ClassList.toggle('show_menu');

    return (
        <header className="header flex items-center ">
            <div className="container">
                <div className="flex items-center justify-between" >
                    {/* logo */}
                    <div>
                        <Link to="/" >
                        <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* menu */}
                    <div className="navigation" ref={menuRef} onClick={toogleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem] ">
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink
                                            to={link.path}
                                            className={navClass =>
                                                navClass.isActive
                                                    ? ' text-primaryColor text-[16px] font-[600] leading-7 ' :
                                                    ' text-textColor text-[16px] font-[500] leading-7  '
                                            }
                                        >
                                            {link.display}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    {/* nav right */}
                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to='/' >
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer  ">
                                    <img src={userImage} className="w-full rounded-full " alt="user" />
                                </figure>
                            </Link>
                        </div>

                        <Link to='/login'>
                            <button className=" bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                                Login
                            </button>
                        </Link>

<span className="md:hidden" onClick={toogleMenu}>
<BiMenu className="w-6 h-6 cursor-pointer" />
</span>

                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;