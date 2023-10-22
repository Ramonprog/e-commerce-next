import { prismaClient } from "@/lib/prisma"
import CategoryItem from "./CategoryItem"

const Categories = async () => {

    const categories = await prismaClient.category.findMany()

    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-16">
            {categories.map(item => (
                <CategoryItem key={item.id} category={item} />
            ))}
        </div>
    )
}

export default Categories