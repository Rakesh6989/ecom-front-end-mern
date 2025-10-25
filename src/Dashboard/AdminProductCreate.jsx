import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Upload, PackagePlus, Loader2 } from "lucide-react";
import axios from "axios";
import Toast from "../Components/Toast";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required").positive("Invalid price"),
  discount: Yup.number().min(0, "Invalid discount").max(100, "Max 100%"),
  category: Yup.string().required("Category is required"),
  stock: Yup.number().required("Stock is required").min(0),
});

export default function AdminProductCreate() {
  const [previewImage, setPreviewImage] = useState(null);
  const [toastdata, settoastdata] = useState({
    showtoast: false,
    message: "",
    type: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => formData.append(key, values[key]));

      // image upload
      if (values.image) formData.append("image", values.image);

      // 🔹 Example API call — replace with your backend endpoint
      await axios.post("http://localhost:5000/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      settoastdata({
        showtoast: true,
        message: "Product created successfully!",
        type: "success",
      });
      resetForm();
      setPreviewImage(null);
    } catch (error) {
      console.error(error);
      settoastdata({
        showtoast: true,
        message: "Failed to create product",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[8rem] px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <PackagePlus className="text-blue-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
        </div>

        <Formik
          initialValues={{
            name: "",
            description: "",
            price: "",
            discount: "",
            category: "",
            stock: "",
            image: null,
          }}
          validationSchema={productSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter product name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Category
                </label>
                <Field
                  as="select"
                  name="category"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="appliances">Appliances</option>
                  <option value="accessories">Accessories</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Price (₹)
                </label>
                <Field
                  name="price"
                  type="number"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter price"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Discount */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Discount (%)
                </label>
                <Field
                  name="discount"
                  type="number"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter discount"
                />
                <ErrorMessage
                  name="discount"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Stock
                </label>
                <Field
                  name="stock"
                  type="number"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter stock quantity"
                />
                <ErrorMessage
                  name="stock"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Product Image
                </label>
                <div className="border border-dashed border-gray-300 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                  <Upload className="w-6 h-6 text-gray-400 mb-1" />
                  <p className="text-sm text-gray-500 mb-2">
                    Click to upload image
                  </p>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                      setFieldValue("image", e.target.files[0]);
                      handleImageChange(e);
                    }}
                    className="hidden"
                    id="productImage"
                  />
                </div>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="mt-3 w-24 h-24 rounded-lg object-cover border"
                  />
                )}
              </div>

              {/* Description - Full width */}
              <div className="sm:col-span-2">
                <label className="block font-medium text-gray-700 mb-1">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter product description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <PackagePlus className="w-5 h-5" />
                      Create Product
                    </>
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {toastdata.showtoast && (
        <Toast
          message={toastdata.message}
          type={toastdata.type}
          duration={4000}
          onClose={() => settoastdata({ ...toastdata, showtoast: false })}
        />
      )}
    </div>
  );
}
