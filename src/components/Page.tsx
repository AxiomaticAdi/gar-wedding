export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col items-center max-w-2xl font-sans mx-auto">
			<div className="h-[10vh]"></div>
			{children}
		</div>
	);
}
