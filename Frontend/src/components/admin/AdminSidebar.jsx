import { motion } from "motion/react";
import { FaTv, FaUser, FaShoppingCart, FaBox, FaCogs, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminSidebar = () => {
    const MotionLink = motion.create(Link);
    const [isOpen, setIsOpen] = useState(false);
    const [selctedPage, setselctedPage] = useState('Dashboard');

    const adminFeatures = [
        { title: 'Dashboard', icon: <FaTv size={22} />, path: "/admin/dashboard" },
        { title: 'Manage User', icon: <FaUser size={22} />, path: "/admin/users" },
        { title: 'Manage Orders', icon: <FaShoppingCart size={22} />, path: "/admin/orders" },
        { title: 'Add Products', icon: <FaBox size={22} />, path: "/admin/products/add" },
        { title: 'Manage Products', icon: <FaCogs size={22} />, path: "/admin/products/manage" },
    ];


    const handleSelectedPage = (features) => {
        setselctedPage(features)
    }

    return (
        <>
            {/* Toggle button visible only on mobile & tablet */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 text-white bg-purple-600 p-2 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-8 flex flex-col justify-between transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >
                <div className="title-list">
                    <div className="title text-4xl font-extrabold text-purple-400">
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                            ShopOrbits
                        </motion.h1>
                    </div>
                    <div className="list flex pt-16 h-1/2 px-2">
                        <motion.ul className="flex flex-col items-start text-xl font-bold gap-8">
                            {adminFeatures.map((features, idx) => (
                                <MotionLink
                                    className={selctedPage === features.title ? 'flex items-center gap-4 text-purple-500 ' : 'flex items-center gap-4 hover:text-purple-300 hover:translate-x-1 transition-all'}
                                    to={features.path}
                                    key={idx}
                                    onClick={() => {
                                        setIsOpen(false);
                                        handleSelectedPage(features.title)

                                    }} // close sidebar on link click (mobile/tablet)
                                >
                                    {features.icon}
                                    {features.title}
                                </MotionLink>
                            ))}
                        </motion.ul>
                    </div>
                </div>
                <div className="profile flex gap-6 text-xl font-bold hover:text-purple-300 hover:translate-x-1 transition-all cursor-pointer">
                    <FaUserCircle size={28} />
                    <div className="h1">Profile</div>
                </div>
            </div>

            {/* Backdrop for mobile/tablet when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default AdminSidebar;