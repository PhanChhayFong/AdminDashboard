import React from "react";
import ApiService from "./api-service";
import Swal from "sweetalert2";
window.Swal = Swal;
class Alart {
  refresh = () => window.location.reload(true);
  eye = (e) => {
    return !e;
  };
  alartDelete = (tb, id) => {
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
        ApiService.delete(tb, id);
        this.refresh();
      }
    });
  };
  alartSwap = (error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Can't Move " + error,
    });
  };
  alartSave = (changed) => {
    if (changed) {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
        console.log(result);
        return result;
      });
    }
  };
  alartCreate = (Page, required) => {
    Swal.fire({
      icon: "error",
      title: `${Page} Can't be Created`,
      text: `${required} are required!!!`,
    });
  };
  alartPasswordError = (fill) => {
    Swal.fire({
      icon: "error",
      title: `Error !!!`,
      text: `Please Enter ${
        fill ? "Confirm Password Again" : "Username, Email, Password"
      } !!!`,
    });
  };
  alartLoginSuccess = () => {
    Swal.fire({
      icon: "success",
      title: `Login Success`,
    });
  };
  alartLoginError = (status, error) => {
    Swal.fire({
      icon: "error",
      title: `Error ${status} !!!`,
      text: `${error}`,
    });
  };
  alartLoginEmpty = (error) => {
    Swal.fire({
      icon: "error",
      title: "Can't Login",
      text: `Please Enter Your ${error}`,
    });
  };
}
export default new Alart();
