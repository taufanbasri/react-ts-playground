import { useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params, location);

  return <p>User {params.id}</p>;
};

export default UserDetail;
