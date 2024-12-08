import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { GitHubLogoIcon } from '@radix-ui/react-icons'

import rentalImg from "../assets/rental.svg"
import driverImg from "../assets/driver.svg"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
export function Signin(){

    return (
        <main className="h-screen flex w-full">
            <div className="bg-primary-foreground w-full h-full flex p-16">
                <Carousel  className="w-full max-w-xl">
                    <CarouselContent>
                        <CarouselItem>
                        <div className="flex aspect-square rounded justify-center p-8">
                            <img src={rentalImg} alt="Aluguel de carros" />
                        </div>
                        </CarouselItem>
                        <CarouselItem>
                        <div className="flex aspect-square rounded justify-center p-8">
                            <img src={driverImg} alt="motorista" />
                        </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext/>
                </Carousel>

            </div>
            <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold tracking-tighter">Entre com sua conta</CardTitle>
                        <CardDescription>
                            Utilize seu email e senha ou o github para entrar.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input id="email " placeholder="exemplo@email.com" type="email"/>
                        </div>
                            <div className="mt-4">
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password " placeholder="sua senha" type="password"/>
                        </div>
                        <Button className="mt-6 w-full">Entrar</Button>
                        <div className="flex items-center gap-6 mt-4">
                        </div>
                        <Button variant="outline" className="mt-4 w-full"><GitHubLogoIcon className="mr-2"/> Entrar com GitHub</Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-muted-foreground text-center text-">Ao entrar na nossa plataforma voce concorda com nossos termos de uso e politica de privacidade</p>
                    </CardFooter>
                </Card>
            </section>
        </main>


        

    )
}