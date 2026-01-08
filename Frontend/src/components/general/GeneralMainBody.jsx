import React, { useEffect, useState } from 'react'
import AllProductsOnPage from './AllProductsOnPage';
import { useSelector } from 'react-redux';

const GeneralMainBody = () => {

  const categories = ['All', 'Electronics', 'Grocery', 'Toys', 'Fashion', 'Travel', 'Beauty'];

  const [selectedCategory, setselectedCategory] = useState('All');

  const changeSelectedCategory = (cat) => {
    setselectedCategory(cat);
  }

  return (
    <div className='h-full w-full'>
      <main className='bg-gradient-to-r from-black via-gray-900 to-black text-white h-full'>
        <div className="categories-buttonss flex flex-col gap-8 items-center justify-center pt-12">
          <div className="title">
            <h1 className='text-4xl font-extrabold'>Products</h1>
          </div>
          <div className="buttons flex flex-wrap items-center justify-center gap-5">
            {categories.map((cat, idx) => (
              <button onClick={() => changeSelectedCategory(cat)} className={selectedCategory === cat ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-2   border-white px-4 py-2 rounded-2xl font-extrabold' : 'border-2   border-white px-4 py-2 rounded-2xl hover:bg-gradient-to-r from-indigo-600 to-purple-600  font-extrabold hover:scale-110'} key={idx}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="products">
          <AllProductsOnPage category={selectedCategory} />
        </div>
      </main >
    </div >
  )
}

export default GeneralMainBody