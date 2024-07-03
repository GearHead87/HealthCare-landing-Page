import { MdArrowOutward } from 'react-icons/md';
import BackgroundImg from '../../../assets/Rectangle 32.png';
import logo from '../../../assets/logo light.png';

const Offer = () => {
	return (
		<div>
			<div
				className="Rectangle6 mx-auto flex flex-col justify-center gap-6 mt-4 p-4 sm:px-8 md:px-16 relative"
				style={{
					width: '100%',
					maxWidth: 1160,
					height: 'auto',
					minHeight: 470,
					background: `radial-gradient(648.07% 142.88% at 98.23% 78.35%, #020043 0%, rgba(2, 0, 67, 0.30) 100%), url(${BackgroundImg})`,
					borderRadius: 48,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-xs sm:max-w-md md:max-w-sm">
					Get Your First Appointment at 50% Off!
				</h1>
				<div className="space-x-0 sm:space-x-5 flex flex-col sm:flex-row gap-3 sm:gap-0">
					<a className="btn bg-yellow-400 border-none w-full sm:w-40 text-center">
						Learn more <MdArrowOutward className="text-2xl inline-block" />
					</a>
					<a className="btn bg-transparent w-full sm:w-40 text-white border-white text-center">
						Appointment <MdArrowOutward className="text-2xl inline-block" />
					</a>
				</div>
				<img
					src={logo}
					className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-16 md:right-16 w-16 sm:w-24 md:w-auto"
				/>
			</div>
		</div>
	);
};

export default Offer;
