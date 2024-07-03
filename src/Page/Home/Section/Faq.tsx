import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../../../components/ui/accordion';

const Faq = () => {
	return (
		<div className="mt-10">
			<div className="space-y-4 flex flex-col justify-between mb-10">
				<p className="py-2 px-4 border-2 border-black w-fit rounded-3xl">FAQ</p>
				<h1 className="text-3xl font-bold">Frequntly Asked Question</h1>
			</div>
			<div>
				<Accordion type="single" collapsible className="w-full">
					{/* Item 1 */}
					<AccordionItem value="item-1">
						<AccordionTrigger className="bg-[#FFFFF5] pl-10">
							What are your office hours?
						</AccordionTrigger>
						<AccordionContent className="pl-10">
							Our office hours vary by location, but typically we are open Monday
							through Friday from 8:00 AM to 5:00 PM. Some locations may offer
							extended hours or weekend appointments. Please contact your nearest
							clinic for specific hours.
						</AccordionContent>
					</AccordionItem>
					{/* Item 2 */}
					<AccordionItem value="item-2">
						<AccordionTrigger className="bg-[#FFFFF5] pl-10">
							How can I schedule an appointment?
						</AccordionTrigger>
						<AccordionContent className="pl-10">
							You can schedule an appointment by calling our office directly, visiting
							our website, or using our online appointment scheduling system. For
							specific instructions, please refer to our website or contact your
							nearest clinic.
						</AccordionContent>
					</AccordionItem>
					{/* Item 3 */}
					<AccordionItem value="item-3">
						<AccordionTrigger className="bg-[#FFFFF5] pl-10">
							Do you accept insurance?
						</AccordionTrigger>
						<AccordionContent className="pl-10">
							Yes, we accept most major insurance plans. Please check with our office
							to verify whether your insurance is accepted. You can also find a list
							of accepted insurance providers on our website.
						</AccordionContent>
					</AccordionItem>
					{/* Item 4 */}
					<AccordionItem value="item-4">
						<AccordionTrigger className="bg-[#FFFFF5] pl-10">
							What should I bring to my appointment?
						</AccordionTrigger>
						<AccordionContent className="pl-10">
							Please bring a valid photo ID, your insurance card, a list of any
							current medications you are taking, and any relevant medical records or
							referral letters. It's also helpful to bring a list of questions or
							concerns you may have for your provider.
						</AccordionContent>
					</AccordionItem>
					{/* Item 5 */}
					<AccordionItem value="item-5">
						<AccordionTrigger className="bg-[#FFFFF5] pl-10">
							Do you offer telemedicine appointments?
						</AccordionTrigger>
						<AccordionContent className="pl-10">
							Yes, we offer telemedicine appointments for certain types of
							consultations. Telemedicine allows you to consult with your provider
							remotely via video call. Please contact our office to see if
							telemedicine is an option for your specific needs and to schedule an
							appointment.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default Faq;
