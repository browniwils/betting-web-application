import CLeauge from "./cLeauge";

const CountryLeague = () => {
  return (
    <div className="border-end bg-light w-25 p-0">
      <div className="fs-6 fw-bold fst-italic text-center bg-warning shadow-sm p-0">
        Countries
      </div>
      <div className="overflow-auto">
        <CLeauge />
        <CLeauge />
        <CLeauge />
        <CLeauge />
        <CLeauge />
        <CLeauge />
        <CLeauge />
      </div>
    </div>
  );
};

export default CountryLeague;
