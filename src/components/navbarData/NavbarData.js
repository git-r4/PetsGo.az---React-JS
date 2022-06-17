
import Home from "../home/Home";
import AboutUs from "../aboutUs/AboutUs";
import Blogs from "../blogs/Blogs";
import Services from "../services/Services";
import Contact from "../contact/Contact";

import { AiFillHome } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdMedicalServices } from 'react-icons/md';
import { BsTelephoneOutboundFill } from 'react-icons/bs';

export const NavbarData =  [
        {path: '/', name: 'Ana Səhifə', icon: <AiFillHome />, Component: Home},
        {path: '/haqqimizda', name: 'Haqqımızda', icon: <FaUsers />, Component: AboutUs},
        {path: '/bloqlar', name: 'Bloqlar', icon: <MdDriveFileRenameOutline />, Component: Blogs},
        {path: '/xidmetlerimiz', name: 'Xidmətlərimiz', icon: <MdMedicalServices />, Component: Services},
        {path: '/elaqe', name: 'Əlaqə', icon: <BsTelephoneOutboundFill />, Component: Contact}
]