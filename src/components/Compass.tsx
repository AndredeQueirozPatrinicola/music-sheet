import Line from "./Line";
import Clef from "./Clef";
import Tempo from "./Tempo";


type CompassContract = {
    index: number,
    notes: any
}

function Compass({index}: CompassContract) {
    const compassLinesNumber: number[] = [0,0,0,0,0];

    return (
        <div className="relative w-1/4 my-12 h-32 flex flex-col justify-between border-2">
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
        </div>
    );
}

export default Compass;