import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../../Hooks/Admin/useAdmin";
import { MdAdminPanelSettings, MdDelete } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import Swal from "sweetalert2";
import { FaRegUser } from "react-icons/fa";

const AllUser = () => {
  const adminData = useAdmin();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await adminData.get("/user");
      return res.data;
    },
  });

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        adminData.delete(`/user/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUpdatedUser = (id) => {
    adminData.patch(`/user/${id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleUpdatedTrainer = (id) => {
    adminData.put(`/user/${id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr className="lg:text-lg">
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>status</th>
              {/* <th>Admin</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item._id}>
                <th className="text-lg">{index + 1}</th>
                <td className="text-lg">{item.name}</td>
                <td className="text-lg">{item.email}</td>

                <td className="text-lg">{item.role}</td>
                {/* <td className="text-lg">{item.role}</td> */}
                {item.role === "member" ? (
                  <>
                    <td className="text-lg">
                      <button
                        onClick={() => handleUpdatedUser(item._id)}
                        className="btn btn-ghost  bg-[#F9A31C] hover:bg-[#FF5D28]"
                      >
                        <FaRegUser className="text-white w-8 h-8" />
                      </button>
                    </td>
                  </>
                ) : item.role === "trainer" ? (
                  <>
                    <td className="text-lg">
                      <button
                        onClick={() => handleUpdatedTrainer(item._id)}
                        className="btn btn-ghost  bg-[#F9A31C] hover:bg-[#FF5D28]"
                      >
                        <ImUserTie className="text-white w-8 h-8" />
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleUpdatedTrainer(item._id)}
                      className="btn btn-ghost  bg-[#F9A31C] hover:bg-[#FF5D28]"
                    >
                      <MdAdminPanelSettings className="text-white w-8 h-8" />
                    </button>
                  </>
                )}
                {/* handleDeleteUser btn */}
                <td className="text-lg">
                  <button
                    onClick={() => handleDeleteUser(item._id)}
                    className="btn btn-ghost  bg-[#F9A31C] hover:bg-[#FF5D28]"
                  >
                    <MdDelete className="text-white w-8 h-8" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
