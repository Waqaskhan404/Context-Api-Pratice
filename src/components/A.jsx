import React, { createContext } from 'react'
import B from './B'


const ContextData=createContext();
const ContextData2=createContext();

const Data="Hey I am Coming From A Component"
const Data2="Hey New Data From A Component"


// const A = (props) => {
const A = () => {



   

  return (
    <div>
         <ContextData.Provider value={{Data,Data2}}>
            {/* <ContextData2.Provider value={Data2}> */}
         <B/>
            {/* </ContextData2.Provider> */}
    </ContextData.Provider>

        {/* <B  value={props.value}/> */}
      

    </div>
  )
}

export default A;
// export{ContextData,ContextData2}
export{ContextData}

