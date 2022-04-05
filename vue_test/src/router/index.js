import { createRouter, createWebHistory } from "vue-router";
import MainHome from "@/views/2_pages/MainHome";
import UserLogin from "@/views/2_pages/UserLogin";
import RoomCreation from "@/views/2_pages/RoomCreation";
import RoomEntry from "@/views/2_pages/RoomEntry";
import InterviewRoom from "@/views/2_pages/InterviewRoom";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainHome,
  },
  {
    path: "/login",
    name: "Login",
    component: UserLogin,
  },
  {
    path: "/room-creation",
    name: "RoomCreation",
    component: RoomCreation,
  },
  {
    path: "/room-entry",
    name: "RoomEntry",
    component: RoomEntry,
  },
  {
    path: "/interview-room",
    name: "InterviewRoom",
    component: InterviewRoom,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
