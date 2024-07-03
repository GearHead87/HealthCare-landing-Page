import BackgroundImg from '../../../assets/Rectangle 5.png';
const Hero = () => {
	return (
		<div className='mt-10'>
			<div
				className="mx-auto mt-4 w-full max-w-7xl h-60 sm:h-80 md:h-96 lg:h-[470px] rounded-3xl"
				style={{
					background: `linear-gradient(179deg, rgba(0, 193, 157, 0) -25.42%, rgba(2, 0, 67, 0.47) 107.11%), url(${BackgroundImg}) center center / cover no-repeat`,
				}}
			/>
		</div>
	);
};

export default Hero;
