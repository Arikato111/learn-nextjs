import { MouseEventHandler } from "react"

type RandomButtonType = {
    onClick: MouseEventHandler<HTMLButtonElement>
}
export default function RandomButton({ onClick }: RandomButtonType) {
    return <button onClick={onClick} className="bg-zinc-100 py-2 px-4 rounded border border-zinc-300 my-3">
        สุ่ม
    </button>
}