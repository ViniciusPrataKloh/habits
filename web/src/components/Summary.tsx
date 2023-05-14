import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { generateRangeDays } from "../utils/generate-range-days";
import { HabitsDay } from "./HabitsDay";

const weedDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const summaryDates = generateRangeDays();

const minimumSummaryDatesSize = 18 * 7;
const amountDaysToFill = minimumSummaryDatesSize - summaryDates.length;

type Summary = Array<{
    id: string;
    date: string;
    amount: number;
    completed: number;
}>;

export function Summary() {
    const [summary, setSummary] = useState<Summary>([]);

    useEffect(() => {
        api.get('summary').then(response => {
            setSummary(response.data);
        });
    }, []);

    return (
        <div className="w-full flex">

            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weedDays.map((weekDay, idx) => {
                    return (
                        <div key={`${weekDay}-${idx}`} className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
                            {weekDay}
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map((date) => {
                    const dayInSummary = summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day');
                    });

                    return (
                        <HabitsDay
                            key={date.toString()}
                            completed={dayInSummary?.completed}
                            amount={dayInSummary?.amount}
                            date={date}
                        />
                    )
                })}

                {amountDaysToFill > 0 && Array.from({ length: amountDaysToFill }).map((_, idx) => {
                    return (
                        <div
                            key={idx}
                            className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                        />
                    )
                })}
            </div>

        </div>
    );
}