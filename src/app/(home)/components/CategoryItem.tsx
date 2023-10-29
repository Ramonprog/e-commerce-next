
import { Badge } from "@/components/ui/badge"
import { Category } from "@prisma/client"
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react"
import Link from "next/link"

interface ICategoriesItem {
  category: Category
}

const CategoryItem = ({ category }: ICategoriesItem) => {

  const categoriesIcons = {
    Teclados: <KeyboardIcon size={16} />,
    Monitores: <MonitorIcon size={16} />,
    Fones: <HeadphonesIcon size={16} />,
    Mousepads: <SquareIcon size={16} />,
    Speakers: <SpeakerIcon size={16} />,
    Mouses: <MouseIcon size={16} />
  }

  return (
    <Link href={`/category/${category.slug}`}>
      <Badge variant='outline' className="py-3 flex items-center justify-center gap-2 rounded-lg">
        {categoriesIcons[category.name as keyof typeof categoriesIcons]}
        <span className="font-semibold text-xs">{category.name}</span>
      </Badge>
    </Link>
  )
}

export default CategoryItem