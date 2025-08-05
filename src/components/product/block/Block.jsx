import Input from "../../input/Input"
import "../Product.css"
const Block = () => {
  return (
   <>
   <div className="product-selector">
    
   <Input title={"Название"} text={"Yangi mahsulotlar."}  editData={"Изменить"} className="new-product"  />
   <Input title={"Название"}text={"Mahsus takliflar"} editData={"Изменить"} className="product-offer" />
   </div>
   </>
  )
}

export default Block
