import { MdArrowOutward } from 'react-icons/md';
import serviesIMG1 from '../../../assets/service1.png';
import serviesIMG2 from '../../../assets/service2.png';
import serviesIMG3 from '../../../assets/service3.png';

const Service = () => {
	return (
		<div className="mt-32">
			<div className="grid grid-cols-2 gap-7">
				<div className="max-w-lg space-y-4 flex flex-col justify-between">
					<p className="py-2 px-4 border-2 border-black w-fit rounded-3xl">Who we are</p>
					<h1 className="text-3xl font-bold">We Help To Get Soulions</h1>
					<p>
						We are proud to be a trusted healthcare provider in our community, and we
						look forward to serving you and your family with excellence, integrity, and
						compassion. Your health is our priority, and we are here for you every step
						of the way. We believe in treating each patient with dignity, respect, and
						empathy, ensuring that they receive the attention and care they deserve.
					</p>
					<a className="btn bg-yellow-400 border-none w-40">
						Learn more <MdArrowOutward className="text-2xl " />
					</a>
				</div>
				<div className="relative">
					<div className="bg-[#020043] bg-opacity-60 max-w-sm text-white px-4 py-10 rounded-3xl absolute bottom-5 left-5">
						<p className="text-2xl font-semibold mb-2">Advanced Technology</p>
						<p>
							Our surgeons are trained in the latest robotic surgical techniques,
							which allow for greater precision
						</p>
						<MdArrowOutward className="bg-yellow-400 rounded-full text-base  p-3 size-12 text-white absolute right-6 bottom-6" />
					</div>
					<img src={serviesIMG1} className="rounded-3xl" />
				</div>
				<div className="relative">
					<div className="bg-[#020043] bg-opacity-60 max-w-sm text-white px-4 py-10 rounded-3xl absolute bottom-5 left-5">
						<p className="text-2xl font-semibold mb-2">Online Doctor Meet</p>
						<p>
							Our surgeons are trained in the latest robotic surgical techniques,
							which allow for greater precision
						</p>
						<MdArrowOutward className="bg-yellow-400 rounded-full text-base  p-3 size-12 text-white absolute right-6 bottom-6" />
					</div>
					<img src={serviesIMG2} className="rounded-3xl" />
				</div>
				<div className="relative">
					<div className="bg-[#020043] bg-opacity-60 max-w-sm text-white px-4 py-10 rounded-3xl absolute bottom-5 left-5">
						<p className="text-2xl font-semibold mb-2">Consultancy your health</p>
						<p>
							Our surgeons are trained in the latest robotic surgical techniques,
							which allow for greater precision
						</p>
						<MdArrowOutward className="bg-yellow-400 rounded-full text-base  p-3 size-12 text-white absolute right-6 bottom-6" />
					</div>
					<img src={serviesIMG3} className="rounded-3xl" />
				</div>
			</div>
		</div>
	);
};

export default Service;
