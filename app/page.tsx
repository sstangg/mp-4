"use client"
import Cats from "@/components/Cats"
import { TheCatAPI } from "@thatapicompany/thecatapi";
import {useEffect, useState} from "react";
import styled from "styled-components";
const API_KEY = process.env.CAT_API_KEY;
const theCatAPI = new TheCatAPI(API_KEY);

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;
export default function Home() {
    // useState Hook to store Data.
    const [data, setData] = useState<Cats[]>([]);
    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            try {
                const images = await theCatAPI.images.searchImages({
                    limit: 6,
                });
                console.log(images);
                setData(images);
            } catch (error) {
                // handle error
                console.log("There was the error: " + error);
            }
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <>
            <ParentDiv>
                <Cats data={data}/>
            </ParentDiv>
        </>

    )
}
