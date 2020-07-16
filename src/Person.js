//tao component in hoa chu dau tien
import React from "react";
const Person = props => {
  let status = "working";
  const goToSleep = () => {
    status = "Sleeping";
  };
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>age:{props.age} year old</p>
      <p>Status:{status}</p>
      <button onClick={goToSleep}>Sleep</button>
    </div>
  );
};

export default Person;

//props la trang thai duoc truyen tu ben ngoai vao nhu params
// props la thuoc tinh cua conponent

//state
//class component co state
//funstuon component khong co state

// alt + mui ten  len xuong
// ctr + mui ten qua lai
// ctrl +z
// ctrl + shift + z
//alt + z
