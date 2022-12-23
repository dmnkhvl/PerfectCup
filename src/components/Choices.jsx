import React from 'react';
import Choice from './Choice';

function Choices() {
  return (
    <>
      <h3 className="text-base uppercase font-bold text-blue">
        Select the Amount of Beans
      </h3>
      <div className="flex justify-start mt-2 gap-x-5">
        <Choice value="15" name="fifteen" />
        <Choice value="18" name="eighteen" />
        <Choice value="21" name="twentyOne" />
      </div>
    </>
  );
}

export default Choices;
