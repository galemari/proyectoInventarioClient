const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit",async(e)=>{
  e.preventDefault();
  console.log(e.target.children.user.value)
  const res = await fetch("http://localhost:3000/apiV1/registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre: e.target.children.nombre.value,
      apellido: e.target.children.apellido.value,
      email: e.target.children.email.value,
      password: e.target.children.password.value,
    }),
  });
  if(!res.ok) return mensajeError.classList.toggle("escondido",false);
  const resJson = await res.json();
  if(resJson.redirect){
    window.location.href = resJson.redirect;
  }
})