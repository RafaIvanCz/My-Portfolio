import React from "react"
import "../Idioms/idioms.css"
import { MdHearing, MdMenuBook } from "react-icons/md"
import { TiPen } from "react-icons/ti"
import { GiNothingToSay } from "react-icons/gi"

const Idioms = () => {
  return (
    <section>
      <div className="idioms-section">
        <div className="idioms-item">
          <GiNothingToSay className="idioms-icon"/>
          <MdHearing className="idioms-icon"/> <br/>
          <MdMenuBook className="idioms-icon"/>
          <TiPen className="idioms-icon"/>
          <p className="text-idioms">English - <span className="span-idioms">B2</span><br/>Spanish - <span className="span-idioms">Native</span></p>
        </div>
      </div>
    </section>
  );
}

export default Idioms;