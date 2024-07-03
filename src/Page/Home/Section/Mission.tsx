import { MdArrowOutward } from 'react-icons/md';
import doctorImg from '../../../assets/Rectangle 24.png';

const Mission = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 lg:mt-32">
			<div className="max-w-lg space-y-4 flex flex-col justify-between">
				<p className="py-2 px-4 border-2 border-black w-fit rounded-3xl">Who we are</p>
				<h1 className="text-3xl font-bold">We Help To Get Soulions</h1>
				<p>
					We are proud to be a trusted healthcare provider in our community, and we look
					forward to serving you and your family with excellence, integrity, and
					compassion. Your health is our priority, and we are here for you every step of
					the way. We believe in treating each patient with dignity, respect, and empathy,
					ensuring that they receive the attention and care they deserve.
				</p>
				<a className="btn bg-yellow-400 border-none w-40">
					Learn more <MdArrowOutward className="text-2xl " />
				</a>
			</div>
			<div className="relative">
				<div className="bg-[#343268] text-white rounded-2xl scale-75 lg:scale-100 max-w-sm py-7 px-4 absolute bottom-0 -left-10 lg:bottom-0 lg:-left-20">
					<p className="text-2xl ">Our mission is simple</p>
					<p>
						To provide high-quality healthcare services that are accessible,
						personalized, and patient-centered.
					</p>
				</div>
				<img src={doctorImg} />
			</div>
		</div>
	);
};

export default Mission;
