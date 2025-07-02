import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const NavigationMenuSection = (): JSX.Element => {
	const navigationItems = [
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/home-03-1.svg",
			label: "Home",
			active: true,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/task.svg",
			label: "Tasks",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/alert-circle-1.svg",
			label: "Issues",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/layout-alt-02.svg",
			label: "Forms",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/calendar-dotted-9.svg",
			label: "Calendar",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/layout-alt-03.svg",
			label: "Browse Templates",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/layout-alt-04.svg",
			label: "Temlate Library",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/users-01.svg",
			label: "User Management",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/line-chart-up-04.svg",
			label: "Reports",
			active: false,
		},
		{
			icon: "https://c.animaapp.com/mcljloy6PRR8g5/img/log-out-01.svg",
			label: "Log Out",
			active: false,
		},
	];

	return (
		<aside className="flex flex-col w-full md:w-[200px] items-center justify-between p-3 relative self-stretch bg-white border-b md:border-b-0 md:border-r [border-right-style:solid] border-[#ebebeb] overflow-y-auto">
			<nav className="flex md:flex-col items-start gap-1 self-stretch w-full flex-[0_0_auto] bg-white flex relative overflow-x-auto md:overflow-x-visible">
				<div className="flex md:flex-col w-full">
					{navigationItems.map((item, index) => (
						<Button
							key={index}
							variant="ghost"
							className={`w-auto md:w-full h-9 items-center gap-2 p-2 rounded-lg flex relative justify-start ${item.active ? "bg-brandlight text-brandprimary" : "text-[#212121]"
								}`}
						>
							<img
								className="relative w-5 h-5"
								alt={item.label}
								src={item.icon}
							/>
							<span className="text-left hidden md:inline flex-1 relative mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
								{item.label}
							</span>
						</Button>
					))}
				</div>
			</nav>

			<div className="hidden md:flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
				<Button
					variant="outline"
					className="bg-white shadow-[0px_1px_2px_#0000000f,0px_1px_3px_#0000001a] flex w-full h-9 items-center gap-2 p-2 relative rounded-lg justify-start"
				>
					<img
						className="relative w-5 h-5"
						alt="Message text circle"
						src="https://c.animaapp.com/mcljloy6PRR8g5/img/message-text-circle-02.svg"
					/>
					<span className="flex-1 text-[#212121] relative mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
						Chat
					</span>
				</Button>

				<div className="flex flex-col items-start gap-2 p-2 relative self-stretch w-full flex-[0_0_auto] bg-neutrallight-bg rounded-lg">
					<div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
						<Avatar className="flex flex-col w-8 h-8 items-center justify-center relative bg-brandprimary rounded-[99999px]">
							<AvatarFallback className="relative w-fit mt-[-6.00px] mb-[-4.00px] font-text-base-medium font-[number:var(--text-base-medium-font-weight)] text-white text-[length:var(--text-base-medium-font-size)] tracking-[var(--text-base-medium-letter-spacing)] leading-[var(--text-base-medium-line-height)] whitespace-nowrap [font-style:var(--text-base-medium-font-style)]">
								A
							</AvatarFallback>
						</Avatar>

						<div className="flex flex-col items-start relative flex-1 grow">
							<div className="relative self-stretch mt-[-1.00px] font-text-base-regular font-[number:var(--text-base-regular-font-weight)] text-[#212121] text-[length:var(--text-base-regular-font-size)] tracking-[var(--text-base-regular-letter-spacing)] leading-[var(--text-base-regular-line-height)] [font-style:var(--text-base-regular-font-style)]">
								Ajay
							</div>
							<div className="relative self-stretch -mt-0.5 font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
								Manager
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

