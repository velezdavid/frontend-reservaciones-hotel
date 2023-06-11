import Swal from "sweetalert2";

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
