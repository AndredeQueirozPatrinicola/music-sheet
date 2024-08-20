import { useState } from "react";

type NoteContract = {
    compassIndex: number;
    noteIndex: number;
    compassLength: number;
    note: {
        name: string;
        value: number;
        rithm: number;
    };
};

function Note({ compassIndex, compassLength, noteIndex, note }: NoteContract) {
    const [noteController] = useState({
        initialLeftValue: compassIndex % 4 === 0 ? 14 : 0,
        maxRightValue: compassIndex % 4 === 0 ? 52 : 38,
    });

    const baseHorizontalPosition = (noteController.maxRightValue - noteController.initialLeftValue) / compassLength;
    const positionLeft = noteController.initialLeftValue + baseHorizontalPosition * (noteIndex + 1);

    return (
        <div
            className="absolute top-0 bottom-0 z-50"
            style={{ left: `${positionLeft}rem` }} // Use inline style for dynamic positioning
        >
            <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="10" cy="10" fill="black" />
            </svg>
        </div>
    );
}

export default Note;