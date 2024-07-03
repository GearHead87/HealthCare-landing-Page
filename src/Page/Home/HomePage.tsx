import NavBar from '../../components/shared/NavBar';
import Faq from './Section/Faq';
import Hero from './Section/Hero';
import Mission from './Section/Mission';
import Service from './Section/Service';
import Statistics from './Section/Statistics';
import Testimonial from './Section/Testimonial';

const HomePage = () => {
	return (
		<div>
			<NavBar />
			<Hero />
			<Statistics />
			<Mission />
			<Service />
			<Testimonial />
			<Faq />
		</div>
	);
};

export default HomePage;
