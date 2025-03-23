import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import userLogin from "@/libs/userLogIn";
import { authOptions } from "./authOptions";

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST};