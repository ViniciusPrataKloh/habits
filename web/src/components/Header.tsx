import { Plus } from "phosphor-react";

import logo from "../assets/logo.svg";

export function Header() {
    return (
        <div className="w-full max-w-3xl px-6 mx-auto flex items-center justify-between">
            <img src={logo} alt="Logo do habits" />

            <button className="flex px-6 py-4 gap-3 items-center justify-center border border-violet-500 font-semibold rounded-lg hover:border-violet-300">
                <Plus size={20} className="text-violet-500" />
                Novo hábito
            </button>
        </div>
    );
}