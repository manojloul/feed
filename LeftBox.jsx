import React, { useState } from 'react';
import axios from 'axios';


const LeftBox = ({ setfeedBack }) => {


    let [great, setgreat] = useState(0);
    let [no, setno] = useState(0);

    let [fname, setfname] = useState("");
    let [mname, setmname] = useState("");
    let [lname, setlname] = useState("");
    let [sugg, setreview] = useState("");

    return (

        <div className="leftbox">
            <br /><br />

            First Name : <br /><br />
            <input
                name="fname"
                type="text"
                value={fname}
                placeholder="Enter your first name......"
                onChange={e => { setfname(e.target.value); }} />


            <br /><br />

            Middle Name :<br /><br />
            <input
                name="mname"
                type="text"
                value={mname}
                placeholder="Enter your middle name......."
                onChange={e => { setmname(e.target.value); }}
            />
            <br /><br />

            Last Name : <br /><br />
            <input
                name="lname"
                type="text"
                value={lname}
                placeholder="Enter your last name........"
                onChange={e => { setlname(e.target.value); }}
            />
            <br /><br />

            Suggestions : <br /><br />
            <input
                name="review"
                type="text"
                value={sugg}
                placeholder="your views........."
                onChange={e => { setreview(e.target.value); }}
            />

            <br /><br />
            <div style={{ marginLeft: "100px" }}>
                {great}  <button onClick={e => { setgreat(great + 1); }}>👍😄👍</button>

                {no}   <button onClick={e => { setno(no + 1); }}>👎😧👎</button>

            </div>
            <br />

            <button onClick={e => {
                if (fname === '')
                    alert("Please fill First name")
                else if (lname === '')
                    alert("Please fill Last name")
                else if (sugg === '')
                    alert("please add your suggestions")
                else {
                    /* setfeedBack((data)=>{
                                                 return [
                                                         ...data,
                                                         {
                                                             firstname: fname,
                                                             middlename: mname,
                                                             lastname: lname,
                                                             feedback: sugg
                                                         }
                                                     ];
                                                 }
                                             );*/
                    axios
                        .post("https://feedback-10.herokuapp.com/addfeed",
                            {
                                name: fname + " " + mname + " " + lname,
                                sugg: sugg
                            }).then((res) => {
                                setfeedBack(res.data)
                            });
                    setfname("");
                    setmname("");
                    setlname("");
                    setreview("");
                }
            }

            } className="btn">Click to submit</button>


        </div>

    )

}
export default LeftBox;
