import { motion, stagger } from "motion/react"
import { FaTv } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdminSidebar = () => {

    const MotionLink = motion.create(Link);

    const adminFeatures = [
        {
            title: 'Dashboard',
            icon: <FaTv size={22} />,
            path: "/admin/dashboard"
        },
        {
            title: 'Manage User',
            icon: <FaUser size={22} />,
            path: "/admin/users"
        },
        {
            title: 'Manage Orders',
            icon: <FaShoppingCart size={22} />,
            path: "/admin/orders"
        },
        {
            title: 'Add Products',
            icon: <FaBox size={22} />,
            path: "/admin/products/add"
        },
        {
            title: 'Manage Products',
            icon: <FaCogs size={22} />,
            path: "/admin/products/manage"
        },
    ];





    return (
        <div className="min-h-screen w-64 ">
            <div className="main-side hidden sm:flex h-screen w-64 bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-8  flex-col justify-between ">
                <div className="title-list ">
                    <div className="title text-4xl font-extrabold text-purple-400">
                        <motion.h1
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 1.5,
                            }}
                        >
                            ShopOrbits
                        </motion.h1>
                    </div>
                    <div className="list flex pt-16 h-1/2 px-2">
                        <motion.ul  className="flex flex-col items-start text-xl font-bold gap-8">
                            {adminFeatures.map((features, idx) => (
                                <MotionLink  to={features.path} key={idx} className="flex items-center gap-4 hover:text-purple-300 hover:translate-x-1 transition-all">
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
        </div>
    )
}

export default AdminSidebar