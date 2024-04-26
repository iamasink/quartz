import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function Description({ cfg, fileData, displayClass }: QuartzComponentProps) {
    if (!fileData.frontmatter) return <div></div>
    return <p class={classNames(displayClass, "description")}>{fileData.frontmatter.description}</p>
}

Description.css = `
    .description {
        display: block;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0;
        margin-right: 0;
    }
    `

export default (() => Description) satisfies QuartzComponentConstructor
