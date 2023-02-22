import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

export function New() {
    const [checkedWeekDays, setCheckedWeekDays] = useState<number[]>([]);

    function handleToggleCheckedWeekDays(weekDayIndex: number) {
        if (checkedWeekDays.includes(weekDayIndex)) {
            setCheckedWeekDays(state => state.filter(weekDay => weekDay !== weekDayIndex));
        } else {
            setCheckedWeekDays(state => [...state, weekDayIndex]);
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false}>

                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar Hábito
                </Text>


                <Text className="mt-6 text-white font-semibold text-base">
                    Qual seu comprometimento?
                </Text>

                <TextInput
                    className="mt-3 h-12 pl-4 rounded-lg bg-zinc-800 text-white focus:border-2 focus:border-green-600"
                />

                <Text className="mt-6 mb-3 text-white font-semibold text-base">
                    Qual a recorrência?
                </Text>

                {
                    availableWeekDays.map((weekDay, index) => (
                        <Checkbox
                            key={weekDay}
                            title={weekDay}
                            checked={checkedWeekDays.includes(index)}
                            onPress={() => handleToggleCheckedWeekDays(index)}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}