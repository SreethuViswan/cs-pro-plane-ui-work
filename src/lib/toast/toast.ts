import { ToastContainer, ToastOptions, toast } from 'react-toastify';

export class Toast{
      
    
      showToast = (type: string, toastMessage: string)=>{
        const toastOptions: ToastOptions = {
            position: 'top-right',
            autoClose: 4000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          } 
        type == 'success'? toast.success(toastMessage, toastOptions)
        : toast.error(toastMessage, toastOptions)
           
    }
}