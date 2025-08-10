import { Route } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import StudentPage from "../pages/StudentPage";
import { ROLES } from "../constants/roles";

export default function StudentRoutes() {
    return (
        <>
            <Route element={<RequireAuth allowedRoles={[ROLES.STUDENT]} />}>
                <Route path="student" element={<StudentPage />} />
            </Route>
        </>
    );
}
