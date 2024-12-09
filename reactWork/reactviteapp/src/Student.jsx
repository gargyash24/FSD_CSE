import React from "react";
import "./student.css";
function Student({data}) {
  return (
    <div className="icard">
      {/* {JSON.strmgify(data)} */}
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>{data.college}</td>
            <td colSpan={2}>{data.pic}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>branch</td>
            <td>{data.branch}</td>
          </tr>
          <tr>
            <td> Roll</td>
            <td>{data.roll}</td>
          </tr>
          <tr>
            <td>Section </td>
            <td>{data.section}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
// Student.defaultProps={
//   college:"AKG Engineering College"
// }
export default Student;
