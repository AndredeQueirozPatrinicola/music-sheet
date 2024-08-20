
import SheetMusic from "./SheetMusic"
import SheetLine from "./SheetLine"
import Compass from "./Compass"
import { useState } from "react"
import { getCompasses } from "../utils/getCompasses"

type Notes = {
    name: string,
    value: number,
    rithm: number
}

type ICompass = {
    notes: Notes[]
}

type Music = {
    name: string,
    tempo: number[],
    compasses: ICompass[]
}

function Sheet() {
    const [ music, setMusic] = useState({
        name: 'Sonata nº9',
        tempo: [4, 4],
        compasses: getCompasses()
    } as Music)
    

    return (
      <div className="px-10">
        <SheetMusic>
            {
                music.compasses.map((value, index) => {
                    if (index % 4 === 0){
                        return (
                            <SheetLine key={index}>
                                
                                <Compass
                                    index={index}
                                    notes={value?.notes}
                                />
                                <Compass
                                    index={index}
                                    notes={value?.notes}
                                />
                                <Compass
                                    index={index}
                                    notes={value?.notes}
                                />
                                <Compass
                                    index={index}
                                    notes={value?.notes}
                                />
                            </SheetLine>
                        )
                    }
                })
            }
        </SheetMusic>
      </div>
    )
  }
  
  export default Sheet
  