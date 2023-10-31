import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
//import Dropdown from "./Dropdown/Dropdown";

import './ContentTable.css'

export default function ContentTable({ contentData, setId}) {

  const [data, setData] = useState({ dados: [] })

  useEffect(() => {
    setData(contentData)
  }, [contentData]);

  function handleRowTable(id, event) {
    const container = event.currentTarget.parentNode
    const trList = container.getElementsByTagName("tr")

    for (let index = 0; index < trList.length; index++) {
      trList[index].classList.remove("active")
    }

    setId(id)

    event.currentTarget.classList.add("active")
  }

  try {

    return (
      <Fragment>
            <table className="table_">
              <thead>
                <tr className="tr_">
                  <th>Professores</th>
                  <th>Opções</th>
                </tr>
              </thead>
              <tbody className="item-professor-table">
                {
                  data.dados.map((item) => {
                    return (
                      <tr onClick={(e) => {handleRowTable(item.id, e)}}>
                        <td>{item.nomeCompleto}</td>
                        <td><button className="options-btn">
                      <span className="material-symbols-rounded">more_vert</span>
                    </button>
                  </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
      </Fragment>
    );
  } catch (error) {

  }

}







// import React, { Fragment, useEffect, useState } from "react";
// import { Table } from "reactstrap";

// import './ContentTable.css'

// export default function ContentTable({ contentData }) {
//   const [dropdown, setDropdown] = useState(false)
//   const [data, setData] = useState({ dados: [] })

//   useEffect(() => {
//     setData(contentData)
//   }, [contentData]);

//   function dropdownToggle(event) {
//     const nodelistDropdowns = document.querySelectorAll(".dropdown-container")
//     const btn = event.currentTarget

//     for (let i = 0; i < nodelistDropdowns.length; i++) {
//       setDropdown(false)
//       nodelistDropdowns[i].classList.remove("active")
//     }

//     document.body.addEventListener("click", (e) => {
//       console.log(e.target);
//       if (e.target !== btn || e.target !== btn.querySelector(".dropdown-container") || e.target !== event.target) {
//         if (dropdown) {
//           setDropdown(false)
//         } else {
//           setDropdown(true)
//         }
//       }
//     })

//     if (!dropdown) {
//       btn.querySelector(".dropdown-container").classList.add("active")
//     } else {
//       btn.querySelector(".dropdown-container").classList.remove("active")
//       for (let i = 0; i < nodelistDropdowns.length; i++) {
//         nodelistDropdowns[i].classList.remove("active")
//       }
//     }
//   }

//   try {

//     return (
//       <Fragment>

//         <table className="table_">
//           <thead>
//             <tr className="tr_">
//               <th>Nome</th>
//               <th>CPF</th>
//               {/* <th>Status</th>
//               <th>Opções</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data.dados.map((item) => {
//                 return(
//                 <tr>
//                   <td>{item.nomeCompleto}</td>
//                   <td>{item.cpf}</td>
//                   {/* <td><Status status={item.statusMatricula} /></td>
//                   <td>
//                     <button className="options-btn" onClick={dropdownToggle}>
//                       <span className="material-symbols-rounded">more_vert</span>
//                       <Dropdown id={item.cpf} />
//                     </button>
//                   </td> */}
//                 </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>

//       </Fragment>
//     );
//   } catch (error) {

//   }

// }
