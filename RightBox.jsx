import React ,{useEffect,useState} from 'react';
import axios from "axios";

const ct = new Date().toLocaleTimeString();
const cd= new Date().toLocaleDateString();


const RightBox=({feedBack})=>
{
    let [fetchData, setFetchData] = useState([]);
    useEffect(() => {
        axios
          .get("https://feedback-10.herokuapp.com/getfeed")
          .then((res) => {
            setFetchData(res.data);
          });
      }, []);
    return(
       /* <>
       
            <div className="rightbox">
            
             {feedBack.map((val)=>{
                return (
                    <>
                        <br/>
                        <div className="right">
                        <h3>Name : {val.firstname} {val.middlename} {val.lastname}  <br/>Suggestion : {val.feedback} {alert("Thanks for your feedback 😄" )} <br/>time : {ct}  date :{cd}</h3>
                        </div>
                
                    </>
                );})}
            </div>

        
        </>*/
        <div className="rightbox">
            {
        fetchData.map((val) => {
            return( 
                
            <> 
            <br/>
            <div className="right">
            Name : {val.name}<br/>
            Suggestion : {val.sugg}<br/>
            Time: {ct} 
            {"   "}Date:{cd}
            </div>
            
            </>)
          })
        }
          </div>
          
    )
};
export default RightBox;