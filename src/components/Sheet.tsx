import SheetMusic from "./SheetMusic"
import Compass from "./Compass"
import { useState } from "react"
import { getCompasses } from "../utils/getCompasses"


function Sheet() {
    const [ compasses, setCompasses] = useState(getCompasses())
    

    return (
      <div className="px-10">
        <SheetMusic>
            {
                compasses.map((value, index) => {
                    return <Compass
                        key={index}
                        index={index}
                        notes={value?.notes}
                    />
                })
            }
        </SheetMusic>
      </div>
    )
  }
  
  export default Sheet
  