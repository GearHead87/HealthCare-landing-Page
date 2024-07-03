import BackgroundImg from '../../../assets/Rectangle 5.png';
const Hero = () => {
	return (
		<div>
			<div
				className="Rectangle6 mx-auto mt-4"
				style={{
					width: 1160,
					height: 470,
					background:
						`linear-gradient(179deg, rgba(0, 193, 157, 0) 0%, rgba(2, 0, 67, 0.47) 100%) , url(${BackgroundImg})`,
					borderRadius: 48,
				}}
			/>
		</div>
	);
};

export default Hero;
