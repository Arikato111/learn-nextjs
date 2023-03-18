import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import LoadingAnimation from '@/components/LoadingAnimation'
import TitleBrand from '@/components/TitleBrand'
import RandomButton from '@/components/RandomButton'
import MetaTag from '@/components/MetaTag'

export default function Home() {
  const [loadState, setLoadState] = useState<number>(0)
  const [timeLimit, setTimeLimit] = useState(0)
  const router = useRouter()
  const [futureFood, setFutureFood] = useState(-1)

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

  const getRandomFood = () => {
    if (loadState !== 0 && loadState !== 100) return;
    setTimeLimit(Math.floor(Math.random() * 100))
    setLoadState(1)
    axios.get('/api/food').then(res => {
      setFutureFood(res.data.id)
      console.log("random is " + res.data.name)
    })
  }

  return (
    <>
      <Head>
        <MetaTag
          title='กินอะไรดี?'
          description='คิดไม่ออกจะกินอะไรดี งั้นไม่ต้องคิด สุ่มเอา'
          url='https://next-food-random.vercel.app/'
          image='https://next-food-random.vercel.app/example-page.png'
        />
        <title>กินอะไรดี?</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <TitleBrand />
        <div className='text-center'>
          <RandomButton onClick={getRandomFood} />
          {loadState != 100 &&
            (
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
  )
}
