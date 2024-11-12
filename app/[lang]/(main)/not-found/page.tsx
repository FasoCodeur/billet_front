import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function NotFound() {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">Desolé, vous ne trouvez pas ce que vous chercher</h1>
        <p className="text-gray-700">rediriger vous vers la page d'acceuil et commander vite votre billet</p>
      {/*  Home button */}
        <Link href="/">
          <Button className="text-white bg-primary px-4 py-2 rounded-md">
            Acceuil
        </Button>
        </Link>
      </div>
    </div>
  )
}
