import { Check } from "phosphor-react";

export function NewHabitForm() {
    return (
        <form className="w-full flex flex-col mt-6">
            <label
                className="font-semibold leading-tight"
                htmlFor="title"
            >Qual seu comprometimento?
            </label>

            <input
                className="p-4 mt-3 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
                type="text"
                id="title"
                placeholder="ex.: Exercícios, dormir bem, etc..."
            />

            <label
                className="font-semibold leading-tight mt-4"
                htmlFor=""
            >Qual a recorrência?
            </label>

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