import { usuarios } from "../dados/listagem-usuario.js";

function login(usuario, senha) {
  
  const usuarioEncontrado = usuarios.find((item) => {
    
    return item.email === usuario && item.senha === senha;
  
  });
  
  if (usuarioEncontrado) {
   
    return Promise.resolve(usuarioEncontrado);
  
  } else {
    
    return Promise.reject(
      
      "Dados incorretos. Favor verificar e tentar novamente!",
    );
  }
}

export { login };
