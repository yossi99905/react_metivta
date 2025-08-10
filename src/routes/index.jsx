import StudentRoutes from "./StudentRoutes";
import TeacherRoutes from "./TeacherRoutes";
import AdminRoutes from "./AdminRoutes";
import StoreRoutes from "./StoreRoutes";

export function AllRoutes() {
  return (
    <>
      {StudentRoutes()}
      {TeacherRoutes()}
      {AdminRoutes()}
      {StoreRoutes()}
    </>
  );
}
