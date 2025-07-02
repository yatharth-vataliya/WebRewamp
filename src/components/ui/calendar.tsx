import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3", className)}
			classNames={{
				months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "text-sm font-medium text-[#212121]",
				nav: "space-x-1 flex items-center",
				nav_button: cn(
					"h-7 w-7 p-0 flex items-center justify-center rounded-full bg-neutralbg hover:bg-neutrallight-bg",
				),
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				table: "w-full border-collapse space-y-1",
				head_row: "flex",
				head_cell: "text-neutralsub-content w-8 font-normal text-[0.8rem]",
				row: "flex w-full mt-2",
				cell: cn(
					"relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
					props.mode === "range" ? "" : "",
				),
				day: cn(
					"h-8 w-8 p-0 font-normal rounded-full flex items-center justify-center mx-auto hover:bg-neutrallight-bg focus:outline-none",
				),
				day_range_start: "day-range-start",
				day_range_end: "day-range-end",
				day_selected:
					"bg-brandprimary text-white hover:bg-brandprimary hover:text-white focus:bg-brandprimary focus:text-white",
				day_today: "border border-brandprimary text-brandprimary",
				day_outside:
					"text-neutralsub-content opacity-50",
				day_disabled: "text-neutralsub-content opacity-30",
				day_range_middle: "bg-neutrallight-bg",
				day_hidden: "invisible",
				...classNames,
			}}
			components={{
				IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-4 w-4 text-[#212121]" />,
				IconRight: ({ ...props }) => <ChevronRightIcon className="h-4 w-4 text-[#212121]" />,
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };

