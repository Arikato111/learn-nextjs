import { FC } from "react";

interface Food {
    id: number;
    name: string;
    img: string;
    link: string;
}
const ShowFood: FC<Food> = ({ id, name, img, link }) => {
    return (
        <a target={'_blank'} href={link} rel="noreferrer">
            <div className='text-orange-500 border border-zinc-200 rounded-lg p-3 shadow-md shadow-orange-200 text-center'>
                <div className="text-xl">{name}</div>
                <img className='w-64 h-64 inline-block object-cover rounded border-2 border-zinc-200' src={img} alt="" />
                {/* <Image className="w-64 h-64 object-cover rounded border-2 border-zinc-200" src={img} alt="food image" /> */}
                <div className="mt-1">คลิกเพื่อดูสูตรและวิธีทำ</div>
            </div>
        </a>
    )
}

export default ShowFood