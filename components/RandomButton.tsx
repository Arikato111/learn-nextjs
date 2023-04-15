import { MouseEventHandler } from "react"

type RandomButtonType = {
    onClick: MouseEventHandler<HTMLButtonElement>
}
export default function RandomButton({ onClick }: RandomButtonType) {
    return <button onClick={onClick} className="bg-zinc-100 py-2 px-4 rounded border border-orange-300 my-3 shadow shadow-orange-200 hover:scale-90 duration-200">
        สุ่ม
    </button>
}