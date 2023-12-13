import React from "react";
import useCollection from "../hooks/useCollection";
import { useGlobalContext } from "../hooks/useGlobalContext";

function ReadMore() {
  const { docs } = useGlobalContext();
  console.log(docs);
  return <div className="px-20 py-6"></div>;
}

export default ReadMore;

{
  /* <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click the button below to close</p>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog> */
}

{
  /* <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <div className="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
    </div> 
    <div className="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
    </div>
  </div> */
}
