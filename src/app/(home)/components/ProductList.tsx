import ProductItem from "@/components/ui/ProductItem"
import { computeProductTotalPrice } from "@/helpers/product"
import { Product } from "@prisma/client"

interface IProductList {
    products: Product[]
}
const ProductList = ({ products }: IProductList) => {
    return (
        <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
            {products.map((item) => (
                <ProductItem key={item.id} product={computeProductTotalPrice(item)} />
            ))}
        </div>
    )
}

export default ProductList