import styles from "../styles/MenuBar.module.css";

import { useState } from "react";

export default function menuItem({title, items, select, icon}){
  const [extended, toggleDrop] = useState(false);


  const dropArrow = extended? <span><i class="fa fa-chevron-up"></i></span>: <span><i class="fa fa-chevron-down"></i></span>;

  const itemIcon = <i class={icon}></i>;

  
  const menuItemsHeader = <li key = {title} data-testid = "hobby" onClick={() => toggleDrop(!extended)}><curr>{itemIcon}&emsp;&emsp;{title}&emsp;&emsp;{items? dropArrow: null}</curr></li>;



  let itemsList = <div></div>;
  if(items){
    itemsList = items.map((item)=> { //list of sections
    return <li className = {styles.navitem} key = {item} data-testid = "item" onClick={() => select(item)}><g>{item}</g></li>;
   }); //initiate helper to perform callbacks on click
  }

  return (
    <div>
    
    <li className={styles.li}><span>{menuItemsHeader}
    
    {extended?(<div className = {styles.navDropDown}> {itemsList}</div>): null}
    </span></li>
   
  </div>

  );

}