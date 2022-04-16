import React from "react";
import { useRouter } from "next/router";

export default function sidecharacterid() {
  const router = useRouter();
  console.log(router.query)
  const { characterid, sidecharacter } = router.query;
  return (
    <div>
      {characterid} - {sidecharacter}
    </div>
  );
}

// export default function Character({ character }) {
//   return (
//     <div>
//       <img src={character.photoUrl} alt="" />
//       <div>
//         <h1>{ character.name }</h1>
//         <p>Affiliation: { character.affiliation }</p>
//       </div>
//     </div>
//   )
// }

// export async function getStaticProps({ params }) {
//   const characterId = params.characterId.replace(/\-/g, '+')
//   const results = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${characterId}`).then(res => res.json());
//   return {
//     props: {
//       character: results[0]
//     }
//   }
// }

// export async function getStaticPaths() {
//   const characters = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10').then(res => res.json());
//   return {
//     paths: characters.map(character => {
//       const characterId = character.name.toLowerCase().replace(/ /g, '-');
//       return {
//         params: {
//           characterId
//         }
//       }
//     }),
//     fallback: false
//   }
// }