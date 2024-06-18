import { useSelector } from "react-redux";
import { createStore } from "redux";
import './Bt7.css'
const initialState = { isDarkMode: false };
function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}

let store = createStore(reducer);

let change = () => ({
  type: "TOGGLE_THEME",
});

export default function Bt7() {
    const isDarkMode = store.getState();
  const handleThemeChange = () => {
    store.dispatch(change());
    console.log(store.getState());
    
  };
  return (
    <div>
      <div style={{width:"200px",height:"200px"}}>
        <label htmlFor="theme-switch">Dark Mode</label>
        <input
          type="checkbox"
          id="theme-switch"
          checked={isDarkMode}
          onChange={() => {
            handleThemeChange;
          }}
        />
        <div className={isDarkMode ? "dark-theme" : "light-theme"}></div>
      </div>
    </div>
  );
}
