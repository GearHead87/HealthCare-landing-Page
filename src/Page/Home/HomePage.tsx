import NavBar from '../../components/shared/NavBar';
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
		</div>
	);
};

export default HomePage;
