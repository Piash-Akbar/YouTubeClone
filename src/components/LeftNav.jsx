import React ,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import LeftNavMenuItem from './LeftNavMenuItem'
import {categories} from '../utils/constants'
import { Context } from '../context/contextApi'

const LeftNav = () => {
  const {selectCatagories, setSelectCatagories,mobileMenu} = useContext(Context);

const navigate = useNavigate()

const clickHandler = (name, type) => {
  switch (type) {
    case "category":
      return(setSelectCatagories(name))

    case "home":
      return(setSelectCatagories(name))
    case "menu":
      return(false)
  
    default:
      break;
  }

}


  return (
    <div className="overflow-y-auto md:block w-[240px] h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all">
        <div className="flex px-5 flex-col">
          {categories.map((item)=>{
            return(
              <React.Fragment key={item.name}>
                <LeftNavMenuItem 
                  text = {item.type === "home" ? "Home" : item.name}
                  icon ={item.icon}
                  action ={()=>{
                    clickHandler(item.name,item.type);
                    navigate("/");
                  }}
                  className={`${selectCatagories === item.name ? "bg-white/[0.15]" : ""}`}
                
                />
                {item.divider && (
                  <hr className="my-5 border-white/[0.2]" />
                )}
              </React.Fragment>
            )
          })}
          <hr className="my-5 border-white/[0.2]" />
          <div className="text-white/[0.5] text-[12px]">
            Clone By: Sk Nafis Akbar
          </div>


        </div>   
    </div>
  )
}

export default LeftNav