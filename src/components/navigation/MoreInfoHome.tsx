import Link from "next/link"

const MoreInfoHome = () => {
  return (
    <Link href={'/rain-gauge'} className="bg-slate-500 w-full py-3 px-2 rounded-xl text-sm sm:text-base hover:bg-sky-500 text-center">More Information</Link>
  )
}

export default MoreInfoHome