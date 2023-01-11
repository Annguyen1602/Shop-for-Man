import React from "react";
import Items from "./Template/Items";
import Title from "./Template/Title";

const Sales = ({ endpoint: {title, items} }) => {
  console.log(title);
  return (
    <div>
      <Title title = {title}/>
      <div>
        {items?.map((item,index)=>{
          return (
            <div>
              <Items key={index} {...item}/>
            </div>
          )
        })}
        
      </div>
    </div>
  );
};

export default Sales;
