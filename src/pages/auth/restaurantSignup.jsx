import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../../assets/craveio.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../../components/googleLogin";
import MainContext from "../../context/context";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { gatewayUrl } from "../../components/urls";

const RestaurantSignUpPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(MainContext);

  const [location, setLocation] = useState({ lat: null, lng: null });

  const validationSchema = Yup.object({
   
    shopName: Yup.string().required("Shop Name is required"),
    openTime: Yup.string().required("Opening Time is required"),
    closeTime: Yup.string().required("Closing Time is required"),
    license: Yup.mixed().required("license is required"),
    terms: Yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
  });

  const handleMapClick = (e) => {
    const { latLng } = e;
    setLocation({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-orange-50">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-5 md:px-20 shadow-md">
        <div className="h-16 w-36 mb-10">
          <img src={logo} alt="craveio" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Register Your Restaurant
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Sign up to get started with Craveio.
        </p>

        <Formik
          initialValues={{
            shopName: "",
            openTime: "",
            closeTime: "",
            license: '',
            terms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            if (!location.lat || !location.lng) {
                alert("Please mark your location on the map before submitting!");
                return;
            }
        
            const formData = new FormData();
        
            formData.append('name', values.shopName);
            formData.append('user_id', user.user_id);
            formData.append('open_time', values.openTime);
            formData.append('close_time', values.closeTime);
            formData.append('latitude', location.lat.toFixed(6));
            formData.append('longitude', location.lng.toFixed(6));
        
            formData.append('license_image', values.license);
        
            try {
                const response = await axios.post(`${gatewayUrl}/restaurant/join/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', 
                    },
                });
                console.log(response);
                if (response.status == 208){
                  alert('Bro You Already Own One!')
                }
                navigate('/restaurant')
            } catch (error) {
                console.error('Error submitting the form', error);
            }
        }}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-6 w-full">
              <div>
                <Field
                  type="text"
                  name="shopName"
                  placeholder="Restaurant Name"
                  className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                />
                <ErrorMessage name="shopName" component="div" className="text-red-500 text-sm" />
              </div>


              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Open Time</label>
                  <Field
                    type="time"
                    name="openTime"
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  <ErrorMessage name="openTime" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Close Time</label>
                  <Field
                    type="time"
                    name="closeTime"
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                  />
                  <ErrorMessage name="closeTime" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Upload license</label>
                  <input
                    type="file"
                    name="license"
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                    onChange={(e) => setFieldValue("license", e.target.files[0])}
                  />
                  <ErrorMessage name="license" component="div" className="text-red-500 text-sm" />
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Field type="checkbox" name="terms" className="w-4 h-4" />
                <label className="text-gray-600">I agree to the Terms and Conditions</label>
              </div>
              <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />

              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600"
              >
                JOIN US
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4">
        <p className="text-sm text-gray-700 font-medium mb-2">
          Please mark your location on the map for verification.
        </p>
        <LoadScript googleMapsApiKey="AIzaSyAaKeqh8qSsAbsEOsiKvCOl2VpWgeUJRn8">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 11.1452613, lng: 76.11923 }}
            zoom={14}
            onClick={handleMapClick}
          >
            {location.lat && location.lng && (
              <Marker position={{ lat: location.lat, lng: location.lng }} />
            )}
          </GoogleMap>
        </LoadScript>
        {location.lat && location.lng && (
          <div className="mt-2 text-gray-600 text-sm">
            Selected Location: Latitude: {location.lat}, Longitude: {location.lng}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantSignUpPage;
