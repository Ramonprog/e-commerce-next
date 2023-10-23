import { IProductWithTotalPrice } from "@/helpers/product"
import { Product } from "@prisma/client"
import Image from "next/image"
import { Badge } from "./badge"
import { ArrowDownIcon } from "lucide-react"

interface IProduct {
    product: IProductWithTotalPrice
}

const ProductItem = ({ product }: IProduct) => {
    return (
        <div className="flex flex-col gap-4 max-w-[170px] relative">
            <div className="bg-zinc-800 rounded-lg h-[170px] w-[170px] flex items-center justify-center">
                <Image
                    src={product.imageUrls[0]}
                    alt={`Imagem do produto ${product.name}`}
                    width={0} height={0}
                    sizes="100vw"
                    className="h-auto w-auto max-w-[80%] max-h-[70%]"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div >
                <p className="w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
                <div className="flex items-center gap-2  overflow-hidden whitespace-nowrap ">
                    {product.discountPercentage > 0 ? (
                        <>
                            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
                            <p className="text-xs opacity-[0.4] line-through text-ellipsis">R$ {Number(product.basePrice).toFixed(2)}</p>
                        </>
                    ) : (

                        <p className="text-xs  line-through">R$ {Number(product.basePrice).toFixed(2)}</p>
                    )}

                </div>
            </div>
            {product.discountPercentage > 0 &&
                <div className="absolute top-2 left-2 ">
                    <Badge className="px-3 py-[2px]">
                        <ArrowDownIcon size={14} /> {product.discountPercentage} %
                    </Badge>
                </div>
            }

        </div>
    )
}

export default ProductItem