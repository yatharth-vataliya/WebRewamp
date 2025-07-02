import React from "react";
import { Button } from "../../../../components/ui/button";
import { Calendar } from "../../../../components/ui/calendar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../../../../components/ui/popover";

export const HeaderSection = (): JSX.Element => {
	// Logo data
	const logoData = {
		mainLogo: "https://c.animaapp.com/mcljloy6PRR8g5/img/group-3.png",
		logoElements: [
			{
				src: "https://c.animaapp.com/mcljloy6PRR8g5/img/group-4.png",
				className: "absolute w-3.5 h-[5px] top-0 left-2.5",
			},
			{
				src: "https://c.animaapp.com/mcljloy6PRR8g5/img/vector-2.svg",
				className: "absolute w-[17px] h-0.5 top-[9px] left-[9px]",
			},
			{
				src: "https://c.animaapp.com/mcljloy6PRR8g5/img/vector-4.svg",
				className: "absolute w-3.5 h-[9px] top-3.5 left-2.5",
			},
		],
		textElements: [
			{
				src: "https://c.animaapp.com/mcljloy6PRR8g5/img/group.png",
				className: "absolute w-[49px] h-[11px] top-2.5 left-0",
			},
			{
				src: "https://c.animaapp.com/mcljloy6PRR8g5/img/group-1.png",
				className: "absolute w-[35px] h-[5px] top-px left-0",
			},
			{
				src: "https://c.animaapp.com/mcljloy6PRR8g5/img/group-2.png",
				className: "absolute w-[9px] h-1.5 top-0 left-[18px]",
			},
		],
	};

	return (
		<header className="flex w-full items-center gap-2 md:gap-9 pl-3 pr-6 py-3 relative flex-[0_0_auto] bg-white border-b border-[#ebebeb]">
			{/* Logo Section */}
			<div className="flex w-44 h-8 items-center gap-2 relative">
				<div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
					<div className="relative w-[85.74px] h-8">
						<div className="absolute w-[49px] h-[21px] top-1 left-[37px]">
							<img
								className="absolute w-[49px] h-[11px] top-2.5 left-0"
								alt="Tasks logo text"
								src="https://c.animaapp.com/mcljloy6PRR8g5/img/group.png"
							/>

							<div className="absolute w-[35px] h-1.5 top-0 left-0">
								<div className="relative h-1.5">
									<img
										className="absolute w-[35px] h-[5px] top-px left-0"
										alt="Tasks logo element"
										src="https://c.animaapp.com/mcljloy6PRR8g5/img/group-1.png"
									/>

									<img
										className="absolute w-[9px] h-1.5 top-0 left-[18px]"
										alt="Tasks logo element"
										src="https://c.animaapp.com/mcljloy6PRR8g5/img/group-2.png"
									/>
								</div>
							</div>
						</div>

						<div className="absolute w-8 h-8 top-0 left-0 bg-[url(https://c.animaapp.com/mcljloy6PRR8g5/img/group-3.png)] bg-[100%_100%]">
							<img
								className="absolute w-3.5 h-[5px] top-0 left-2.5"
								alt="Logo element"
								src="https://c.animaapp.com/mcljloy6PRR8g5/img/group-4.png"
							/>

							<img
								className="absolute w-[17px] h-0.5 top-[9px] left-[9px]"
								alt="Logo element"
								src="https://c.animaapp.com/mcljloy6PRR8g5/img/vector-2.svg"
							/>

							<img
								className="absolute w-3.5 h-[9px] top-3.5 left-2.5"
								alt="Logo element"
								src="https://c.animaapp.com/mcljloy6PRR8g5/img/vector-4.svg"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Navigation and Actions Section */}
			<div className="flex items-center justify-between relative flex-1 grow overflow-x-auto">
				{/* Home Navigation */}
				<div className="inline-flex items-center relative flex-[0_0_auto]">
					<Button
						variant="ghost"
						className="inline-flex items-center gap-1 h-8 px-2 py-1"
					>
						<img
							className="w-5 h-5"
							alt="Home"
							src="https://c.animaapp.com/mcljloy6PRR8g5/img/home-03.svg"
						/>
						<span className="font-text-small-regular text-[#212121] hidden sm:inline">Home</span>
					</Button>
				</div>

				{/* Right Side Actions */}
				<div className="inline-flex items-center gap-1 md:gap-3 relative flex-[0_0_auto]">
					{/* Notification Button */}
					<Button
						variant="ghost"
						size="icon"
						className="w-8 h-8 p-[3.2px] rounded-[6.4px]"
					>
						<div className="relative w-5 h-5">
							<div className="relative w-4 h-4 top-0.5 left-0.5">
								<div className="relative h-[17px] -top-px -left-px">
									<img
										className="absolute w-1.5 h-1.5 top-2.5 left-2.5"
										alt="Vector"
										src="https://c.animaapp.com/mcljloy6PRR8g5/img/vector.svg"
									/>
									<img
										className="w-4 h-[15px] absolute top-0 left-0"
										alt="Vector"
										src="https://c.animaapp.com/mcljloy6PRR8g5/img/vector-1-1.svg"
									/>
									<div className="absolute w-2 h-0.5 top-1.5 left-1">
										<div className="left-0 absolute w-0.5 h-0.5 top-0 bg-[#212121] rounded-[1.17px]" />
										<div className="left-1.5 absolute w-0.5 h-0.5 top-0 bg-[#212121] rounded-[1.17px]" />
									</div>
								</div>
							</div>
						</div>
					</Button>

					{/* Bell Notification Button */}
					<Button variant="ghost" size="icon" className="w-8 h-8">
						<img
							className="w-5 h-5"
							alt="Bell"
							src="https://c.animaapp.com/mcljloy6PRR8g5/img/bell-01.svg"
						/>
					</Button>

					{/* Date Picker */}
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="bg-neutralbg h-8 px-4 py-[8.5px] rounded-lg hidden md:flex"
							>
								<span className="text-[#212121] font-text-small-regular mr-2">
									24-03-2001
								</span>
								<img
									className="w-4 h-4"
									alt="Calendar"
									src="https://c.animaapp.com/mcljloy6PRR8g5/img/calendar-dotted-8.svg"
								/>
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<div className="p-2">
								<div className="flex items-center justify-between mb-2">
									<h3 className="font-text-base-medium text-[#212121]">Select Date</h3>
									<Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-full">
										<img
											className="w-4 h-4"
											alt="Close"
											src="https://c.animaapp.com/mcljloy6PRR8g5/img/x.svg"
										/>
									</Button>
								</div>
								<Calendar mode="single" className="border-t border-[#ebebeb] pt-2" />
								<div className="flex justify-end gap-2 mt-2 pt-2 border-t border-[#ebebeb]">
									<Button variant="outline" className="h-8 rounded-lg">Cancel</Button>
									<Button className="h-8 rounded-lg bg-brandprimary text-white">Apply</Button>
								</div>
							</div>
						</PopoverContent>
					</Popover>

					{/* Outlet Selector */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="outline"
								className="bg-neutralbg h-8 px-4 py-[8.5px] rounded-lg hidden md:flex"
							>
								<img
									className="w-4 h-4 mr-2"
									alt="Building"
									src="https://c.animaapp.com/mcljloy6PRR8g5/img/building-05.svg"
								/>
								<span className="text-[#212121] font-text-small-regular mr-2">
									Outlet name
								</span>
								<img
									className="w-4 h-4"
									alt="Chevron down"
									src="https://c.animaapp.com/mcljloy6PRR8g5/img/chevron-down-2.svg"
								/>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{/* Outlet options would go here */}
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Divider */}
					<div className="relative self-stretch w-px bg-[#ebebeb] rounded-full hidden md:block" />

					{/* Create Button */}
					<Button className="bg-brandprimary h-8 px-3.5 py-1.5 rounded-lg text-white">
						<img
							className="w-4 h-4 mr-1"
							alt="Plus"
							src="https://c.animaapp.com/mcljloy6PRR8g5/img/plus.svg"
						/>
						<span className="font-text-small-medium hidden sm:inline">Create</span>
					</Button>
				</div>
			</div>
		</header>
	);
};

