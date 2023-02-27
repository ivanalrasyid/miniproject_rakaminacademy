import React from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home(){
    const url = `https://63fb9be42027a45d8d69a6fe.mockapi.io/products?page=1&limit=10`
    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                Produk Error
            </div>
            <div className="bg-red-300 p-3">
                Create by Ivan Alrasyid - Udemy
            </div>
        </div>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = 
        products.data.map((product) => 
            <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    )
}

export default Home