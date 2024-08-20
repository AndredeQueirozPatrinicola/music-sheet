import { ReactComponent as ClefSvg } from '../assets/sol_clef.svg';

function Clef() {
    return (
        <div className="absolute top-0 left-0 bottom-1 w-40 h-40 flex items-center justify-center">
            <ClefSvg className="w-full h-full" />
        </div>
    );
}

export default Clef;