import { useLocation, useParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params, location);

  return <p>User</p>;
};

export default UserDetailPage;
