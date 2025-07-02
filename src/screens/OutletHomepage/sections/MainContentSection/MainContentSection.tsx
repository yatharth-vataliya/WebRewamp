import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";

export const MainContentSection = (): JSX.Element => {
	// Status cards data
	const statusCards = [
		{
			icon: (
				<div className="bg-primarybrand inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] rounded-lg">
					<div className="relative w-6 h-6">
						<div className="relative w-[19px] h-5 top-0.5 left-0.5">
							<div className="relative h-5">
								<img
									className="absolute w-2 h-2 top-3 left-[11px]"
									alt="Vector"
									src="https://c.animaapp.com/mcljloy6PRR8g5/img/vector.svg"
								/>
								<img
									className="w-[18px] h-[17px] absolute top-0 left-0"
									alt="Vector"
									src="https://c.animaapp.com/mcljloy6PRR8g5/img/vector-1.svg"
								/>
								<div className="absolute w-[3px] h-[3px] top-[7px] left-1 bg-neutralwhite rounded-[1.4px]" />
								<div className="absolute w-[3px] h-[3px] top-[7px] left-[11px] bg-neutralwhite rounded-[1.4px]" />
							</div>
						</div>
					</div>
				</div>
			),
			title: "22 Ai Review",
			statuses: [
				{ label: "Manually Approve", count: 2, bgColor: "bg-[#fff0e5]", textColor: "text-errorcontent" },
				{ label: "Completed", count: 10, bgColor: "bg-successbg", textColor: "text-successcontent" },
				{ label: "Rejected by Ai", count: 10, bgColor: "bg-warningbg", textColor: "text-warningcontent" },
			],
		},
		{
			icon: (
				<div className="inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-predictionbg rounded-lg">
					<img
						className="relative w-6 h-6"
						alt="Task"
						src="https://c.animaapp.com/mcljloy6PRR8g5/img/task-1.svg"
					/>
				</div>
			),
			title: "22 Tasks",
			statuses: [
				{ label: "Ongoing", count: 10, bgColor: "bg-warningbg", textColor: "text-warningcontent" },
				{ label: "Overdue", count: 2, bgColor: "bg-[#fff0e5]", textColor: "text-errorcontent" },
				{ label: "Completed", count: 10, bgColor: "bg-successbg", textColor: "text-successcontent" },
				{ label: "Scheduled", count: 0, bgColor: "bg-[#f7edff]", textColor: "text-[#7955a3]" },
			],
		},
		{
			icon: (
				<div className="inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] bg-issuebg rounded-lg">
					<img
						className="relative w-6 h-6"
						alt="Alert circle"
						src="https://c.animaapp.com/mcljloy6PRR8g5/img/alert-circle.svg"
					/>
				</div>
			),
			title: "22 Issues",
			statuses: [
				{ label: "Ignored", count: 2, bgColor: "bg-[#fff0e5]", textColor: "text-errorcontent" },
				{ label: "Resolved", count: 10, bgColor: "bg-successbg", textColor: "text-successcontent" },
				{ label: "Open", count: 10, bgColor: "bg-warningbg", textColor: "text-warningcontent" },
			],
		},
		{
			icon: (
				<div className="bg-scheduledbg inline-flex items-center justify-center gap-2.5 p-1.5 relative flex-[0_0_auto] rounded-lg">
					<img
						className="relative w-6 h-6"
						alt="Layout alt"
						src="https://c.animaapp.com/mcljloy6PRR8g5/img/layout-alt-02-1.svg"
					/>
				</div>
			),
			title: "20 Forms",
			statuses: [
				{ label: "Open Responses", count: 0, bgColor: "bg-[#f7edff]", textColor: "text-[#7955a3]" },
				{ label: "Submitted Responses", count: 10, bgColor: "bg-successbg", textColor: "text-successcontent" },
				{ label: "Ongoing Tasks", count: 10, bgColor: "bg-warningbg", textColor: "text-warningcontent" },
			],
		},
	];

	// Work allocated tasks data
	const workAllocatedTasks = [
		{
			id: "3789",
			title: "How to Manage Stock",
			comments: 14,
			date: "22 June, 2024",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: false,
		},
		{
			id: "3789",
			title: "How to Manage Stock",
			comments: 14,
			date: "3 April, 2025",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: true,
		},
		{
			id: "7182",
			title: "Tracking Daily Earnings",
			comments: 18,
			date: "12 October, 2024",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: false,
		},
		{
			id: "6047",
			title: "Tool for Managing Reservations",
			comments: 17,
			date: "5 September, 2025",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: false,
		},
		{
			id: "6047",
			title: "Tool for Managing Reservations",
			comments: 17,
			date: "5 September, 2025",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: false,
		},
		{
			id: "4820",
			title: "Coordinating Employee Shifts",
			comments: 15,
			date: "10 July, 2025",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: false,
		},
		{
			id: "5913",
			title: "Reviewing Client Happiness",
			comments: 16,
			date: "1 August, 2024",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: false,
		},
		{
			id: "2456",
			title: "Ways to Prepare Meals",
			comments: 13,
			date: "15 May, 2024",
			time: "11:00 am",
			assignee: "A",
			status: "Ongoing",
			department: "Inventory",
			highlighted: false,
		},
	];

	// Employee progress data
	const employeeProgressData = [
		{ name: "Anita", department: "IT Services", assigned: 90, ongoing: 90, overdue: 90, completed: "90%" },
		{ name: "Rahul", department: "Human Resources", assigned: 31, ongoing: 31, overdue: 31, completed: "31%" },
		{ name: "Priya", department: "Sales Division", assigned: 45, ongoing: 45, overdue: 45, completed: "45%" },
		{ name: "Vikram", department: "Research and Development", assigned: 79, ongoing: 79, overdue: 79, completed: "79%" },
		{ name: "Sita", department: "Marketing Team", assigned: 52, ongoing: 52, overdue: 52, completed: "52%" },
		{ name: "Ravi", department: "Finance Department", assigned: 64, ongoing: 64, overdue: 64, completed: "64%" },
		{ name: "Kiran", department: "Customer Support", assigned: 87, ongoing: 87, overdue: 87, completed: "87%" },
	];

	// Notepad items
	const notepadItems = [
		{
			title: "Make shift & assign",
			description: "Assign individuals to specific shifts based on availability and role requirements",
		},
		{
			title: "Menu correction",
			description: "Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.",
		},
	];

	// Overdue tasks data
	const overdueTasks = [
		{ name: "Menu Planning", assignedTo: "Ajay", dueDate: "12-07-2024" },
		{ name: "Staff Scheduling", assignedTo: "Niraj", dueDate: "01-08-2023" },
		{ name: "Inventory management", assignedTo: "Vijay", dueDate: "02-09-2022" },
		{ name: "Customer Feedback Analysis", assignedTo: "Arvind", dueDate: "11-06-2025" },
		{ name: "Budget Forecasting", assignedTo: "Priya", dueDate: "04-11-2020" },
		{ name: "Marketing Strategy Development", assignedTo: "Suresh", dueDate: "10-05-2026" },
		{ name: "Quality Assurance Testing", assignedTo: "Fatima", dueDate: "03-10-2021" },
	];

	// Workflows data
	const workflows = [
		{ title: "Stock Control Strategies", responses: 47, tasks: 22 },
		{ title: "How to Handle Inventory", responses: 23, tasks: 15 },
		{ title: "Inventory Management Tips", responses: 56, tasks: 30 },
		{ title: "Managing Your Stock Effectively", responses: 89, tasks: 5 },
		{ title: "Optimizing Your Inventory", responses: 78, tasks: 12 },
		{ title: "Stock Management Techniques", responses: 34, tasks: 8 },
	];

	return (
		<div className="flex flex-col items-center gap-6 px-0 py-6 relative self-stretch overflow-y-auto overflow-x-hidden w-full">
			<div className="flex flex-col items-start gap-6 px-6 py-0 relative self-stretch w-full flex-[0_0_auto]">
				{/* Header with greeting and add widget button */}
				<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
					<div className="relative w-fit font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[#212121] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
						Good Evening ! Ajay
					</div>
					<Button variant="outline" className="inline-flex border rounded-xl items-center gap-1">
						<img
							className="w-4 h-4"
							alt="Dashboard"
							src="https://c.animaapp.com/mcljloy6PRR8g5/img/dashboard.svg"
						/>
						<span className="font-text-small-medium">Add Widget</span>
					</Button>
				</div>
				{/* Status cards */}
				<div className="flex items-center gap-6 relative self-stretch w-full flex-[0_0_auto] overflow-x-auto pb-2">
					{statusCards.map((card, index) => (
						<Card key={index} className="inline-flex flex-col items-start gap-3 p-4 relative flex-[0_0_auto] bg-white rounded-xl border border-solid border-[#ebebeb] min-w-[250px] md:min-w-0">
							<CardHeader className="flex flex-row items-center gap-3 relative self-stretch w-full flex-[0_0_auto] p-0">
								{card.icon}
								<CardTitle className="relative w-fit font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] whitespace-nowrap [font-style:var(--text-base-semibold-font-style)]">
									{card.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="inline-flex items-start gap-2 relative flex-[0_0_auto] p-0 flex-wrap">
								{card.statuses.map((status, statusIndex) => (
									<div key={statusIndex} className="inline-flex items-center gap-1 relative flex-[0_0_auto] mb-1">
										<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
											{status.label}
										</div>
										<Badge variant="outline" className={`flex flex-col w-5 items-center justify-center gap-2.5 px-[3px] py-0 relative ${status.bgColor} rounded-full`}>
											<div className={`relative self-stretch mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] ${status.textColor} text-[length:var(--text-small-regular-font-size)] text-center tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]`}>
												{status.count}
											</div>
										</Badge>
									</div>
								))}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			{/* Work Allocated Section */}
			<div className="flex flex-col items-start gap-6 pt-0 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto]">
				<Card className="flex flex-col h-[280px] items-start relative self-stretch w-full bg-white rounded-xl overflow-hidden border border-solid border-[#ebebeb]">
					<CardHeader className="flex w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#ebebeb]  px-[12px] pt-[12px] pb-0">
						<div className="flex flex-row gap-[16px]">
							<CardTitle className="grow w-full md:w-[510px] h-[22px] mt-[-1.00px] font-text-base-semibold font-[number:var(--text-base-semibold-font-weight)] text-[#212121] text-[length:var(--text-base-semibold-font-size)] tracking-[var(--text-base-semibold-letter-spacing)] leading-[var(--text-base-semibold-line-height)] whitespace-nowrap [font-style:var(--text-base-semibold-font-style)]">
								Work Allocated
							</CardTitle>
							<div className="items-start flex-[0_0_auto] inline-flex relative">
								<div className="bg-neutrallight-bg inline-flex items-start gap-4 relative flex-[0_0_auto] rounded-lg">
									<div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
										<Button variant="ghost" className="h-8 items-center gap-2 px-3 py-[8.5px] rounded-lg overflow-hidden inline-flex relative">
											<div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-2.50px] mb-[-2.50px]">
												<div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
													<div className="mt-[-1.00px] text-[#212121] relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
														Select Employee
													</div>
												</div>
											</div>
											<img
												className="relative w-4 h-4 mt-[-0.50px] mb-[-0.50px]"
												alt="Chevron down"
												src="https://c.animaapp.com/mcljloy6PRR8g5/img/chevron-down.svg"
											/>
										</Button>
									</div>
								</div>
							</div>
							<Button variant="ghost" size="icon" className="w-8 h-8">
								<img
									className="relative w-5 h-5"
									alt="Dots horizontal"
									src="https://c.animaapp.com/mcljloy6PRR8g5/img/dots-horizontal.svg"
								/>
							</Button>
						</div>
						<Tabs defaultValue="tasks" className="w-full">
							<TabsList className="inline-flex items-start gap-2 relative flex-[0_0_auto] bg-transparent p-0 h-auto">
								<TabsTrigger
									value="tasks"
									className="inline-flex flex-col items-center gap-1.5 pt-0.5 pb-0 px-0 relative flex-[0_0_auto] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
								>
									<div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
										<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-brandprimary text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
											Tasks
										</div>
										<div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-brandlight rounded-[999999px] overflow-hidden">
											<div className="w-fit mt-[-0.20px] text-brandprimary text-center whitespace-nowrap relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
												10
											</div>
										</div>
									</div>
									<div className="relative self-stretch w-full h-0.5 bg-brandprimary rounded-[4px_4px_0px_0px]" />
								</TabsTrigger>
								<TabsTrigger
									value="issues"
									className="inline-flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 relative flex-[0_0_auto] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
								>
									<div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
										<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
											Issues
										</div>
										<div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-neutralbg rounded-[999999px] overflow-hidden">
											<div className="w-fit mt-[-0.20px] text-[#212121] text-center whitespace-nowrap relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
												10
											</div>
										</div>
									</div>
								</TabsTrigger>
								<TabsTrigger
									value="forms"
									className="inline-flex flex-col h-[30px] items-center gap-2 pt-0.5 pb-0 px-0 relative flex-[0_0_auto] data-[state=active]:shadow-none data-[state=active]:bg-transparent"
								>
									<div className="inline-flex items-center justify-center gap-1 px-2 py-0 relative flex-[0_0_auto]">
										<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
											Forms
										</div>
										<div className="flex flex-col w-5 h-5 items-center justify-center gap-2.5 px-[3px] py-0 relative bg-neutralbg rounded-[999999px] overflow-hidden">
											<div className="w-fit mt-[-0.20px] text-[#212121] text-center whitespace-nowrap relative font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] [font-style:var(--text-small-regular-font-style)]">
												10
											</div>
										</div>
									</div>
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</CardHeader>
					<CardContent className="flex flex-col items-start gap-4 p-4 relative flex-1 self-stretch w-full grow bg-white overflow-y-auto">
						<div className="flex flex-col items-start gap-4 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]">
							{/* First row of tasks */}
							<div className="flex flex-wrap gap-4 overflow-hidden">
								{workAllocatedTasks.map((task, index) => (
									<Card
										key={index}
										className={`flex w-full flex-col items-start gap-2 p-3 relative flex-1 grow bg-white rounded-lg border border-solid border-[#ebebeb] hover:shadow-[0px_2px_4px_-1px_#0000000f,0px_4px_6px_-1px_#0000001a] w-[376px] min-w-[376px]`}
									>
										<div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
											<div className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto]">
												<div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
													<img
														className="relative w-4 h-4"
														alt="Chevron up"
														src="https://c.animaapp.com/mcljloy6PRR8g5/img/chevron-up.svg"
													/>
													<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
														ID #{task.id}
													</div>
												</div>
												<div className="relative w-fit font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#212121] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
													{task.title}
												</div>
											</div>
											<div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
												<div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
													<img
														className="relative w-4 h-4"
														alt="Message circle"
														src="https://c.animaapp.com/mcljloy6PRR8g5/img/message-circle-02.svg"
													/>
													<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
														{task.comments}
													</div>
												</div>
											</div>
										</div>
										<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
											<div className="flex items-center gap-3 w-full">
												<div className="flex gap-0.5">
													<img
														className="relative w-4 h-4"
														alt="Calendar dotted"
														src="https://c.animaapp.com/mcljloy6PRR8g5/img/calendar-dotted.svg"
													/>
													<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
														{task.date}
													</div>
												</div>
												<div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
													<img
														className="relative w-4 h-4"
														alt="Clock"
														src="https://c.animaapp.com/mcljloy6PRR8g5/img/clock.svg"
													/>
													<div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
														{task.time}
													</div>
												</div>
												<div className="ml-auto">
													<Avatar className="flex flex-col w-8 h-8 items-center justify-center relative bg-brandprimary rounded-[99999px]">
														<AvatarFallback className="relative w-fit mt-[-6.00px] mb-[-4.00px] font-text-base-medium font-[number:var(--text-base-medium-font-weight)] text-white text-[length:var(--text-base-medium-font-size)] tracking-[var(--text-base-medium-letter-spacing)] leading-[var(--text-base-medium-line-height)] whitespace-nowrap [font-style:var(--text-base-medium-font-style)]">
															A
														</AvatarFallback>
													</Avatar>
												</div>
											</div>
										</div>
										<div className="flex gap-[8px] w-full">
											<img
												className="w-5 h-5"
												alt="forms"
												src="https://c.animaapp.com/mcljloy6PRR8g5/img/layout-alt-02.svg"
											/>
											<div className="w-[60px] text-center" style={{
												borderRadius: '6px',
												borderWidth: '0.5px',
												borderColor: 'rgba(255, 221, 157, 1)',
												color: 'rgba(217, 165, 65, 1)',
												backgroundColor: 'rgba(255, 248, 229, 1)',
												fontSize: '12px',
												fontWeight: '400px',
												fontFamily: 'Inter',
											}}>Ongoing</div>
											<div className="px-[6px] ml-auto" style={{
												borderRadius: '8px',
												gap: '4px',
												display: 'flex',
												alignItems: 'center',
												backgroundColor: 'rgba(242, 244, 246, 1)',
												color: 'rgba(33, 33, 33, 1)',
												fontSize: '12px',
												fontWeight: '400px',
												fontFamily: 'Inter',
											}}>
											<img
												className="w-5 h-5 ml-auto"
												alt="forms"
												src="https://c.animaapp.com/mcljloy6PRR8g5/img/layout-alt-02.svg"
											/>
											Inventory
											</div>
										</div>
									</Card>
								))}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
