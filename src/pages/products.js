import * as React from "react";
import { Link } from "gatsby";
// Components
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// Images
import productsImage from "../images/product-header.png"

const ProductsPage = () => {
    return (
        <>
        <Header />
        <Navigation />
        <div
        className="max-w-screen w-80 h-52 bg-center bg-cover tablet:w-screen tablet:h-80"
        style={{ backgroundImage: `url(${productsImage})` }}
      >
        Products
      </div>
      <p className="text-gray-500 underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link>
      </p>
        <Footer />
        </>
    )
}

export default ProductsPage;
export const Head = () => <title>Products</title>;
