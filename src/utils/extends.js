import Swal from "sweetalert2";
import { obtenerUsuario } from "../services/auth.service";

export const alertBasic = ({
  title,
  text,
  icon = "success",
  showConfirmButton = false,
  timer = 2000,
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    showConfirmButton,
    timer,
  });
};

export const setDateReservations = (
  fechaEntrada = new Date(),
  fechaSalida = (() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  })()
) => {
  localStorage.setItem("fechaEntrada", fechaEntrada);
  localStorage.setItem("fechaSalida", fechaSalida);
};

export const getDateReservations = () => {
  return {
    fechaEntrada: localStorage.getItem("fechaEntrada"),
    fechaSalida: localStorage.getItem("fechaSalida"),
  };
};

export const formatDate = (date) => {
  const fecha = new Date(date);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses en JavaScript son base 0, por lo que se suma 1
  const anio = fecha.getFullYear();

  // Formatear la fecha
  const fechaFormateada = `${dia < 10 ? "0" + dia : dia}/${
    mes < 10 ? "0" + mes : mes
  }/${anio}`;

  return fechaFormateada; // Resultado: "11/06/2023"
};

export const generateRandomCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  const uniqueIdentifier = Date.now(); // Identificador único (timestamp)

  return `${code}${uniqueIdentifier}`;
};

export const validarCedula = (cedula) => {
  if (cedula.length !== 10) {
    return {
      valido: false,
      mensaje: "La cédula debe tener 10 dígitos",
    };
  }

  const digitos = cedula.substring(0, 9);
  const verificador = parseInt(cedula.charAt(9));

  if (isNaN(digitos) || isNaN(verificador)) {
    return {
      valido: false,
      mensaje: "La cédula contiene caracteres inválidos",
    };
  }

  let suma = 0;
  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];

  for (let i = 0; i < coeficientes.length; i++) {
    let multiplicacion = digitos.charAt(i) * coeficientes[i];
    if (multiplicacion >= 10) {
      multiplicacion -= 9;
    }
    suma += multiplicacion;
  }

  const digitoVerificadorEsperado = 10 - (suma % 10);

  if (digitoVerificadorEsperado === 10 && verificador === 0) {
    return {
      valido: true,
      mensaje: "La cédula es válida",
    };
  } else if (digitoVerificadorEsperado === verificador) {
    return {
      valido: true,
      mensaje: "La cédula es válida",
    };
  } else {
    return {
      valido: false,
      mensaje: "La cédula es inválida",
    };
  }
};

export const obtenerCadenaParaQR = (objeto) => {
  const { entrada, salida, fecha_reservacion, habitacionData } = objeto;
  const { COD, categoria, titulo, precio } = habitacionData;
  const { cedula, nombre, telefono, email } = obtenerUsuario();
  console.log(objeto);

  return encodeURIComponent(`
  DATOS CLIENTE\n
  - Cedula: ${cedula}\n
  - Nombre: ${nombre}\n
  - Telefono: ${telefono}\n
  - Correo: ${email}\n
  DATOS HABITACION\n
  - Fecha Salida: ${COD}\n
  - Habitación: ${titulo}\n
  - Categoria: ${categoria}\n
  - Precio por noche: ${precio}\n
  DATOS RESERVACION\n
  - Fecha Reservación: ${formatDate(fecha_reservacion)}\n
  - Fecha Entrada: ${formatDate(entrada)}\n
  - Fecha Salida: ${formatDate(salida)}\n
  `);
};
