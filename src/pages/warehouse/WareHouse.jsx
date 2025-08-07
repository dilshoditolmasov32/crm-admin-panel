import { Outlet } from 'react-router-dom'
import AccordionMenu from '../../components/accordion/AccordionMenu'
import "./WareHouse.css"
const WareHouse = () => {
  return (
    <>
    <div className="warehouse-line"></div>
    <div className='warehouse-page'>
      <AccordionMenu />
      <Outlet/>
    </div>
    </>
  )
}

export default WareHouse
