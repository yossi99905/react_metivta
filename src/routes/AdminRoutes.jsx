import { Route } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import HeaderAdmin from "../components/admin/HeaderAdmin";
import DashboardAdmin from "../components/admin/DashboardAdmin";
import NewUserPage from "../components/admin/NewUserPage";
import ListUsersPage from "../components/admin/ListUsersPage";
import NewCategoryPage from "../components/admin/NewCategoryPage";
import ListCategoriesPage from "../components/admin/ListCategoriesPage";
import { ROLES } from "../constants/roles";

export default function AdminRoutes() {
  return (
    <>
      <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="admin" element={<><HeaderAdmin /><DashboardAdmin /></>} />
        <Route path="admin/dashboard" element={<><HeaderAdmin /><DashboardAdmin /></>} />
        <Route path="admin/newUser" element={<><HeaderAdmin /><NewUserPage /></>} />
        <Route path="admin/listUsers" element={<><HeaderAdmin /><ListUsersPage /></>} />
        <Route path="admin/newCategory" element={<><HeaderAdmin /><NewCategoryPage /></>} />
        <Route path="admin/listCategories" element={<><HeaderAdmin /><ListCategoriesPage /></>} />
      </Route>
    </>
  );
}
