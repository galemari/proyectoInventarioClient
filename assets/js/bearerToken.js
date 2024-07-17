const token = localStorage.getItem("token_hotel_user");
if (!token) {
  setCargando(false);
  return;
}
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const { data } = await axios("http://localhost:3000/apiV1/perfil", config);
