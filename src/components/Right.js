import React from 'react'

export default function Right(props) {
  let text = props.text 
  return (
    <div className='container mt-5' style={{height:"30%", width:"30%"}}>
      <h2>States</h2>
      <table className="table"  style={props.mode}>
        <thead></thead>
        <tbody >
          <tr>
            <th scope="row" style={props.mode}>Words</th>
            <td style={props.mode}>{text.toString().split(" ").length === 1 ? 0 : text.toString().split(" ").length}</td>
          </tr>
          <tr>
            <th scope="row" style={props.mode}>Characters</th>
            <td colSpan="2" style={props.mode}>{text.length}</td>
          </tr>
          <tr>
            <th scope="row" style={props.mode}>Avg time to read the passage</th>
            <td colSpan="2" style={props.mode}>{text.length / 125} s</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
