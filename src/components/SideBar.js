import React, { useState } from "react";

const SideBar = () => {
  const [isChecked, setIsChecked] = useState(false);
  // State for "IDEAL FOR" checkboxes
  const [isMenChecked, setIsMenChecked] = useState(false);
  const [isWomenChecked, setIsWomenChecked] = useState(false);
  const [isKidsChecked, setIsKidsChecked] = useState(false);
  // State for "Occasion" checkboxes
  const [isCasualChecked, setIsCasualChecked] = useState(false);
  const [isPartyChecked, setIsPartyChecked] = useState(false);
  const [isFormalChecked, setIsFormalChecked] = useState(false);
  // State for "Work" checkboxes
  const [isRemoteChecked, setIsRemoteChecked] = useState(false);
  const [isOfficeChecked, setIsOfficeChecked] = useState(false);
  const [isHybridChecked, setIsHybridChecked] = useState(false);
  // State to control toggle for each section
  const [isIdealForOpen, setIsIdealForOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isRawMaterialsOpen, setIsRawMaterialsOpen] = useState(false);
  const [isPatternsOpen, setIsPatternsOpen] = useState(false);

  // Fabric State
  const [isFabricOpen, setIsFabricOpen] = useState(false);
  const [isCottonChecked, setIsCottonChecked] = useState(false);
  const [isSilkChecked, setIsSilkChecked] = useState(false);
  const [isPolyesterChecked, setIsPolyesterChecked] = useState(false);

  // Segment State
  const [isSegmentOpen, setIsSegmentOpen] = useState(false);
  const [isCasualSelected, setIsCasualSelected] = useState(false);
  const [isFormalSelected, setIsFormalSelected] = useState(false);
  const [isSportsChecked, setIsSportsChecked] = useState(false);

  // Suitable For State
  const [isSuitableForOpen, setIsSuitableForOpen] = useState(false);
  const [isSummerChecked, setIsSummerChecked] = useState(false);
  const [isWinterChecked, setIsWinterChecked] = useState(false);
  const [isAllSeasonsChecked, setIsAllSeasonsChecked] = useState(false);
  // Declare state variables for raw materials section
  const [isLeatherChecked, setIsLeatherChecked] = useState(false);
  const [isWoolChecked, setIsWoolChecked] = useState(false);
  const [isNylonChecked, setIsNylonChecked] = useState(false);

  // Declare state variables for patterns section
  const [isSolidChecked, setIsSolidChecked] = useState(false);
  const [isStripedChecked, setIsStripedChecked] = useState(false);
  const [isCheckedChecked, setIsCheckedChecked] = useState(false);
  const [isFloralChecked, setIsFloralChecked] = useState(false);

  // Unselect all for "IDEAL FOR"
  const unselectIdealFor = () => {
    setIsMenChecked(false);
    setIsWomenChecked(false);
    setIsKidsChecked(false);
  };
  // Unselect all for "Occasion"
  const unselectOccasion = () => {
    setIsCasualChecked(false);
    setIsPartyChecked(false);
    setIsFormalChecked(false);
  };
  // Unselect all for "Work"
  const unselectWork = () => {
    setIsRemoteChecked(false);
    setIsOfficeChecked(false);
    setIsHybridChecked(false);
  };

  const unselectFabric = () => {
    setIsCottonChecked(false);
    setIsSilkChecked(false);
    setIsPolyesterChecked(false);
  };

  const unselectSegment = () => {
    setIsCasualSelected(false); // Renamed
    setIsFormalSelected(false); // Renamed
    setIsSportsChecked(false);
  };

  const unselectSuitableFor = () => {
    setIsSummerChecked(false);
    setIsWinterChecked(false);
    setIsAllSeasonsChecked(false);
  };

  // Function to unselect all raw materials
  const unselectRawMaterials = () => {
    setIsLeatherChecked(false);
    setIsWoolChecked(false);
    setIsNylonChecked(false);
  };

  // Function to unselect all patterns
  const unselectPatterns = () => {
    setIsSolidChecked(false);
    setIsStripedChecked(false);
    setIsCheckedChecked(false);
    setIsFloralChecked(false);
  };

  // Handle checkbox toggle
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // You can trigger other actions here when checked or unchecked
  };
  return (
    <div className="sidebar">
      {/* Customizable checkbox */}
      <div className="margin-top">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label
          onClick={() => setIsChecked(!isChecked)} // Also toggles when label is clicked
        >
          <b>CUSTOMIZABLE</b>
        </label>
        <hr className="hr-item" />
      </div>
      {/* "IDEAL FOR" Section */}
      <div className="display-flex">
        <span>
          <b>IDEAL FOR</b>
          <span
            onClick={() => setIsIdealForOpen(!isIdealForOpen)}
            className="toggle-item"
          >
            {isIdealForOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isIdealForOpen && (
          <div className="toggle-data">
            <p onClick={unselectIdealFor} className="unselect-checkbox">
              Unselect all
            </p>
            <p>
              <input
                type="checkbox"
                checked={isMenChecked}
                onChange={() => setIsMenChecked(!isMenChecked)}
              />
              <label>Men</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isWomenChecked}
                onChange={() => setIsWomenChecked(!isWomenChecked)}
              />
              <label>Women</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isKidsChecked}
                onChange={() => setIsKidsChecked(!isKidsChecked)}
              />
              <label>Baby & Kids</label>
            </p>
          </div>
        )}
      </div>

      <hr className="hr-item" />
      <div className="display-flex">
        <span>
          <b>OCCASION</b>
          <span
            onClick={() => setIsOccasionOpen(!isOccasionOpen)}
            className="toggle-item"
          >
            {isOccasionOpen ? (
              // Chevron Up Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              // Chevron Down Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isOccasionOpen && (
          <div className="toggle-data">
            <p onClick={unselectOccasion} className="unselect-checkbox">
              Unselect all
            </p>

            {/* Casual checkbox */}
            <p>
              <input
                type="checkbox"
                checked={isCasualChecked}
                onChange={() => setIsCasualChecked(!isCasualChecked)}
              />
              <label>Casual</label>
            </p>

            {/* Party checkbox */}
            <p>
              <input
                type="checkbox"
                checked={isPartyChecked}
                onChange={() => setIsPartyChecked(!isPartyChecked)}
              />
              <label>Party</label>
            </p>

            {/* Formal checkbox */}
            <p>
              <input
                type="checkbox"
                checked={isFormalChecked}
                onChange={() => setIsFormalChecked(!isFormalChecked)}
              />
              <label>Formal</label>
            </p>
          </div>
        )}
      </div>
      <hr className="hr-item" />

      {/* "Work" Section */}
      <div className="display-flex">
        <span>
          <b>WORK</b>
          <span
            onClick={() => setIsWorkOpen(!isWorkOpen)}
            className="toggle-item"
          >
            {isWorkOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isWorkOpen && (
          <div className="toggle-data">
            <p onClick={unselectWork} className="unselect-checkbox">
              Unselect all
            </p>
            <p>
              <input
                type="checkbox"
                checked={isRemoteChecked}
                onChange={() => setIsRemoteChecked(!isRemoteChecked)}
              />
              <label>Remote</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isOfficeChecked}
                onChange={() => setIsOfficeChecked(!isOfficeChecked)}
              />
              <label>Office</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isHybridChecked}
                onChange={() => setIsHybridChecked(!isHybridChecked)}
              />
              <label>Hybrid</label>
            </p>
          </div>
        )}
      </div>
      <hr className="hr-item" />
      {/* Fabric Section */}
      <div className="display-flex">
        <span>
          <b>FABRIC</b>
          <span
            onClick={() => setIsFabricOpen(!isFabricOpen)}
            className="toggle-item"
          >
            {isFabricOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isFabricOpen && (
          <div className="toggle-data">
            <p onClick={unselectFabric} className="unselect-checkbox">
              Unselect all
            </p>
            <p>
              <input
                type="checkbox"
                checked={isCottonChecked}
                onChange={() => setIsCottonChecked(!isCottonChecked)}
              />
              <label>Cotton</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isSilkChecked}
                onChange={() => setIsSilkChecked(!isSilkChecked)}
              />
              <label>Silk</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isPolyesterChecked}
                onChange={() => setIsPolyesterChecked(!isPolyesterChecked)}
              />
              <label>Polyester</label>
            </p>
          </div>
        )}
      </div>
      <hr className="hr-item" />
      {/* Segment Section */}
      <div className="display-flex">
        <span>
          <b>SEGMENT</b>
          <span
            onClick={() => setIsSegmentOpen(!isSegmentOpen)}
            className="toggle-item"
          >
            {isSegmentOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isSegmentOpen && (
          <div className="toggle-data">
            <p onClick={unselectSegment} className="unselect-checkbox">
              Unselect all
            </p>
            <p>
              <input
                type="checkbox"
                checked={isCasualSelected}
                onChange={() => setIsCasualSelected(!isCasualSelected)}
              />
              <label>Casual</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isFormalSelected}
                onChange={() => setIsFormalSelected(!isFormalSelected)}
              />
              <label>Formal</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isSportsChecked}
                onChange={() => setIsSportsChecked(!isSportsChecked)}
              />
              <label>Sports</label>
            </p>
          </div>
        )}
      </div>
      <hr className="hr-item" />
      {/* Suitable For Section */}
      <div className="display-flex">
        <span>
          <b>SUITABLE FOR</b>
          <span
            onClick={() => setIsSuitableForOpen(!isSuitableForOpen)}
            className="toggle-item"
          >
            {isSuitableForOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isSuitableForOpen && (
          <div className="toggle-data">
            <p onClick={unselectSuitableFor} className="unselect-checkbox">
              Unselect all
            </p>
            <p>
              <input
                type="checkbox"
                checked={isSummerChecked}
                onChange={() => setIsSummerChecked(!isSummerChecked)}
              />
              <label>Summer</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isWinterChecked}
                onChange={() => setIsWinterChecked(!isWinterChecked)}
              />
              <label>Winter</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isAllSeasonsChecked}
                onChange={() => setIsAllSeasonsChecked(!isAllSeasonsChecked)}
              />
              <label>All Seasons</label>
            </p>
          </div>
        )}
      </div>
      <hr className="hr-item" />
      {/* Raw Materials Section */}
      <div className="display-flex">
        <span>
          <b>RAW MATERIALS</b>
          <span
            onClick={() => setIsRawMaterialsOpen(!isRawMaterialsOpen)}
            className="toggle-item"
          >
            {isRawMaterialsOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isRawMaterialsOpen && (
          <div className="toggle-data">
            <p onClick={unselectRawMaterials} className="unselect-checkbox">
              Unselect all
            </p>
            <p>
              <input
                type="checkbox"
                checked={isLeatherChecked}
                onChange={() => setIsLeatherChecked(!isLeatherChecked)}
              />
              <label>Leather</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isWoolChecked}
                onChange={() => setIsWoolChecked(!isWoolChecked)}
              />
              <label>Wool</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isNylonChecked}
                onChange={() => setIsNylonChecked(!isNylonChecked)}
              />
              <label>Nylon</label>
            </p>
          </div>
        )}
      </div>
      <hr className="hr-item" />
      {/* Patterns Section */}
      <div className="display-flex">
        <span>
          <b>PATTERNS</b>
          <span
            onClick={() => setIsPatternsOpen(!isPatternsOpen)}
            className="toggle-item"
          >
            {isPatternsOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </span>
        <small>ALL</small>
        {isPatternsOpen && (
          <div className="toggle-data">
            <p onClick={unselectPatterns} className="unselect-checkbox">
              Unselect all
            </p>
            <p>
              <input
                type="checkbox"
                checked={isSolidChecked}
                onChange={() => setIsSolidChecked(!isSolidChecked)}
              />
              <label>Solid</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isStripedChecked}
                onChange={() => setIsStripedChecked(!isStripedChecked)}
              />
              <label>Striped</label>
            </p>
            <p>
              <input
                type="checkbox"
                checked={isCheckedChecked}
                onChange={() => setIsCheckedChecked(!isCheckedChecked)}
              />
              <label>Checked</label>
            </p>
          </div>
        )}
      </div>
      <hr className="hr-item" />
    </div>
  );
};

export default SideBar;
