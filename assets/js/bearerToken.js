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
  body: {
    nombre,
    descripcion,
    cantidad,
    foto,
    categoria,
  },
};

const { data } = await axios("http://localhost:3000/apiV1/perfil", config);
