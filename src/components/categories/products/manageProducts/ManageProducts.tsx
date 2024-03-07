import { Button } from '@mui/material'
import { useSelector } from 'react-redux';
import { AppState } from '../../../../reduxToolkit/store';


interface Props {
  addProduct: () => void;
}


export const ManageProducts = ({addProduct} : Props) => {
    const userData = useSelector((state: AppState) => state.users.user);
    
  return (
    <>
    { userData?.role === "admin"&& ( 
        <Button onClick={addProduct} variant="contained" sx={{margin: "40px 0"}}>Add Product</Button>)}
       
    </>
  )
}
