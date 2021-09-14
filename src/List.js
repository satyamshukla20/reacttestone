import React from 'react';


const List = ({lid ,lname,lage,limage}) => {
  
  return (
    <>
    <article className="person">
     
       <img src={limage} alt="" />
       <div >
      <h4>{lname}</h4>
      <p>{lage} years</p>
      
      </div>
      
      </article>

    </>
  );
};

export default List;
