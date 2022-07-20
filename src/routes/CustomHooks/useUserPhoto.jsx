// import { useState, useEffect } from "react";

// const useUserPhoto = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8000/userPhoto") //2. get user photo url from server
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

//   return data;
// };

// export default useUserPhoto;
