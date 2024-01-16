function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

interface TabsProps {
	tabs: string[];
	currentTab: string;
	setCurrentTab: (tab: string) => void;
}

export default function Tabs({ tabs, currentTab, setCurrentTab }: TabsProps) {
	return (
		<div className="block">
			<div className="border-b border-gray-200">
				<nav className="-mb-px flex flex-row gap-4" aria-label="Tabs">
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setCurrentTab(tab)}
							className={classNames(
								tab === currentTab
									? "border-gray-500 text-black"
									: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
								"border-b-2 py-4 px-1 text-center text-sm font-medium"
							)}
						>
							{tab}
						</button>
					))}
				</nav>
			</div>
		</div>
	);
}
