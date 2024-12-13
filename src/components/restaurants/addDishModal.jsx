import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { createDish, fetchCategory } from "../../api/api";
import MainContext from "../../context/context";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddDishModal = ({ isOpen, onClose }) => {
  const { user } = useContext(MainContext);
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: createDish,
    onSuccess: () => {
      queryClient.invalidateQueries(['dishes'])
    },
    onError: (err) => {
      console.log("this is error",err);
    },
  });
  
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategory,
  });

  if (error) {
    console.log(error);
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Dish name is required"),
    price: Yup.number()
      .required("Price is required")
      .min(1, "Price must be greater than 0"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Please select a category"),
    image: Yup.mixed()
      .required("Image is required")
      .test("fileFormat", "Unsupported format", (value) => {
        return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
      }),
  });

  const handleSubmit = (values, { setSubmitting }) => {

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("user_id", user.user_id);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("category", values.category);
    formData.append("dish_image", values.image);

    console.log(formData); 
    mutate(formData)
    setSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Add New Dish</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>
        <Formik
          initialValues={{
            name: "",
            price: "",
            description: "",
            category: "",
            image: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Dish Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter dish name"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Price{" "}
                  <span className="text-red-400 text-xs">
                    *15% Will Be Deducted As Commission.
                  </span>
                </label>
                <Field
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Description</label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Enter description"
                  rows="3"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Category</label>
                <Field
                  as="select"
                  name="category"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories?.map((cat, ind) => (
                    <option key={ind} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFieldValue("image", e.target.files[0])}
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2 px-4 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  {isSubmitting ? "Saving..." : "Save Dish"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddDishModal;
