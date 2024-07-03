import logo from '../../assets/logo light.png';
import social from '../../assets/social.svg';
const Footer = () => {
	return (
		<div className='mt-36'>
			<footer className="footer bg-[#020043] text-white p-10">
				<aside>
					<img src={logo} />
					<p className="mt-5">
						123 Main Street Anytown, USA <br />
						Postal Code: 12345 <br />
						<br />
						Support: support@oyolloo.com <br />
						Available : 10:00am to 07:00pm
					</p>
				</aside>
				<nav>
					<a className="link link-hover">Home</a>
					<a className="link link-hover">About Us</a>
					<a className="link link-hover">Success Page</a>
					<a className="link link-hover">Terms And Condition</a>
				</nav>
				<nav>
					<a className="link link-hover">Services</a>
					<a className="link link-hover">Scheduling</a>
					<a className="link link-hover">Contact Us</a>
					<a className="link link-hover">Patient Portal</a>
				</nav>
				<nav>
					<a className="link link-hover">Follow Us</a>
					<img src={social} className="link link-hover" />
					<a className="link link-hover mt-10">@docplus 2024</a>
				</nav>
			</footer>
		</div>
	);
};

export default Footer;
