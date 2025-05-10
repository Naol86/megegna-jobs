import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b py-2 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-[#ff4716]" />
          <span className="text-xl font-bold">Megegna Jobs</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-[#ff4716] transition-colors">
            About Us
          </Link>
          <Link href="#process" className="text-sm font-medium hover:text-[#ff4716] transition-colors">
            Process
          </Link>
          <Link href="#why" className="text-sm font-medium hover:text-[#ff4716] transition-colors">
            Why Us
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-[#ff4716] transition-colors">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* <Button variant="outline" size="sm" className="hidden md:flex">
            Log In
          </Button> */}
          {/* <Button size="sm" className="bg-[#ff4716] hover:bg-[#e03e10] text-white">
            Sign Up
          </Button> */}

          <Button size="sm" className="bg-[#ff4716] hover:bg-[#e03e10] text-white">
            Join out Telegram
          </Button>
        </div>
      </div>
    </header>
  )
}
