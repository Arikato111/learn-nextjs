type LoadingType = {
    loadState: number
}
export default function LoadingAnimation({ loadState }: LoadingType) {
    return <div className="bg-zinc-200 w-[60vw] sm:w-[20vw] h-2 rounded-lg">
        <div style={{ width: `${loadState}%` }} className='rounded-lg bg-orange-400 h-2'></div>
        <div>กำลังโหลด {loadState}%</div>
    </div>

}