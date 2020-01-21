import { LinkInterface } from "../ButtonLink"

import style from "./style"

export default function ButtonLinkFlex(props: { link: LinkInterface, target?: string, id?: string }) {
  const { link, target, id } = props
  return (
    <>
      <div id={id} className="button-container">
        <a href={link.url} target={target ? target : ""}>
          <button>
            {link.name}
          </button>
        </a>
      </div>

      <style jsx>{style}</style>
    </>
  )
}
