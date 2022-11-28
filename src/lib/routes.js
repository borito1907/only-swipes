import { createBrowserRouter } from "react-router-dom"

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dashboard from "../components/dashboard";
import Layout from "../components/layout";
import Landing from "../Landing";
import Feed from "../pages/Feed";
import ChatRoomsPage from "../pages/ChatRooms";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";


export const PROTECTED = "/protected"
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users"
export const PROFILE = "/protected/profile/:id"
export const CHATROOMS = "/protected/chatrooms"
export const FEED = "feed"

export const router = createBrowserRouter([
    {path: ROOT, element: <Landing/> },
    {path: LOGIN, element: <Login/>},
    {path: REGISTER, element: <Register/>},
    {path: PROTECTED, element: <Layout />, children:[
        {
            path: DASHBOARD,
            element: <Dashboard />
        },
        {
            path: USERS,
            element: "Users"
        },
        {
            path: PROFILE,
            element: "User profile for a specific id"
        },
        {
            path: CHATROOMS,
            element: <ChatRoomsPage />
        },
        {
            path: FEED,
            element: "feed"
        },
        
    ]}
])
