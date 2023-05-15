import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useState } from "react";

import logo from "../assets/logo.svg";
import { NewHabitForm } from "./NewHabitForm";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(isModalOpen);

    function handleToogleModalOpen() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="w-full max-w-3xl px-6 mx-auto flex items-center justify-between">
            <img src={logo} alt="Logo do habits" />

            <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
                <Dialog.Trigger
                    type="button"
                    onClick={handleToogleModalOpen}
                    className="flex px-6 py-4 gap-3 items-center justify-center border border-violet-500 font-semibold rounded-lg hover:border-violet-300"
                >
                    <Plus size={20} className="text-violet-500" />
                    Novo hábito
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

                    <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
                            <X size={24} aria-label="Fechar" />
                        </Dialog.Close>

                        <Dialog.DialogTitle className="text-3xl leading-tight font-extrabold">
                            Criar hábito
                        </Dialog.DialogTitle>

                        <NewHabitForm closeModal={handleToogleModalOpen}/>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>


        </div>
    );
}