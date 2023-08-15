import React, { useContext } from 'react'
// import { ContextData,ContextData2 } from './A'
import { ContextData} from './A'


// const D = (props) => {
const D = () => {
    // const value1=useContext(ContextData);
    // const value2=useContext(ContextData2);

    const value1=useContext(ContextData);



  return (
    <>
    {/* <ContextData.Consumer>
        {
            (value1)=>{
                return (
                <ContextData2.Consumer>
                {
                    (value2)=>{
                        return <h1>Hello I Am D :{value1} {value2}  </h1>
                    }
                }
            </ContextData2.Consumer>
                )
            }
        }
    </ContextData.Consumer> */}
    <h1>Hello I Am D :{value1.Data} {value1.Data2}  </h1>
    </>
  )
}

export default D