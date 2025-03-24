'use client';
import { authOptions } from "../[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";  // Update to use User model
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import registerUser from "@/libs/registerUser";
 import { useState } from "react";


export default   function RegisterPage() {

  const [name, setName] = useState("admin1");
  const [tel, setTel] = useState("02-12345678");
  const [email, setEmail] = useState("admin1@gmail.com");
  const [password, setPassword] = useState("1111111");
  const [role, setRole] = useState(true); // Assuming admi
  // Define the regular expression for email validation
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 // const [message, setMessage] = useState("");

  // Function to handle form submission
  // const addUser = async (addUserForm: FormData) => {
  //   "use server"

  //   // Extract user data from the form
  //   const name = addUserForm.get("name");
  //   const tel = addUserForm.get("tel");
  //   const email = addUserForm.get("email");
  //   const password = addUserForm.get("password");
  //   const role = addUserForm.get("role") ? "admin" : "user"; // Check if the role checkbox is checked

    // Validate email format
    // if (!emailRegex.test(email)) {
    //   alert("Please add a valid email address");
    //   return; // Stop the form submission if the email is invalid
    // }

  
     // await dbConnect();
      // if(!name || ! tel || !email ||!password||!role)return null

      
      // const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user in the database

   
    //   const user = await User.create({
    //     name: name,
    //     tel: tel,
    //     email: email,
    //     password: hashedPassword ,  // You should hash the password before storing it in a real app
    //     role: role,
    //   });





    //   // You can return the user object or any success message here
    //   console.log("User added successfully", user);
    //   alert("Registration successful! Please log in.");
    // } catch (error) {
    //  // console.log(error);
    //   alert("Registration failed. Please try again.");
    // }
  // };

 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-xl text-blue-700 mb-4 text-center">Create User</div>

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
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={tel}
            onChange={(e) => {
              setTel(e.target.value);
            }}
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
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        {/* Admin Role Checkbox */}
        <div className="flex items-center my-2">
        <input
            type="checkbox"
            id="role"
            name="role"
            checked={role}  // Use checked to bind the state
            onChange={(e) => setRole(e.target.checked)}  // Use e.target.checked to get true/false based on whether the checkbox is checked or not
            className="mr-2"
          />

          <label className="text-gray-700" htmlFor="role">Admin</label>
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded mt-4"
           onClick={async() => {const response =await registerUser( name,tel,email,password,role?"admin":"user");
                       alert(response);}}
        >
          Create User
        </button>
   
    </div>
  );
}
