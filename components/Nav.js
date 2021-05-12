import leagues from "../utils/leagues"
import { useRouter } from "next/router"

function Nav() {
    const router = useRouter();

    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-10 overflow-x-scroll scrollbar-hide">
                {Object.entries(leagues).map(([key, { title, name, id }]) => (
                    <h2 key={key}
                        onClick={() => router.push(`/?id=${id}`)}
                        className="last:pr-24 cursor-pointer transition duration-100 hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    )
}

export default Nav
