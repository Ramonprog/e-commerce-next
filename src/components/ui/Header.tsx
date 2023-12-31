'use client'
import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { Button } from "./button"
import { Card } from "./card"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./sheet"
import { signIn, useSession, signOut } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Separator } from "@radix-ui/react-separator"
import Link from "next/link"

const Header = () => {

    const { status, data } = useSession()

    const handleLoginClick = async () => await signIn()
    const handleLogoutClick = async () => await signOut()


    return (
        <Card className="flex items-center justify-between p-[1.875rem] ">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size='icon' variant='outline'>
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetTitle className="text-left text-lg font-semibold">
                        Menu
                    </SheetTitle>
                    <div className="mt-4 flex flex-col gap-2">

                        {status === 'authenticated' && data?.user && (
                            <div className="flex flex-col">
                                <div className="flex items-center gap-5 my-4">
                                    <Avatar>
                                        {data?.user?.name &&
                                            <AvatarFallback>{data?.user?.name[0].toLocaleUpperCase()}</AvatarFallback>
                                        }
                                        {data?.user?.image &&
                                            <AvatarImage className="rounded-full w-12" src={data?.user?.image} alt="Foto do usuario" />
                                        }
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <p className="font-medium">{data?.user?.name}</p>
                                        <p className="text-sm opacity-[0.4]">Boas compras!</p>
                                    </div>
                                </div>

                                <Separator />
                            </div>
                        )}

                        {status === 'unauthenticated' && (
                            <Button variant='outline' className="w-full justify-start gap-2" onClick={handleLoginClick}>
                                <LogInIcon size={16} />
                                Fazer Login
                            </Button>
                        )}
                        {status === 'authenticated' && (
                            <Button variant='outline' className="w-full justify-start gap-2" onClick={handleLogoutClick}>
                                <LogOutIcon size={16} />
                                Fazer Logout
                            </Button>
                        )}

                        <Button variant='outline' className="w-full justify-start gap-2">
                            <HomeIcon size={16} />
                            Início
                        </Button>
                        <Button variant='outline' className="w-full justify-start gap-2">
                            <PercentIcon size={16} />
                            Ofertas
                        </Button>
                        <SheetClose asChild>
                            <Link href={'/catalog'}>
                                <Button variant='outline' className="w-full justify-start gap-2">
                                    <ListOrderedIcon size={16} />
                                    Catálogo
                                </Button>
                            </Link>

                        </SheetClose>

                    </div>
                </SheetContent>
            </Sheet>
            <Link href={'/'}>
                <h1 className="font-semibold text-lg"> <span className="text-primary">Vale</span> Store</h1>
            </Link>

            <Button size='icon' variant='outline'>
                <ShoppingCartIcon />
            </Button>
        </Card>
    )
}

export default Header