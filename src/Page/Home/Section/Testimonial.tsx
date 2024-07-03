import person1 from '../../../assets/person1.svg';
import person2 from '../../../assets/person2.svg';
import person3 from '../../../assets/person3.svg';
import stars from '../../../assets/stars.svg';

const Testimonial = () => {
	return (
		<div className="mt-10">
			<div className="space-y-4 flex flex-col justify-between mb-10">
				<p className="py-2 px-4 border-2 border-black w-fit rounded-3xl">Testimonial</p>
				<h1 className="text-3xl font-bold">What they say about us</h1>
			</div>
			<div className="grid grid-cols-3 gap-6">
				{/* First Testimonial */}
				<div className="space-y-4 p-5 rounded-lg bg-[#FFFFF5] flex flex-col justify-around">
					<h2 className="text-lg font-semibold">Expertise and Compassion Combined</h2>
					<p className="text-[#4D4C7B]">
						I can't thank enough for their exceptional care. The doctors and staff
						showed incredible expertise and compassion throughout my treatment journey.
						I felt truly cared for every step of the way.
					</p>
					<div className="flex items-center gap-4 mt-4">
						<img src={person1} />
						<div className="space-y-2">
							<p>
								<span className="font-semibold">Sarah D</span>, IT Professional
							</p>
							<img src={stars} />
						</div>
					</div>
				</div>
				{/* First Testimonial */}
				<div className="space-y-4 p-5 rounded-lg bg-[#FFFFF5] flex flex-col justify-around">
					<h2 className="text-lg font-semibold">
						Life-Saving Care, Life-Changing Experience
					</h2>
					<p className="text-[#4D4C7B]">
						My experience at [Healthcare Provider Name] was life-changing. The prompt
						and accurate diagnosis, coupled with the advanced treatments they provided,
						saved my life.
					</p>
					<div className="flex items-center gap-4 mt-4 ">
						<img src={person2} />
						<div className="space-y-2">
							<p>
								<span className="font-semibold">Michael R</span>, Business Executive
							</p>
							<img src={stars} />
						</div>
					</div>
				</div>
				{/* First Testimonial */}
				<div className="space-y-4 p-5 rounded-lg bg-[#FFFFF5] flex flex-col justify-around">
					<h2 className="text-lg font-semibold">A Partner in Health and Wellness</h2>
					<p className="text-[#4D4C7B]">
						As a busy professional, I appreciate the convenience and quality of care I
						receive at [Healthcare Provider Name]. From telemedicine consultations to
						routine check-ups, they've become my trusted partner in health and
					</p>
					<div className="flex items-center gap-4 mt-4 ">
						<img src={person3} />
						<div className="space-y-2">
							<p>
								<span className="font-semibold">David S</span>, Lawyer
							</p>
							<img src={stars} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
