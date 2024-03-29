import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import "./lib/dayjs";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">

        <Header />
        <Summary />

      </div>
    </div>
  );
}
