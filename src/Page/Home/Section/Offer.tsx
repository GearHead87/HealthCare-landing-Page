import { MdArrowOutward } from 'react-icons/md';
import BackgroundImg from '../../../assets/Rectangle 32.png';
import logo from '../../../assets/logo light.png';

const Offer = () => {
	return (
		<div>
			<div
				className="Rectangle6 mx-auto flex flex-col justify-center gap-6 mt-4 px-16 relative"
				style={{
					width: 1160,
					height: 470,
					background: `radial-gradient(648.07% 142.88% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%), url(${BackgroundImg})`,
					borderRadius: 48,
				}}
			>
				<h1 className="text-4xl font-semibold text-white max-w-sm">
					Get Your First Appointment at 50% Off!
				</h1>
				<div className="space-x-5">
					<a className="btn bg-yellow-400 border-none w-40">
						Learn more <MdArrowOutward className="text-2xl " />
					</a>
					<a className="btn bg-transparent w-40 text-white border-white">
						Appointment <MdArrowOutward className="text-2xl" />
					</a>
				</div>
				<img src={logo} className="absolute top-16 right-16" />
			</div>
		</div>
	);
};

export default Offer;
