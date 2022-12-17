import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import { CssBaseline } from "@mui/material";

export default function Layout(){
 return (
 <>
 <CssBaseline />
 <Navbar/>
 <Outlet/>
 
 </>
 )
}