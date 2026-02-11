import Counter from "./components/hooks-practice/Counter";
import Toggle from "./components/hooks-practice/Toggle";
import ColorCharger from "./components/hooks-practice/ColorCharger";
import SimpleForm from "./components/hooks-practice/SimpleForm";
import TitleCounter from "./components/hooks-practice/TitleCounter";
import LiveClock from "./components/hooks-practice/LiveClock";
import WindowWidth from "./components/hooks-practice/WindowWidth";
import UserSearch from "./components/hooks-practice/UserSearch";
import FetchDataError from "./components/hooks-practice/FetchDataError";
import FocusInput from "./components/hooks-practice/Focusinput";
import Stopwatch from "./components/hooks-practice/Stopwach";

function App() {
  return (
   <div>
    <Counter />
    <Toggle />
    <ColorCharger />
    <SimpleForm />
    <UserSearch />
    <FetchDataError />
    <FocusInput />
    <Stopwatch />
    <TitleCounter />
    <LiveClock />
    <WindowWidth />
    
   </div>
  );
}

export default App;
