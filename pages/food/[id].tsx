import Head from "next/head";
import Footer from "@/components/Footer";
import axios from 'axios'
import { useEffect, useState } from 'react'
import ShowFood from '@/components/ShowFood'
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import Data from '@/public/Data.json'
import { useRouter } from "next/router";
import TitleBrand from "@/components/TitleBrand";
import LoadingAnimation from "@/components/LoadingAnimation";
import RandomButton from "@/components/RandomButton";
import MetaTag from "@/components/MetaTag";

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id } = ctx.params ?? {};
    return {
        props: {
            food: Data[Number(id)]
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    let paths: any[] = []
    Data.map(value => {
        paths.push({ params: { id: `${value.id}` } })
    })

    return {
        paths,
        fallback: false
    }
}

type FoodType = {
    id: number,
    name: string,
    img: string,
    link: string
}
interface SingleFoodProps {
    food: FoodType;
}
const SingleFood: FC<SingleFoodProps> = ({ food }) => {
    const router = useRouter()
    const [loadState, setLoadState] = useState<number>(100)
    const [timeLimit, setTimeLimit] = useState(0)
    const [futureFood, setFutureFood] = useState(food.id)

    useEffect(() => {
        if (loadState > 0 && loadState < 100) {
            setTimeout(() => {
                setLoadState(loadState + 1)
            }, timeLimit);
        }
        if (loadState === 100) {
            router.push('/food/' + futureFood)
        }
    }, [loadState])

    // use when click random button
    const getRandomFood = () => {
        if (loadState !== 0 && loadState !== 100) return;
        setTimeLimit(Math.floor(Math.random() * 100))
        setLoadState(1)
        axios.get('/api/food').then(res => {
            setFutureFood(res.data.id)
            console.log("random is " + res.data.name)
        })
    }
    return <>
        <Head>
            <MetaTag
                title={food.name}
                description='คิดไม่ออกจะกินอะไรดี งั้นไม่ต้องคิด สุ่มเอา'
                url='https://next-food-random.vercel.app/'
                image={food.img}
            />
            <title>{food.name + " | กินอะไรดี?"}</title>
        </Head>
        <main className="flex flex-col items-center justify-center min-h-screen">
            <TitleBrand />
            <div className='text-center'>
                <RandomButton onClick={getRandomFood} />
                {loadState === 100 && food.id === futureFood ? (
                    <ShowFood id={food.id ?? 0} img={food.img ?? ""} link={food.link ?? ""} name={food.name ?? ""} />
                ) : (
                    <div>
                        {loadState > 0 &&
                            <LoadingAnimation loadState={loadState} />
                        }
                    </div>
                )}
            </div>
            <Footer />
        </main>
    </>
}
export default SingleFood;