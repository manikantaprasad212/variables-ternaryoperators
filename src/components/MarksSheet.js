import React from 'react'

function MarksSheet(props) {
let telMarks = Number(props.telMarks);
let engMarks = Number(props.engMarks);
let hinMarks = Number(props.hinMarks);
let mathsMarks = Number(props.mathsMarks);
let sciMarks = Number(props.sciMarks);
let socMarks = Number(props.socMarks);
let totalMarks = telMarks+engMarks+hinMarks+mathsMarks+sciMarks+socMarks;

let perc = (totalMarks/600)*100
  return (
   <div>
    <table>
        <caption>{props.studentName} Marks Report</caption>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Max.Marks</th>
                <th>Marks Obtained</th>
                <th>Result</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks >=35 ? "Pass":"Fail"}</td>
                
                <td>Execllent</td>
            </tr>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks >=35 ? "Pass":"Fail"}</td>
                
                <td>Execllent</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hinMarks}</td>
                <td>{hinMarks >=35 ? "Pass":"Fail"}</td>
                
                <td>Execllent</td>
            </tr> <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{mathsMarks}</td>
                <td>{mathsMarks >=35 ? "Pass":"Fail"}</td>
                
                <td>Execllent</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>{sciMarks >=35 ? "Pass":"Fail"}</td>
    
                <td>Execllent</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{socMarks}</td>
                <td>{socMarks >=35 ? "Pass":"Fail"}</td>
                
                <td>Execllent</td>
            </tr>
            
        </tbody>
        <tfoot><tr>
                <td>Total</td>
                <td>600</td>
                <td>{totalMarks}({perc.toFixed(2)}%)</td>
                <td>Pass</td>
                <td>Execllent</td>
            </tr></tfoot>
    </table>
   </div>
  )
}

export default MarksSheet