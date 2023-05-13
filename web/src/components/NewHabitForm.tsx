import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";
import { FormEvent, useState } from 'react';

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
];

export function NewHabitForm() {
    const [title, setTitle] = useState("");
    const [weekDays, setWeekDays] = useState<Number[]>([]);

    function handleCreateNewHabit(event: FormEvent) {
        event?.preventDefault();


    }

    function handleToggleWeekDay(weekDayToToggle: number) {
        if (weekDays.includes(weekDayToToggle)) {
            const newWeekDays = weekDays.filter(weekDay => weekDay !== weekDayToToggle);
            setWeekDays(newWeekDays);
        } else {
            setWeekDays(state => [...state, weekDayToToggle]);
        }
    }

    return (
        <form onSubmit={handleCreateNewHabit} className="w-full flex flex-col mt-6">
            <label
                className="font-semibold leading-tight"
                htmlFor="title"
            >
                Qual seu comprometimento?
            </label>

            <input
                className="p-4 mt-3 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
                type="text"
                id="title"
                placeholder="ex.: Exercícios, dormir bem, etc..."
                onChange={event => setTitle(event.target.value)}
                value={title}
                autoFocus
            />

            <label
                className="font-semibold leading-tight mt-4"
                htmlFor=""
            >
                Qual a recorrência?
            </label>

            <div className='mt-6 flex flex-col gap-3'>
                {availableWeekDays.map((weekDay, index) => {
                    return (
                        <Checkbox.Root
                            key={weekDay}
                            className='flex items-center gap-3 group'
                            onCheckedChange={() => handleToggleWeekDay(index)}
                        >

                            <div className='w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                                <Checkbox.Indicator>
                                    <Check size={20} className='text-white leading-tight' />
                                </Checkbox.Indicator>
                            </div>

                            <span className='text-white'>
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    )
                })}
            </div>

            <button
                className="mt-6 p-4 flex items-center justify-center gap-3 rounded-lg bg-green-600 font-semibold hover:bg-green-500"
                type="submit"
            >
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}