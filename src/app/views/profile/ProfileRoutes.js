import UserProfile from "./UserProfile";
import { authRoles } from "../../auth/authRoles";

const profileRoutes = [
  {
    path: "/profile/userProfile",
    component: UserProfile,
    auth: authRoles.admin
  }
];

export default profileRoutes;
