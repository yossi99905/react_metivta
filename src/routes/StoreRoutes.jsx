import { Route } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import StorePage from "../pages/StorePage";
import StoreManagementPage from "../components/store/StoreManagementPage";
import NewItemPage from "../components/store/NewItemPage";
import ListItemsPage from "../components/store/ListItemsPage";
import { ROLES } from "../constants/roles";

export default function StoreRoutes() {
    return (
        <>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Manager]} />}>
                <Route path="store" element={<StorePage />} />
                <Route path="store/storemanagement" element={<StoreManagementPage />} />
                <Route path="store/newItem" element={<NewItemPage />} />
                <Route path="store/ListItems" element={<ListItemsPage />} />
            </Route>
        </>
    );
}
