// import ApiService from "./api-service";
import Swal from "sweetalert2";
window.Swal = Swal;
class Alart {
  Delete() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        return true;
      }
      return false;
    });
  }
}
export default new Alart();
