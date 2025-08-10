import { Route } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import TeacherPage from "../pages/TeacherPage";
import { ROLES } from "../constants/roles";

export default function TeacherRoutes() {
    return (
        <>
            <Route element={<RequireAuth allowedRoles={[ROLES.TEACHER, ROLES.ADMIN]} />}>
                <Route path="teacher" element={<TeacherPage />} />
            </Route>
        </>
    );
}
