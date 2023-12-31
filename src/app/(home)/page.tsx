
import Image from 'next/image'
import Categories from './components/Categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/ProductList'
import SectionTitle from './components/SectionTitle'
import PromoBanner from './components/PromoBanner'

export default async function Home() {

  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses'
      }
    }
  })


  return (
    <div className='flex flex-col gap-8 py-8'>
      <PromoBanner
        src='/banner-home.png'
        alt='Banner promoção 55%'
      />


      <div className=' px-5' >
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src='/banner-home-02.png'
        alt='Banner promoção 55% em mouses'
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src='/banner-home-03.png'
          alt='Banner promoção 55% em mouses'
        />
      </div>

      <div>
        <SectionTitle>Fones</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  )
}
