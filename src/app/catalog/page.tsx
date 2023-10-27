import { Badge } from '@/components/ui/badge'
import { prismaClient } from '@/lib/prisma'
import { ShapesIcon } from 'lucide-react'
import React from 'react'
import CategoryItem from './components/CategoryItem'


const CatalogPage = async () => {

    const categories = await prismaClient.category.findMany()

    return (
        <div className='p-5'>
            <Badge className='gap-1 text-base uppercase border-primary px-3 py-[0.385rem] border-2' variant='outline'>
                <ShapesIcon size={16} /> Catálogo
            </Badge>

            <div className="grid grid-cols-2 gap-8 mt-3">
                {categories.map(category => <CategoryItem key={category.id} category={category} />)}
            </div>
        </div>
    )
}

export default CatalogPage