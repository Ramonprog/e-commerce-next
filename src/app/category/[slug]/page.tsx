import ProductItem from '@/components/ui/ProductItem'
import { Badge } from '@/components/ui/badge'
import { computeProductTotalPrice } from '@/helpers/product'
import { prismaClient } from '@/lib/prisma'
import { ShapesIcon } from 'lucide-react'
import React from 'react'

const CategoryProducts = async ({ params }: any) => {

    const products = await prismaClient.product.findMany({
        where: {
            category: {
                slug: params.slug
            }
        }
    })

    return (
        <div className='p-5 flex flex-col gap-8 items-center md:'>
            <Badge className='gap-1 text-base uppercase border-primary px-3 py-[0.385rem] border-2 max-w-[170px]' variant='outline'>
                <ShapesIcon size={16} /> {params.slug}
            </Badge>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
                {products.map(item => (
                    <ProductItem key={item.id} product={computeProductTotalPrice(item)} />
                ))}
            </div>
        </div>
    )
}

export default CategoryProducts