import { createRoot } from "react-dom/client";
import Colorpicker from "./app.jsx"



const cointainer = document.getElementById("root")
const root = createRoot(cointainer)
root.render(
    <>
    <Colorpicker/>
    </>
)