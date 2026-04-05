import React from "react";


const Relative = () => {

let Relativeitem = ["mama","pupha","jija","papa","nana"]

  return (
    <div>
        <ol>
            {
                Relativeitem.map((persion,index)=>{
                    return <li key={index}>
                        {persion}
                    </li>
                })
            }
        </ol>
    </div>
  )
}

export default Relative






