

import img from "../IMG/pok1.png"
import img2 from "../IMG/pok2.png"
import img3 from "../IMG/perl1.webp"
import img4 from "../IMG/perl2.jpeg"
import img5 from "../IMG/Line 1.png"
import img6 from "../IMG/atk1.png"
import img7 from "../IMG/atk2.png"
import img8 from "../IMG/atk3.png"
import img9 from "../IMG/atk4.png"


export const Home = () => {
    return (
        <div className="flex justify-center mt-2 flex-col">
            <p className="text-white text-center font-medium text-2xl title">Battleground</p>
            <div className="flex justify-between items-center mt-10">
                <img className="image" src={img} alt="" width={100} />
                <p className="text-white px-2 py-1 rounded-md bg-[#151515] font-thin opacity-50">v/s</p>
                <img className="image1" src={img2} alt="" width={120} />
            </div>
            <div className="flex justify-between mt-5 mx-3">
                <div>
                    <div className="flex items-center gap-3">
                        <img className="rounded-full" src={img3} alt="esteban" width={25} />
                        <p className="text-white text-sm font-mono opacity-70">Esteban</p>
                    </div>
                    <div className="mt-2 flex gap-1">
                        <p className="px-2 sha py-1 rounded-md bg-[#00eeff] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                        <p className="px-2 sha py-1 rounded-md bg-[#00eeff] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                        <p className="px-2 sha py-1 rounded-md bg-[#00eeff] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                        <p className="px-2 sha py-1 rounded-md bg-[#00eeff] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                        <p className="px-2 py-1 rounded-md bg-[#151515] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                        <p className="px-2 py-1 rounded-md bg-[#151515] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                        <p className="px-2 py-1 rounded-md bg-[#151515] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                        <p className="px-2 py-1 rounded-md bg-[#151515] h-[5vh] w-[0.5vh] rotate-[15deg]"></p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-end gap-3">
                        <p className="text-white text-sm font-normal">Oscar</p>
                        <img className="rounded-full" src={img4} alt="esteban" width={25} />
                    </div>
                    <div className="mt-2 flex gap-1">
                        <p className="px-2 py-1 rounded-md bg-[#151515] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                        <p className="px-2 py-1 rounded-md bg-[#151515] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                        <p className="px-2 sho py-1 rounded-md bg-[#ffac50] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                        <p className="px-2 sho py-1 rounded-md bg-[#ffac50] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                        <p className="px-2 sho py-1 rounded-md bg-[#ffac50] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                        <p className="px-2 sho py-1 rounded-md bg-[#ffac50] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                        <p className="px-2 sho py-1 rounded-md bg-[#ffac50] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                        <p className="px-2 sho py-1 rounded-md bg-[#ffac50] h-[5vh] w-[0.5vh] rotate-[-15deg]"></p>
                    </div>
                </div>
            </div>
            <div className="mt-3 flex justify-center">
                <img src={img5} alt="" />
            </div>
            <div>
                <p className="text-white opacity-80 text-center mt-2 text-xl font-medium">Choose Your Attack</p>
            </div>
            <div className="mx-2 mt-4 flex justify-around">
                <div className="bg-[#222222] cont hover:bg-[#ffe4dd] hover:border-2 hover:font-semibold hover:border-[#ff562a] hover:text-[#ff562a] w-[23vh] h-[18vh] flex flex-col items-center rounded-lg py-1 px-3 ">
                    <img className="mt-[-10px] ima" src={img6} alt="" width={95} />
                    <p className="text-white text-sm font-mono opacity-70 texx">Giga Impact</p>
                </div>
                <div className="bg-[#222222] cont hover:bg-[#ffe4dd] hover:border-2 hover:font-semibold hover:border-[#ff562a] hover:text-[#ff562a] w-[23vh] h-[18vh] flex flex-col items-center rounded-lg py-1 px-3 ">
                    <img className="mt-[-30px] ima" src={img7} alt="" width={105} />
                    <p className="text-white text-sm font-mono opacity-70 texx">Aerial Ace</p>
                </div>
            </div>
            <div className="mx-2 mt-4 flex justify-around">
                <div className="bg-[#222222] cont hover:bg-[#ffe4dd] hover:border-2 hover:font-semibold hover:border-[#ff562a] hover:text-[#ff562a] w-[23vh] h-[18vh] flex flex-col items-center rounded-lg py-1 px-3 ">
                    <img className="mt-[-25px] ima" src={img8} alt="" width={95} />
                    <p className="text-white text-sm font-mono opacity-70 texx">Flamethrower</p>
                </div>
                <div className="bg-[#222222] cont hover:bg-[#ffe4dd] hover:border-2 hover:font-semibold hover:border-[#ff562a] hover:text-[#ff562a] w-[23vh] h-[18vh] flex flex-col items-center rounded-lg py-1 px-3 ">
                    <img className="mt-[-15px] ima " src={img9} alt="" width={99} />
                    <p className="text-white text-sm font-mono opacity-70 texx">Dragon Tail</p>
                </div>
            </div>


        </div>
    )
}