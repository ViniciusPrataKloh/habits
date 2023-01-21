interface DayProps {
    day: 'D' | 'S' | 'T' | 'Q' | 'Q' | 'S' | 'S';
}

export function Day({ day }: DayProps) {
    return (
        <div className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
            {day}
        </div>
    );
}