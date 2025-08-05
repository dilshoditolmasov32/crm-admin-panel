import { Outlet } from 'react-router-dom'
import AccordionExpandDefault from '../../components/accordion/AccordionMenu'
import "./WareHouse.css"
const WareHouse = () => {
  return (
    <div className='warehouse-page'>
      <AccordionExpandDefault/>
      <Outlet/>
    </div>
  )
}

export default WareHouse
