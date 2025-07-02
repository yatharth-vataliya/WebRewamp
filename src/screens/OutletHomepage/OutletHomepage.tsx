import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";

export const OutletHomepage = (): JSX.Element => {
	return (
		<main
			className="flex flex-col min-h-screen items-start relative bg-white overflow-hidden"
			data-model-id="6094:150725"
		>
			<HeaderSection />
			<div className="flex flex-col md:flex-row items-start relative flex-1 grow w-full overflow-hidden">
				<NavigationMenuSection />
				<MainContentSection />
			</div>
		</main>
	);
};

