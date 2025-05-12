import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group h-full">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
        <div className="relative w-full pt-[100%]">
          <div className="absolute inset-0">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-start justify-between">
            <div className="flex-grow min-w-0">
              <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
              <p className="text-sm text-gray-500 truncate">
                {product.category}
              </p>
            </div>
            <p className="font-semibold ml-2 flex-shrink-0">${product.price.toFixed(2)}</p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            {!product.inStock && (
              <span className="px-2 py-1 text-xs font-medium bg-red-50 text-red-600 border border-red-200 rounded-full">
                Out of Stock
              </span>
            )}
            <div className="flex items-center">
              <span className="text-sm text-amber-500">★</span>
              <span className="ml-1 text-sm text-gray-600">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
