'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {

  const { data } = useSession()
  console.log("🚀 ~ file: page.tsx:8 ~ Home ~ data:", data)

  return (
    <div></div>
  )
}
