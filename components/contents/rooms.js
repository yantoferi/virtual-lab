import LabkomD from "../rooms/labkomd"
import LabkomE from "../rooms/labkome"
import LabkomC from "../rooms/labkomc"
import LabkomB from "../rooms/labkomb"
import Industri from "../rooms/labindustri"
import LabkomA from "../rooms/labkoma"
import DesignRoom from "../rooms/labdesain"
import Bioprocess from "../rooms/bioprocess"
import KuliahUmum from "../rooms/kuliahumum"
import LabkomNew from "../rooms/labkomnew"
import AsistenLabA from "../rooms/asistenlab_a"
import AsistenLabB from "../rooms/asistenlab_b"
import Chemistry from "../rooms/labkimia"
import PhysicLab from "../rooms/labfisika"
import Lppm from "../rooms/lppm"

export default function AllRooms() {
    return (
        <>
            <LabkomNew />
            <KuliahUmum />
            <Bioprocess />
            <DesignRoom />
            <LabkomA />
            <LabkomB />
            <LabkomC />
            <LabkomD />
            <LabkomE />
            <Industri />
            <AsistenLabA />
            <AsistenLabB />
            <Chemistry />
            <PhysicLab />
            <Lppm />
        </>
    )
}