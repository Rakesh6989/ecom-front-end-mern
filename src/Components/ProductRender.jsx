import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductRender() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0); // Image gallery

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading Product Details..</p>;
  if (!product) return <p>No Product Details Found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Images */}
        <div className="flex flex-col gap-2">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-96 h-96 object-contain border p-2"
          />
          <div className="flex gap-2 mt-2">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`w-20 h-20 object-contain border cursor-pointer ${
                  selectedImage === idx ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 font-medium">{product.brand}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-green-700">₹{product.price}</span>
            <span className="line-through text-gray-400">₹{product.oldPrice}</span>
            <span className="text-red-600 font-semibold">{product.discount} off</span>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-yellow-500 font-semibold">
            ⭐ {product.ratings.average} ({product.ratings.total} ratings)
          </div>

          {/* Offers */}
          {product.offers?.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Available Offers:</h3>
              <ul className="list-disc list-inside">
                {product.offers.map((offer, idx) => (
                  <li key={idx} className="text-gray-700">{offer}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
              Buy Now
            </button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="font-semibold text-xl mb-2">Description</h3>
            <p className="text-gray-800 whitespace-pre-line">{product.description}</p>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-2">Specifications</h3>
              <table className="table-auto border-collapse border border-gray-300">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-300">
                      <td className="border-r px-4 py-2 font-semibold">{key}</td>
                      <td className="px-4 py-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Testimonials */}
          {product.testimonials?.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-2">Customer Reviews</h3>
              <ul className="space-y-2">
                {product.testimonials.map((t) => (
                  <li key={t._id} className="border p-2 rounded">
                    <p className="font-semibold">{t.user}</p>
                    <p>{t.comment}</p>
                    <p className="text-yellow-500">⭐ {t.rating}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductRender;
