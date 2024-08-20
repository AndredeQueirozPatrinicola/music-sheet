import Tempo from "./Tempo"
import SheetMusic from "./SheetMusic"
import Compass from "./Compass"
import Note from "./Note"
import { useState } from "react"


function Sheet() {
    const [ compasses, setCompasses] = useState([
       0,
       0,
       0,
       0,
       0,
       0,
       0,
       0
    ])
    

    return (
      <div className="px-10">
        <SheetMusic>
            {
                compasses.map((value, index) => {
                    return <Compass
                        key={index}
                        index={index}
                    />
                })
            }
        </SheetMusic>
      </div>
    )
  }
  
  export default Sheet
  