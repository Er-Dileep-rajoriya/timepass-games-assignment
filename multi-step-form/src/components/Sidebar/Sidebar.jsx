import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import { setStep, setVisitedPages } from "../../redux/pagesSlices";

function Sidebar() {
  const { step } = useSelector((store) => store.pageReducer);

  return (
    <div className="sidebar">
      <div className="sidebar-child">
        <div className="sidebar-inner">
          <div className={`left-side para-2 ${step == 1 ? "bg-change" : ""}`}>
            1
          </div>
          <div className="right-side">
            <p className="para-1">STEP-1</p>
            <p className="para-2">YOUR INFO</p>
          </div>
        </div>

        <div className="sidebar-inner">
          <div className={`left-side para-2 ${step == 2 ? "bg-change" : ""}`}>
            2
          </div>
          <div className="right-side">
            <p className="para-1">STEP-2</p>
            <p className="para-2">SELECT-PLAN</p>
          </div>
        </div>

        <div className="sidebar-inner">
          <div className={`left-side para-2 ${step == 3 ? "bg-change" : ""}`}>
            3
          </div>
          <div className="right-side">
            <p className="para-1">STEP-3</p>
            <p className="para-2">ADD-ONS</p>
          </div>
        </div>

        <div className="sidebar-inner">
          <div className={`left-side para-2 ${step == 4 ? "bg-change" : ""}`}>
            4
          </div>
          <div className="right-side">
            <p className="para-1">STEP-4</p>
            <p className="para-2">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
