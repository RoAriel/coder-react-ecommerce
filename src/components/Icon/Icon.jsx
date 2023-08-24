export function CartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" width="30px" height="30px" fill="white" className="w-5 h-5">
            <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
    )
}

export function IconPlus() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="white" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

    )
}


export function IconLess() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="white" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    )

}
export function IconCartEmpty() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-basket-off" width={128} height={128} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M17 10l-2 -6"></path>
            <path d="M7 10l.75 -2.252m1.001 -3.002l.249 -.746"></path>
            <path d="M12 8h7a2 2 0 0 1 1.977 2.304c-.442 2.516 -.756 4.438 -.977 5.696m-1.01 3.003a2.997 2.997 0 0 1 -2.234 .997h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h2.999"></path>
            <path d="M12 12a2 2 0 1 0 2 2"></path>
            <path d="M3 3l18 18"></path>
        </svg>
    )
}

export function IconTrash() {
    return [
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7l16 0"></path>
            <path d="M10 11l0 6"></path>
            <path d="M14 11l0 6"></path>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
    ]
}