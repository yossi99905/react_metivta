import { useState } from "react";
import NavAdmin from "./NavAdmin";
import UsersTable from "./UsersTable";
import EditUserForm from "./EditUserForm";
import Modal from "../Modal";
import { useDeleteUser, useUsers, useUpdateUser } from "../../hook/useUsers";

function ListUsersPage() {
  const { data: users = [] } = useUsers();
  const deleteUser = useDeleteUser();
  const updateUser = useUpdateUser();
  const [editUser, setEditUser] = useState(null);

  const clickEdit = (user) => setEditUser(user);

  const onDeleteUser = (id) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק משתמש זה?")) {
      deleteUser.mutateAsync(id.toString());
    }
  };

  const onCloseModal = () => setEditUser(null);

  const onSubmitEdit = async (data) => {
    if (!editUser) return;
    await updateUser.mutateAsync({ id: editUser._id.toString(), user: data });
    onCloseModal();
  };

  return (
    <div className="flex justify-end">
      <div className="w-lvw mx-9 my-32 max-w-[700px]">
        <div className="space-y-2">
          <div className="grid grid-cols-10 text-center h-8 px-10 font-bold *:self-center">
            <div className="col-span-2"></div>
            <p className="sm:col-span-2 hidden sm:block">נק׳</p>
            <p className="sm:col-span-2 hidden sm:block">כיתה</p>
            <p className="col-span-4 sm:col-span-2">שם</p>
            <p className="sm:col-span-2 hidden sm:block text-end">תפקיד</p>
          </div>

          <UsersTable users={users} onEdit={clickEdit} onDelete={onDeleteUser} />
        </div>
      </div>

      <NavAdmin />

      <Modal isOpen={!!editUser} onClose={onCloseModal}>
        <EditUserForm user={editUser} onSubmit={onSubmitEdit} />
      </Modal>
    </div>
  );
}

export default ListUsersPage;
