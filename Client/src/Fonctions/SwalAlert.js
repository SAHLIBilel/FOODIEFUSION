import Swal from 'sweetalert2'
export  function Erreur(Position , msg){
    Swal.fire({
        position: Position,
        icon: "error",
        title: "Oops...",
        text: msg,
        timer: 1500
      });
}
export  function succees(Position , msg){
    Swal.fire({
        position: Position,
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 3000
      });
}
export  function Wait(Position , msg1 ,msg2){
  Swal.fire({
      position: Position,
      title: msg1,
      text: msg2,
      showConfirmButton: false,
      timer: 500
    });
}
export function Choix_Binaire(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
}
export function Ajout_Produit(Url){
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: Url,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
}