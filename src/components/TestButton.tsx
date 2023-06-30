"use client"

import { useState } from "react";

export const TestButton = () => {
    const [state, setState] = useState(false)
    const handleClick = () => {
        setState((prevState) => !prevState)
    };
    return (
        <>
        <button placeholder="テスト" onClick={handleClick} className="p-3 rounded-lg bg-red-600 text-white">{state ? "ON" : "OFF"}</button>
        </>
    )
}
