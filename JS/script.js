

/*
calcolare la media dei voti:
1* dichiarare delle variabili
2* assegnare valori
3* calcolo della media dei voti
4* stampa voto medio su pagina
*/



const voteMath = parseInt(prompt("Inserise voto di matematica"));

const voteEng = parseInt(prompt("Inserise voto di inglese"));

const voteIta = parseInt(prompt("Inserise voto di italiano"));

const totVote = voteMath + voteEng + voteIta;

console.log(totVote);


const mediaVote = parseInt(totVote / 3) ;

console.log("la media è "+mediaVote);

document.getElementById("media-voto").innerHTML += mediaVote;

const outputList = 
`
<ul>
    <li>voto matematica: ${voteMath}</li>

    <li>voto italiano: ${voteIta}</li>
    <li><strong>voto media: ${mediaVote}</strong></li>
  </ul>
`;

console.log(outputList);

document.getElementById("output-list").innerHTML = outputList;

