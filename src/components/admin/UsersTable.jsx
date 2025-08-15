import UserInfo from "./UserInfo";

const UsersTable = ({ users, onEdit, onDelete }) => {
  const classMap = {
    1: "א",
    2: "ב",
    3: "ג",
    4: "ד",
    5: "ה",
    6: "ו",
    7: "ז",
    8: "ח",
    9: "ט",
    10: "י",
  };

  const roleMap = {
    "1000": "תלמיד",
    "2000": "מורה",
    "3000": "קיוסקאי",
    "4000": "מנהל",
  };

  return (
    <>
      {users.length === 0 && <div className="text-center">No users found</div>}

      {users.map((user) => (
        <UserInfo
          key={user._id}
          name={`${user.lastName} ${user.firstName}`}
          email={user.email}
          classRoom={classMap[user.classRoom] || "לא משויך"}
          role={
            user.role && user.role.length > 0
              ? roleMap[user.role[0]]
              : "לא ידוע"
          }
          points={user.score}
          onClickEdit={() => onEdit(user)}
          onDeleteUser={() => onDelete(user._id)}
        />
      ))}
    </>
  );
};

export default UsersTable;
