
import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import LobbyAdmin from '../Pages/Admin/Lobby';
import NewEvent from '../Pages/Admin/NewEvent';
import Profile from "../Pages/User/Profile";
import EventInfo from "../Pages/User/EventInfo";
import NotFound from "../Pages/NoAuth/NotFound";

const AdminRouter = () =>{
    return (
        <Routes>
            <Route path="/" element={<LobbyAdmin/>}></Route>
            <Route path="/NewEvent" element={<NewEvent/>}></Route>
            <Route path="/EditEvent/:id" element={<NewEvent/>}></Route>
            <Route path="/Profile/:id" element={<Profile />}></Route>
            <Route path="/Event/:id" element={<EventInfo/>}></Route>
            <Route path="/Events" element={<EventInfo/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>

        </Routes>
    )
}

export default AdminRouter;