const joinWhatsAppLink = "https://chat.whatsapp.com/Ia0edpckgudDyhK1vjiKv5";

export default function ShuttleHelpSection() {
	return (
		<div className="flex flex-col items-center gap-2">
			<h3 className="text-3xl font-bold">Need more help?</h3>
			<a href={joinWhatsAppLink} className="text-blue-500 underline text-base">
				Contact the arrival shuttle coordinators via WhatsApp
			</a>
		</div>
	);
}
