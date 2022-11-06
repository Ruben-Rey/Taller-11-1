
function capturar(){
    let name = document.querySelector("#name").value;
    let email= document.querySelector("#email").value;
    let asunto = document.querySelector("#asunto").value;
    let message = document.querySelector("#message").value;

    console.log("Nombre : " + name);
    console.log("Email : " + email);
    console.log("Asunto : " + asunto);
    console.log("Mensaje : " + message);
}