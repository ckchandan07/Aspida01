import React from "react";
import { Link } from "react-router-dom";
import Underline  from "../assets/image/underline/underline.svg";

const featuredItems = [
  {
    id: 1,
    title: "Beoplay M5 Bluetooth Speaker",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
    price: "$99.00",
    oldPrice: "$99.00",
    label: "New",
    rating: 4,
  },
  {
    id: 2,
    title: "Apple Smart Watch 6 - Special Edition",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-2.png",
    price: "$299.00",
    rating: 5,
  },
  {
    id: 3,
    title: "Beylob 90 Speaker",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-3.png",
    price: "$49.00",
    oldPrice: "$99.00",
    label: "Sale",
    labelStyle: "bg-gray-900 text-white",
    rating: 0,
  },
  {
    id: 4,
    title: "Martino 75 Bluetooth",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-4.png",
    price: "$79.00",
    rating: 3,
  },
];

const FeaturedItems = () => {
  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${
          i < count ? "text-yellow-400" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="myFadeup py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="under-line text-2xl font-bold text-gray-900 sm:text-3xl">
            Our featured items
            <img src={Underline} alt="" />
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            faucibus massa dignissim tempus.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {item.label && (
                <div className="absolute left-3 top-3">
                  <p
                    className={`sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide uppercase rounded-full ${
                      item.labelStyle || "bg-white text-gray-900"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              )}

              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <Link
                      to={`/productdetails`}
                      title={item.title}
                      className="relative"
                    >
                      {item.title}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                    </Link>
                  </h3>

                  <div className="flex items-center mt-2.5 space-x-px">
                    {renderStars(item.rating)}
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    {item.price}
                  </p>
                  {item.oldPrice && (
                    <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                      {item.oldPrice}
                    </del>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
