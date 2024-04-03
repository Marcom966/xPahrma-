"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

function Checkout (){
    const searchParams = useSearchParams();
    const search = searchParams.get('name')
    
    
    return (
            <div className="complimenti">
                <h1>
                    {search}
                </h1>
            </div>
            );
}
export default Checkout