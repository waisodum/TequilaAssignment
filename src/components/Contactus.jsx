import React from "react";

function Contactus() {
  return (
    <div className="px-28 text-center">
      {/* {" "} */}
      <div className="contact">READY FOR YOUR NEXT VENTURE?</div>
      <div className="contact1">LET'S TALK</div>
      <div className="flex justify-center p-0 mt-7">
        <button className="btn btn1">+971 50 937 2493</button>
        <button className="btn btn">info@tequila.ae</button>
      </div>
      <div className="flex inputContain">
        <div className="inputInside">
          <div className="inputTag">
            <input type="text" className="border-2 	"  defaultValue="Name" name="Name" />
          </div>
          <div className="inputTag">
            <input type="text" className="border-2	 " defaultValue="Email" name="Email" />
          </div>
          <div className="inputTag">
            <input type="text" className="border-2 	" defaultValue="Phone" name="Phone" />
          </div>
        </div>
        <div className="someArea">
        < textarea name="" id=""  defaultValue="Message" className="textArea border-2"/>
        </div>

      </div>
      <div className="m-auto bt4">
          <button className="btn5">
            send Message ➡
          </button>
      </div>
    </div>
  );
}

export default Contactus;
