import { Category } from "@prisma/client";
import Image from "next/image";

interface ICategoryItem {
    category: Category;
}

const CategoryItem = ({ category }: ICategoryItem) => {
    return (

        <div className="flex flex-col">
            <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-violet-700 via-violet-900 to-violet-950">
                {/* IMAGEM */}
                <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[70%] w-auto max-w-[80%] object-contain"
                />
            </div>

            <div className="rounded-bl-lg rounded-br-lg bg-accent py-3">
                <p className="text-center text-sm font-semibold">{category.name}</p>
            </div>
        </div>

    );
};

export default CategoryItem