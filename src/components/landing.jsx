import { useEffect, useState } from "react";
import BalloonDisplay from "./balloons";
import penguin from '../assets/images/animated-penguin.png'
import snowflake from '../assets/images/snowflake.png'

export default function Main() {
	const [slide1, setSlide1] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setSlide1(false);
		}, 6000);
		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<section className="overflow-hidden">
			{slide1 && <div className={`flex items-center justify-center min-h-screen h-screen w-full fadeOut`}>
				<h1 className="text-3xl font-bold">
					Happy birthday Azrah!!!🎂
				</h1>
			</div>}
            <div className={`h-screen w-screen ${!slide1?"translate-x-0":"translate-x-full"} transition-all duration-500`}>
                <Slide2 />
            </div>
			<BalloonDisplay />
		</section>
	);
}

function Slide2(){
    return (
        <section className="w-full h-full bg-purple-200s icyBg">
            <div className="container mx-auto px-3 flex items-center h-full flex-col md:flex-row gap-4 justify-center">
                <div className="relative w-full max-w-md">
                    <div className="w-32 h-32">
                        <img src={penguin} alt="" className="h-full w-full -scale-x-100" />
                    </div>
                    <div className="border rounded-md absolute top-3 left-[6rem] ml-1 bg-sky-200 px-2">
                        Happy birthday!!
                    </div>
                </div>
                <div className="w-full relative">
                    <div className="w-full text-neutral-800 bg-sky-200 rounded-md p-3 border font-mono text-sm">
                        Roses are red
                        <br />
                        Violets are blue
                        <br />
                        It's your birthday, Azrah, 
                        <br />
                        My heart is filled with love for you!
                        <br />
                        <br />
                        Happy Birthday!!
                        <br />
                        Enjoy your day
                        <br />
                        <br />
                        <small className="italic text-sky-900">- Rafey!</small>
                        <br />
                        <small className="font-mono">Realizes Poem doesn't make much sense, Paniks</small>
                    </div>
                    <div className="absolute top-1 right-0">
                        <img src={snowflake} alt="" className="w-12" draggable={false}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

