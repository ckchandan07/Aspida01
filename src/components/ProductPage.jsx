import React, { useState } from "react";

const ProductPage = () => {
  const product = {
    title: "Jenny’s Closets - The winter top for female, green",
    price: 49,
    originalPrice: 99,
    discount: 49,
    description:
      "A stylish and comfortable winter top made from pure cotton. Perfect for any occasion. Durable and fashionable. This product is made from high-quality materials to ensure comfort and longevity.",
    uses: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    benefits:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: [
      "Made with full cotton",
      "Slim fit for any body",
      "Quality control by JC",
    ],
    colors: [
      { name: "Green", hex: "bg-green-600" },
      { name: "Orange", hex: "bg-orange-500" },
      { name: "Blue", hex: "bg-blue-600" },
      { name: "Black", hex: "bg-gray-800" },
    ],
    images: [
      "src/assets/image/product/1.jpg",
      "src/assets/image/product/2.jpg",
      "src/assets/image/product/3.jpg",
    ],
    reviewsCount: 157,
  };

  // const [selectedImage, setSelectedImage] = useState(product.images[0]);
  // const [selectedColor, setSelectedColor] = useState(product.colors[0].name);

  const handleAddToCart = () => {
    alert(`${product.title} in ${selectedColor} added to cart!`);
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // cursor position inside the image
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div className="main-bg-light ">
      <div className="bg-light p-6  mx-auto">
        {/* Product Section */}
        <div className="aspida-max-w flex flex-col md:flex-row gap-8">
          {/* Left - Sticky Product Images */}
          <div className="md:w-1/2 flex flex-col justify-center sm:items-unset sm:justify-start">
            <div className="sticky top-24">
              <div className="relative">
                {/* Zoom Box fixed in right column */}
                {showZoom && (
                  <div
                    className="zoomproduct absolute z-10 top-0 right-[-48vw] xl:right-[-580px] w-[400px] lg:w-[550px] hidden md:block h-[400px] border rounded-lg bg-no-repeat shadow-lg"
                    style={{
                      backgroundImage: `url(${selectedImage})`,
                      backgroundSize: "200%", // zoom level
                      backgroundPosition,
                    }}
                  />
                )}
                {/* Main Image */}
                <div
                  className="product-img relative border rounded-lg overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setShowZoom(true)}
                  onMouseLeave={() => setShowZoom(false)}
                >
                  <img
                    src={selectedImage}
                    alt="Product"
                    className="rounded-lg w-full object-cover transition-transform duration-300"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mt-4">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                        selectedImage === img
                          ? "border-black"
                          : "border-transparent"
                      } transition duration-200 hover:opacity-80`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="flex flex-col md:w-1/2">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            {/* <p className="text-yellow-500 font-semibold mt-2">
            ⭐⭐⭐⭐⭐ ({product.reviewsCount} Reviews)
          </p> */}

            <div className="flex items-center gap-4 mt-4">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="line-through text-gray-500">
                ${product.originalPrice}
              </span>
              <span className="text-green-600">Save {product.discount}%</span>
            </div>

            {/* Features */}
            <ul className="list-disc list-inside mt-4 text-gray-700">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {/* Colors */}
            {/* <div className="mt-4">
            <h3 className="font-semibold">Colors:</h3>
            <div className="flex gap-3 mt-2">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full border-2 ${color.hex} ${
                    selectedColor === color.name
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div> */}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Contact Now
            </button>

            {/* Extra Info */}
            <div className="mt-4 text-gray-600 text-sm">
              <p>🌍 Free shipping worldwide</p>
              <p>🔒 100% Secured Payment</p>
            </div>
            {/* Description Section (after both columns scroll together) */}
            <div className="mt-12 product-description">
              <h2 className="text-xl font-bold mb-2">Product Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              <h2 className="text-xl font-bold mb-2">Directions for Use</h2>
              <p className="text-gray-700 leading-relaxed">{product.uses}</p>
              <h2 className="text-xl font-bold mb-2">Key Benefits</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.benefits}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
