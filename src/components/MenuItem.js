import styles from "../styles/MenuBar.module.css";

import { useState } from "react";

export default function menuItem({title, items, select, icon}){
  const [extended, toggleDrop] = useState(false);


  const dropArrow = extended? <span><i className="fa fa-chevron-up" /></span>: <span><i className="fa fa-chevron-down" /></span>;

  const itemIcon = <i className={icon} />;

  
  const menuItemsHeader = <li key = {title} data-testid = {title} onClick={() => toggleDrop(!extended)}><curr>{itemIcon}&emsp;&emsp;{title}&emsp;&emsp;{dropArrow}</curr></li>;

  const menuItem = <li key = {title} data-testid = {title} onClick={() => select(title)}><curr>{itemIcon}&emsp;&emsp;{title}</curr></li>;

  let itemsList = <div />;
  if(items){
    itemsList = items.map((item)=> { //list of sections
    return <li className = {styles.navitem} key = {item} data-testid = "item" onClick={() => select(item)}><g>{item}</g></li>;
   }); //initiate helper to perform callbacks on click
  }

  return (
    <div>
    
    <li className={styles.li}><span>{items? menuItemsHeader: menuItem}
    
    {extended?(<div className = {styles.navDropDown}> {itemsList}</div>): null}
    </span></li>
   
  </div>

  );

}