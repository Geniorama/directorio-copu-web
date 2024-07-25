import IconClose from "../../../../public/img/btn-close.svg"
import IconSector from "../../../../public/img/category.svg"
import IconLocation from "../../../../public/img/distance.svg"
import IconType from "../../../../public/img/group.svg"
import { limitText } from "../formatters"

type TagProps = {
    text?: string,
    filter?: string,
    handleClose?: () => void
}

export default function Tag({text, filter, handleClose}: TagProps) {
  const icon = filter === "sector" ? IconSector : filter === "location" ? IconLocation : filter === "type" ? IconType : null;


  return (
    <div className="inline-flex gap-3 items-center border p-2 px-4 rounded-full">
        {icon && (
            <span aria-label={text} title={text}>
                <img className="w-[15px]" src={icon.src} alt="" />
            </span>
        )}
        <span className="text-xs leading-5">{limitText(text, 20)}</span>
        <button onClick={handleClose}>
            <img className="w-[10px]" src={IconClose.src} alt="" />
        </button>
    </div>
  )
}