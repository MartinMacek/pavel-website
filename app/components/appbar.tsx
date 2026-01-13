// AppBar component

import Image from "next/image";
export default function AppBar() {
    return (
        <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-bold uppercase leading-none
">Pavel<br />Spružina</h1>
            <button>Email</button>
        </div>
    );
}