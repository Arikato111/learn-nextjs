import { FC } from "react";
import Image from "next/image";

interface Food {
    id: number;
    name: string;
    img: string;
    link: string;
}
const ShowFood: FC<Food> = ({ id, name, img, link }) => {
    return (
        <div className='border border-zinc-200 rounded-lg p-3 shadow-md shadow-orange-200'>
            <div className="text-xl">{name}</div>
            <img className='w-64 h-64 object-cover rounded border-2 border-zinc-200' src={img} alt="" />
            {/* <Image className="w-64 h-64 object-cover rounded border-2 border-zinc-200" src={img} alt="food image" /> */}
        </div>
    )
}

export default ShowFood