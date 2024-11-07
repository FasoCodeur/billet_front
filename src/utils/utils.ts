
import { MdDashboard } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { RiReservedLine } from "react-icons/ri";
import { GiInterstellarPath } from "react-icons/gi";
import { FaBusSimple } from "react-icons/fa6";
import { SiGooglecloudcomposer } from "react-icons/si";
import { CiMoneyBill } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { PiWaveSquareDuotone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

export const sideMenu = [
    { icon: MdDashboard, name: "Tableau de bord", path: "/dashboard" },
    { icon: IoMdBusiness, name: "Compagnies", path: "/company" },
    { icon: GiInterstellarPath, name: "Trajects", path: "/traject" },
    { icon: RiReservedLine, name: "Reservations", path: "/reservation" },
    { icon: FaBusSimple, name: "Bus", path: "/bus" },
    { icon: SiGooglecloudcomposer, name: "Equipements", path: "/equipment" },
    { icon: CiMoneyBill, name: "Payements", path: "/payment" },
    { icon: MdOutlineAirlineSeatReclineExtra, name: "Siege", path: "/seat" },
    { icon: FaUsers, name: "Utilisateurs", path: "/user" },
    { icon: PiWaveSquareDuotone, name: "Offres & Promo", path: "/promo" },
    { icon: IoSettingsOutline, name: "Paramètres", path: "/parametre" },
];