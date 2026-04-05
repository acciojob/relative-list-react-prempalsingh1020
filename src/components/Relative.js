import React from "react";


const Relative = () => {

let Relativeitem = ["mama","pupha","jija","papa","nana"]

  return (
    <div>
        <ul>
            {
                Relativeitem.map((persion,index)=>{
                    return <li key={index}>
                        {persion}
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Relative






