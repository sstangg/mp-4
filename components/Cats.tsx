import styled from "styled-components";
import { CatProps } from "@/types";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: black;
    color: white;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;
const StyledP=styled.p`
 color: white;
 font-size: 50%;
`;

export default function Cats(props : { data:CatProps[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((cat: CatProps) =>
                    <SingleCharDiv>
                        <img src={cat.url} alt={"cat"}/>
                        <p>{"Cat ID: "+cat.id}</p>
                        <p>Very cute. :)</p>
                        <a href={cat.url}> <StyledP>{"URL:"+cat.url}</StyledP></a>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}