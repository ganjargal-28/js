// import { useState } from "react";
// export default function Home() {
//   const friuts = ["apple", "banana", "lemon"];
//   const [searchItem, setSearchItem] = useState("");
//   const friutsFiltered = friuts.filter((friuts) => friuts === searchItem);
//   const search = (e) => {
//     setSearchItem(e.target.value);
//   };
//   return (
//     <div className="w-full flex justify-center h-screen items-center">
//       <div>
//         <input
//           className="text-black"
//           type="text"
//           placeholder="search"
//           onChange={search}
//         />
//         <ul>
//           {friutsFiltered.map((item, index) => (
//             <li key={index}> {index} </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );

import { useState } from "react";

// }
export default function Home() {
  const objectList = [
    { title: "HTML Article 6", tag: "html" },
    { title: "CSS Basics 6", tag: "css" },
    { title: "HTML Article 2", tag: "html" },
    { title: "CSS Basics 3", tag: "css" },
    { title: "HTML Article 3", tag: "html" },
    { title: "JavaScript Guide 3", tag: "javascript" },
    { title: "CSS Basics 4", tag: "css" },
    { title: "JavaScript Guide 1", tag: "javascript" },
    { title: "HTML Article 4", tag: "html" },
    { title: "CSS Basics 1", tag: "css" },
    { title: "JavaScript Guide 4", tag: "javascript" },
    { title: "HTML Article 1", tag: "html" },
    { title: "CSS Basics 2", tag: "css" },
    { title: "HTML Article 5", tag: "html" },
    { title: "JavaScript Guide 2", tag: "javascript" },
    { title: "CSS Basics 5", tag: "css" },
    { title: "JavaScript Guide 6", tag: "javascript" },
    { title: "HTML Article 7", tag: "html" },
    { title: "CSS Basics 7", tag: "css" },
    { title: "JavaScript Guide 5", tag: "javascript" },
  ];
  const [html, sethtml] = useState("");
  const selectItem = (event) => {
    sethtml(event.target.value);
    console.log(event.target.value);
  };
  const itemFiltered = objectList.filter((item) => item.tag === "html");
  return (
    <div>
      <select onChange={selectItem}>
        <option value="html">html</option>
        <option value="css">css</option>
        <option value="javascript">js</option>
      </select>

      {itemFiltered.map((items, (index) => <p key={index}> {items.title} </p>))}
    </div>
  );
}
