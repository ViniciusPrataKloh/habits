import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";

import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const datesFromYearStart = generateRangeDatesFromYearStart();
const minimumSummaryDateSizes = 18 * 7;
const amountOfDaysToFill = minimumSummaryDateSizes - datesFromYearStart.length;

export function Home() {
    const { navigate } = useNavigation();

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />

            <View className="flex-row mt-6 mb-2 ">
                {
                    weekDays.map((weekDay, idx) => {
                        return (
                            <Text
                                key={`${idx}-${weekDay}`}
                                className="text-center text-zinc-400 text-xl font-bold mx-1"
                                style={{ width: DAY_SIZE, height: DAY_SIZE }}
                            >
                                {weekDay}
                            </Text>
                        )
                    })
                }
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
            >
                <View className="flex-row flex-wrap">
                    {
                        datesFromYearStart.map((date) => {
                            return (
                                <HabitDay
                                    key={date.toISOString()}
                                    onPress={() => navigate("habit", { date: date.toISOString() })}
                                />
                            )
                        })
                    }

                    {
                        amountOfDaysToFill > 0 && Array
                            .from({ length: amountOfDaysToFill })
                            .map((_, index) => (
                                <View
                                    key={index}
                                    className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                                    style={{ width: DAY_SIZE, height: DAY_SIZE }}
                                />
                            ))
                    }
                </View>
            </ScrollView>

        </View>
    );
}