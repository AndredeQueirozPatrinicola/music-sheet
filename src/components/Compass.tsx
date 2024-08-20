import Line from "./Line";
import Clef from "./Clef";
import Tempo from "./Tempo";
import Note from "./Note";

type CompassContract = {
    index: number;
    notes: any[]
}

function Compass({index, notes}: CompassContract) {
    const compassLinesNumber: number[] = [0,0,0,0,0];

    return (
        <div className={`relative ${index % 4 === 0 ? 'w-[31%]' : 'w-[23%]'} my-12 h-32 flex flex-col justify-between border-2`}>
            {index % 4 === 0 ? (
                <><Clef /><Tempo/></>
            ) : null}
            {
                compassLinesNumber.map((_, i) => (
                    <Line
                        key={i}
                    />
                ))
            }
            {
                notes?.map((value, i) => {
                    return (
                        <Note
                            key={i}
                            compassIndex={index}
                            compassLength={notes.length}
                            noteIndex={i}
                            note={value}
                        />
                    )
                })
            }
            
        </div>
    );
}

export default Compass;