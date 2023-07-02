import * as React from "react";
import { Link } from "gatsby";
// Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Images
import productsImage from "../../images/product-header.png";

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
      <p className="text-gray-500 text-[14px] desktop:text-[20px] underline mt-[20px] pl-[15px] laptop:pl-[30px] desktop:w-[1200px] desktop:mx-auto">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link>
      </p>
      <div className="px-[15px] text-center mt-5">
        <h1 className="text-[23px] font-bold">5GC</h1>
        <p className="text-[12px] text-gray-600">
          Cloud native 5GC, Ultra-High Speed, Low Latency
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
export const Head = () => <title>Products</title>;
