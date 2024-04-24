import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"


export default (() => {
  function LineSpacer() {
    return <hr class="linespacer"></hr>
  }
 
  // LineSpacer.css = `
  // hr.big {
  //     /*gradient hr line */
  //     border: none;
  //     height: 1px;
  //     background-image: -webkit-linear-gradient(left, #f9beca, var(--secondary), #f9beca);
  // }
  // `
 
  return LineSpacer
}) satisfies QuartzComponentConstructor