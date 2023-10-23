import { Product } from "@prisma/client";

interface IProductWithTotalPrice extends Product {
  totalPrice: number;
}

const computeProductTotalPrice = (product: Product): IProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return { ...product, totalPrice: Number(product.basePrice) };
  }

  const totalPrice =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice,
  };
};
