import { Button } from '@mui/material'


interface Props {
  addProduct: () => void;
}


export const ManageProducts = ({addProduct} : Props) => {
  return (
    <>
        <div>ManageProducts</div>
        <Button onClick={addProduct} variant="contained" sx={{margin: "40px 0"}}>Add Product</Button>
    </>
  )
}
