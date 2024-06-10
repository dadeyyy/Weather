import Image from "next/image"
import Link from "next/link"

const BackHome = () => {
  return (
    <Link href={'/'} className="bg-slate-500 py-3 rounded-xl text-sm sm:text-base hover:bg-sky-500 flex justify-center items-center gap-2 px-2 max-w-[170px]">
        <Image src={'/home.png'} height={30} width={30} alt="home"/>
        Back to home
    </Link>
  )
}

export default BackHome