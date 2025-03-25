'use client';
import registerUser from "@/libs/registerUser";
import { useState } from "react";
import { useState } from "react";

export default   function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    password: "",
    role: true,
  });
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    password: "",
    role: true,
  });
  // Define the regular expression for email validation
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async () => {
    const { name, tel, email, password, role } = formData;

    // Validate fields
    if (!name || !tel || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Invalid email format.");
      return;
    }

    
      console.log(name, tel, email, password, role ? "admin" : "user")
      const response = await registerUser(name, tel, email, password, role ? "admin" : "user");

      alert(response)
  }
  return (
    <div className="items-center justify-center min-h-screen bg-gray-100 p-5">
        <div className="text-2xl text-[#569746] mb-4 text-center">Create User</div>
    <div className="items-center justify-center min-h-screen bg-gray-100 p-5">
        <div className="text-2xl text-[#569746] mb-4 text-center">Create User</div>

        {/* Name Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="admin1"
            placeholder="Name"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.name}
            onChange={handleChange}
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Telephone Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Telephone</label>
          <input
            type="text"
            id="tel"
            name="tel"
            defaultValue="02-12345678"
            placeholder="Telephone"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.tel}
            onChange={handleChange}
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.tel}
            onChange={handleChange}
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="admin1@gmail.com"
            placeholder="Email"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue="1111111"
            placeholder="Password"
            required
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.password}
            onChange={handleChange}
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-[#FF9BE6]"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Admin Role Checkbox */}
        <div className="flex items-center my-2">
        <input
            type="checkbox"
            id="role"
            name="role"
            checked={formData.role}
            onChange={handleChange}            
            checked={formData.role}
            onChange={handleChange}            
            className="mr-2"
          />

          <label className="text-gray-700" htmlFor="role">Admin</label>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-[#569746] hover:bg-[#3B672F] text-[#FFDBF3] p-2 rounded mt-4"
          onClick={handleSubmit}
          className="w-full bg-[#569746] hover:bg-[#3B672F] text-[#FFDBF3] p-2 rounded mt-4"
          onClick={handleSubmit}
        >
          submit
          submit
        </button>
   
    </div>
  );

}