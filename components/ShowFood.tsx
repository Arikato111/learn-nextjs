import { FC } from "react";

interface Food {
    id: number;
    name: string;
    img: string;
    link: string;
}
const ShowFood: FC<Food> = ({ id, name, img, link }) => {
    return (
        <div>
            <div>{name}</div>
            <img src={img} alt="" />
            <a href={link}>วิธีทำ</a>
        </div>
    )
}

export default ShowFood