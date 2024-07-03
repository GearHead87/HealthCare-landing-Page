import piechart from '../../../assets/pieChart.svg';
import certificate from '../../../assets/certified.svg';
import coins from '../../../assets/Coin.svg';
import video from '../../../assets/videoMessage.svg';
import avater from '../../../assets/Group 7.svg'

const Statistics = () => {
	return (
		<div className="bg-gray-100 py-12 mt-10 lg:mt-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-5xl font-extrabold text-gray-900">
						Comprehensive Care for Every Patient
					</h2>
				</div>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="text-4xl font-extrabold text-blue-600">90%</div>
						<p className="mt-2 text-sm text-gray-500">
							Patient satisfaction rate, reflecting our commitment.
						</p>
						<div className="mt-4">
							<img className="mx-auto" src={piechart} alt="Pie chart" />
						</div>
					</div>
					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="text-4xl font-extrabold text-blue-600">500+</div>
						<p className="mt-2 text-sm text-gray-500">Board-certified doctors</p>
						<div className="mt-4">
							<img className="mx-auto" src={certificate} alt="Certificate" />
						</div>
					</div>
					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="text-4xl font-extrabold text-yellow-400">4.8</div>
						<p className="mt-2 text-sm text-gray-500">Over 20,000 Patients</p>
						<div className="mt-4 flex justify-center">
							<img
								className="rounded-full"
								src={avater}
								alt="Avatar 1"
							/>
						</div>
					</div>
					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="text-4xl font-extrabold text-blue-600">$5000</div>
						<p className="mt-2 text-sm text-gray-500">Money spent for poor patients</p>
						<div className="mt-4">
							<img className="mx-auto" src={coins} alt="Coins" />
						</div>
					</div>
					<div className="bg-white rounded-lg shadow p-6 text-center">
						<div className="text-4xl font-extrabold text-blue-600">50+</div>
						<p className="mt-2 text-sm text-gray-500">Free lesson video for patients</p>
						<div className="mt-4">
							<img className="mx-auto" src={video} alt="Video" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
