import React from "react";
import { FaHeart } from "react-icons/fa";

const AllProductsOnPage = ({ category }) => {
    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            description: "Noise-cancelling over-ear headphones with 30 hours of battery life.",
            price: 129.99,
            rating: 4.5,
            category: "Electronics",
            stock: 25,
            image: "https://m.media-amazon.com/images/G/31/img22/CEPC/Jupiter/Sony/WH-1000XM6_Amazon_1400x800._CB799557079_.jpg"
        },
        {
            id: 2,
            title: "Organic Green Tea",
            description: "Premium loose-leaf green tea sourced from Himalayan farms.",
            price: 15.50,
            rating: 4.7,
            category: "Grocery",
            stock: 100,
            image: "https://marveltea.com/cdn/shop/files/OrganicGreenTea-min.webp?v=1724847412"
        },
        {
            id: 3,
            title: "Wooden Toy Train",
            description: "Eco-friendly handcrafted toy train set for kids aged 3+.",
            price: 39.99,
            rating: 4.3,
            category: "Toys",
            stock: 40,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTRvbsTREnQnBU-SKtpkXbM0WEKq2ZLLnsA&s"
        },
        {
            id: 4,
            title: "Leather Jacket",
            description: "Classic black leather jacket with modern slim fit design.",
            price: 199.00,
            rating: 4.6,
            category: "Fashion",
            stock: 12,
            image: "https://example.com/images/leatherjacket.jpg"
        },
        {
            id: 5,
            title: "Travel Backpack",
            description: "Durable 40L backpack with waterproof material and multiple compartments.",
            price: 89.99,
            rating: 4.4,
            category: "Travel",
            stock: 30,
            image: "https://example.com/images/backpack.jpg"
        },
        {
            id: 6,
            title: "Skincare Kit",
            description: "Complete skincare set with cleanser, toner, and moisturizer.",
            price: 59.99,
            rating: 4.8,
            category: "Beauty",
            stock: 50,
            image: "https://example.com/images/skincare.jpg"
        }
    ];

    const filteredProducts = products.filter((p) => (
        p.category === category
    ))


    const showProducts = category === 'All' ? products : filteredProducts;

    return (
        <div>
            <div className="main h-full w-full flex bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="products min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-14 px-8">

                    {showProducts.map((product, idx) => (
                        <div
                            key={idx}
                            className="product-card 
                 bg-gradient-to-b from-gray-800 via-gray-900 to-black 
              border border-gray-700 
              rounded-2xl 
              shadow-xl 
              flex flex-col 
              overflow-hidden 
              transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Image */}
                            <div className="image h-48 w-full overflow-hidden">
                                <img
                                    src={product.image}
                                    alt="Wireless Headphones"
                                    className="h-full w-full object-contain rounded-t-2xl"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col gap-2 text-white">
                                {/* Title + Heart */}
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold">{product.title}</h2>
                                    <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer transition duration-200" />
                                </div>

                                <p className="text-sm text-gray-300">
                                    {product.description}
                                </p>
                                <p className="text-indigo-400 font-semibold">{product.category}</p>

                                {/* Price + Rating */}
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-lg font-extrabold text-green-400">{product.price}</span>
                                    <span className="text-yellow-400">⭐{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
};

export default AllProductsOnPage;