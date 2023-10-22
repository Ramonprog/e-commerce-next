'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {

  const { data } = useSession()
  console.log("🚀 ~ file: page.tsx:8 ~ Home ~ data:", data)

  return (
    <div className='p-5'>
      <Image src='/banner-home.png' alt='Banner promoção 55%' height={0} width={0} className='h-auto w-full' sizes='100vw' />
    </div>
  )
}
