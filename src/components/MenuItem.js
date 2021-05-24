import styles from "../styles/MenuBar.module.css";

import { useState } from "react";
import Link from "next/link";

import PropTypes from "prop-types"

export default function MenuItem({title, items, icon}){
  const [extended, toggleDrop] = useState(false);


  const dropArrow = extended? <span><i className="fa fa-chevron-up" /></span>: <span><i className="fa fa-chevron-down" /></span>;

  const itemIcon = <i className={icon} />;


  const menuItemsHeader = <li key = {title} data-testid = {title} onClick={() => toggleDrop(!extended)}className={styles.li}>{itemIcon}&emsp;&emsp;{title}&emsp;&emsp;{dropArrow}</li>;


  const menuItems = <li key = {title} data-testid = {title} className={styles.li}>{itemIcon}&emsp;&emsp;<Link href={(title === "Profile")?("/"):`/${title}`}><a>{title}</a></Link></li>;


  let itemsList = <div />;
  if(items){
    itemsList = items.map((item)=> { //list of sections
    return <li className = {styles.navitem} key = {item} data-testid = "item"><Link href={`/${item}`}><a>{item}</a></Link></li>;
   }); //initiate helper to perform callbacks on click
  }

  return (
    <div>
    <span>{items? menuItemsHeader: menuItems}
    
    {extended?(<ul className = {styles.navDropDown}> {itemsList}</ul>): null}
    </span>
   
  </div>

  );

}


MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  icon: PropTypes.string.isRequired
};
