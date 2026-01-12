// components/MediaButton.tsx
import React from "react";

type MediaButtonProps = {
  type:
    | "pound"
    | "calender"
    | "man"
    | "groupOfMan"
    | "awared"
    | "location"
    | "recent"
    | "search"
    | "applicaton"
    | "eye"
    | "check"
    | "cross"
    | "venus"
    | "allVenues"
    | "edit"
    | "games"
    | "document"
    | "notification"
    | "complete"
    | "pending"
    | "logout";
};

const icons = {
  pound: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10C4 9.44772 4.44772 9 5 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H5C4.44772 15 4 14.5523 4 14Z"
        fill="#00A63E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10C6 5.65859 9.26679 2 13.4615 2C16.2164 2 18.5879 3.59423 19.8739 5.90634C20.1424 6.38899 19.9687 6.99788 19.4861 7.26633C19.0034 7.53478 18.3945 7.36114 18.1261 6.87849C17.1507 5.12493 15.4076 4 13.4615 4C10.5191 4 8 6.60942 8 10V14C8 17.3906 10.5191 20 13.4615 20C15.4076 20 17.1507 18.8751 18.1261 17.1215C18.3945 16.6389 19.0034 16.4652 19.4861 16.7337C19.9687 17.0021 20.1424 17.611 19.8739 18.0937C18.5879 20.4058 16.2164 22 13.4615 22C9.26679 22 6 18.3414 6 14V10Z"
        fill="#00A63E"
      />
    </svg>
  ),
  calender: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.33325 1.33325V3.33325"
        stroke="#00a63e"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 1.33325V3.33325"
        stroke="#00a63e"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.33325 6.06006H13.6666"
        stroke="#00a63e"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5.66659V11.3333C14 13.3333 13 14.6666 10.6667 14.6666H5.33333C3 14.6666 2 13.3333 2 11.3333V5.66659C2 3.66659 3 2.33325 5.33333 2.33325H10.6667C13 2.33325 14 3.66659 14 5.66659Z"
        stroke="#00a63e"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4632 9.13338H10.4692"
        stroke="#00a63e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4632 11.1334H10.4692"
        stroke="#00a63e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99691 9.13338H8.0029"
        stroke="#00a63e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99691 11.1334H8.0029"
        stroke="#00a63e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.52962 9.13338H5.53561"
        stroke="#00a63e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.52962 11.1334H5.53561"
        stroke="#00a63e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  man: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.12793C16.8578 3.3503 17.6174 3.85119 18.1597 4.55199C18.702 5.25279 18.9962 6.11382 18.9962 6.99993C18.9962 7.88604 18.702 8.74707 18.1597 9.44787C17.6174 10.1487 16.8578 10.6496 16 10.8719"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  groupOfMan: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.5 11C15.5 9.067 13.933 7.5 12 7.5C10.067 7.5 8.5 9.067 8.5 11C8.5 12.933 10.067 14.5 12 14.5C13.933 14.5 15.5 12.933 15.5 11Z"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4827 11.3499C15.8047 11.4475 16.1462 11.5 16.5 11.5C18.433 11.5 20 9.933 20 8C20 6.067 18.433 4.5 16.5 4.5C14.6851 4.5 13.1928 5.8814 13.0173 7.65013"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9827 7.65013C10.8072 5.8814 9.31492 4.5 7.5 4.5C5.567 4.5 4 6.067 4 8C4 9.933 5.567 11.5 7.5 11.5C7.85381 11.5 8.19535 11.4475 8.51727 11.3499"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 16.5C22 13.7386 19.5376 11.5 16.5 11.5"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 19.5C17.5 16.7386 15.0376 14.5 12 14.5C8.96243 14.5 6.5 16.7386 6.5 19.5"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.5C4.46243 11.5 2 13.7386 2 16.5"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  awared: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10 14.6599V16.2859C9.99622 16.6285 9.90448 16.9644 9.73358 17.2614C9.56268 17.5584 9.31834 17.8065 9.024 17.9819C8.39914 18.4447 7.89084 19.0469 7.53948 19.7406C7.18813 20.4343 7.00341 21.2003 7 21.9779"
        stroke="#00C950"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.6599V16.2859C14.0038 16.6285 14.0955 16.9644 14.2664 17.2614C14.4373 17.5584 14.6817 17.8065 14.976 17.9819C15.6009 18.4447 16.1092 19.0469 16.4605 19.7406C16.8119 20.4343 16.9966 21.2003 17 21.9779"
        stroke="#00C950"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9H19.5C20.163 9 20.7989 8.73661 21.2678 8.26777C21.7366 7.79893 22 7.16304 22 6.5C22 5.83696 21.7366 5.20107 21.2678 4.73223C20.7989 4.26339 20.163 4 19.5 4H18"
        stroke="#00C950"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 22H20"
        stroke="#00C950"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H7C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V9Z"
        stroke="#00C950"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9H4.5C3.83696 9 3.20107 8.73661 2.73223 8.26777C2.26339 7.79893 2 7.16304 2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H6"
        stroke="#00C950"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  location: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  recent: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#00C950"
        strokeWidth="2"
      />
      <path
        d="M9 9L13.5 13.5M16.5 7.5L10.5 13.5"
        stroke="#00C950"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14 14L11.1067 11.1067"
        stroke="#717182"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
        stroke="#717182"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  applicaton: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0005 3C10.8186 3 9.64827 3.23279 8.55634 3.68508C7.46441 4.13738 6.47225 4.80031 5.63653 5.63604C4.8008 6.47177 4.13786 7.46392 3.68557 8.55585C3.23328 9.64778 3.00049 10.8181 3.00049 12C3.00049 13.1819 3.23328 14.3522 3.68557 15.4442C4.13786 16.5361 4.8008 17.5282 5.63653 18.364C6.47225 19.1997 7.46441 19.8626 8.55634 20.3149C9.64827 20.7672 10.8186 21 12.0005 21C14.3874 21 16.6766 20.0518 18.3644 18.364C20.0523 16.6761 21.0005 14.3869 21.0005 12C21.0005 9.61305 20.0523 7.32387 18.3644 5.63604C16.6766 3.94821 14.3874 3 12.0005 3ZM1.00049 12C1.00049 5.925 5.92549 1 12.0005 1C18.0755 1 23.0005 5.925 23.0005 12C23.0005 18.075 18.0755 23 12.0005 23C5.92549 23 1.00049 18.075 1.00049 12ZM12.0005 10C12.2657 10 12.5201 10.1054 12.7076 10.2929C12.8951 10.4804 13.0005 10.7348 13.0005 11V17C13.0005 17.2652 12.8951 17.5196 12.7076 17.7071C12.5201 17.8946 12.2657 18 12.0005 18C11.7353 18 11.4809 17.8946 11.2934 17.7071C11.1058 17.5196 11.0005 17.2652 11.0005 17V11C11.0005 10.7348 11.1058 10.4804 11.2934 10.2929C11.4809 10.1054 11.7353 10 12.0005 10ZM12.0005 8C12.2657 8 12.5201 7.89464 12.7076 7.70711C12.8951 7.51957 13.0005 7.26522 13.0005 7C13.0005 6.73478 12.8951 6.48043 12.7076 6.29289C12.5201 6.10536 12.2657 6 12.0005 6C11.7353 6 11.4809 6.10536 11.2934 6.29289C11.1058 6.48043 11.0005 6.73478 11.0005 7C11.0005 7.26522 11.1058 7.51957 11.2934 7.70711C11.4809 7.89464 11.7353 8 12.0005 8Z"
        fill="#00A63E"
      />
    </svg>
  ),
  eye: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C1.91581 6.4559 2.83435 5.33402 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33402 14.0842 6.4559 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C14.0842 9.54409 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.54409 1.37468 8.232Z"
        stroke="#0A0A0A"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke="#0A0A0A"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.5339 6.66666C14.8384 8.16086 14.6214 9.71427 13.9192 11.0679C13.2169 12.4214 12.0719 13.4934 10.675 14.1049C9.27803 14.7164 7.7137 14.8305 6.24281 14.4282C4.77193 14.026 3.48341 13.1316 2.59213 11.8943C1.70085 10.657 1.26069 9.15148 1.34505 7.62892C1.42941 6.10635 2.0332 4.65872 3.05571 3.52744C4.07823 2.39616 5.45767 1.64961 6.96399 1.4123C8.47031 1.17498 10.0125 1.46123 11.3333 2.22333"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 7.33329L8 9.33329L14.6667 2.66663"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  cross: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
        stroke="#E7000B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6L6 10"
        stroke="#E7000B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L10 10"
        stroke="#E7000B"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  venus: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 2V6M8 2V6"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 13V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10H21"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 18.5C16.3954 18.5 15.5 17.6046 15.5 16.5C15.5 15.3954 16.3954 14.5 17.5 14.5C18.6046 14.5 19.5 15.3954 19.5 16.5C19.5 17.6046 18.6046 18.5 17.5 18.5ZM17.5 18.5C19.433 18.5 21 20.067 21 22M17.5 18.5C15.567 18.5 14 20.067 14 22"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  allVenues: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.5 18L8 17L3.31623 18.5613C2.6687 18.7771 2 18.2951 2 17.6126V5.61799C2 5.23922 2.214 4.89296 2.55279 4.72357L7.58517 2.20738C7.84826 2.07583 8.15593 2.06679 8.4263 2.18266L15 4.99996H21C21.5523 4.99996 22 5.44768 22 5.99996V10.5"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2V17"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15 5V9.5"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8966 21.8023C18.9956 21.2182 22 19.3598 22 16.5C22 14.0147 19.9853 12 17.5 12C15.0147 12 13 14.0147 13 16.5C13 19.3598 16.0044 21.2182 17.1034 21.8023C17.3533 21.9351 17.6467 21.9351 17.8966 21.8023Z"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 16.5H17.509"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  edit: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8"
        stroke="#0A0A0A"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2499 1.74991C12.5151 1.48469 12.8748 1.33569 13.2499 1.33569C13.625 1.33569 13.9847 1.48469 14.2499 1.74991C14.5151 2.01512 14.6641 2.37483 14.6641 2.74991C14.6641 3.12498 14.5151 3.48469 14.2499 3.74991L8.24123 9.75924C8.08293 9.9174 7.88737 10.0332 7.67257 10.0959L5.75723 10.6559C5.69987 10.6726 5.63906 10.6736 5.58117 10.6588C5.52329 10.644 5.47045 10.6139 5.4282 10.5716C5.38594 10.5294 5.35583 10.4765 5.341 10.4186C5.32617 10.3607 5.32717 10.2999 5.3439 10.2426L5.9039 8.32724C5.96692 8.11261 6.08292 7.91728 6.24123 7.75924L12.2499 1.74991Z"
        stroke="#0A0A0A"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  games: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 2V6M8 2V6"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10H21"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 14H12.0045M11.9955 18H12.0045M15.991 14H16M8 14H8.00897M8 18H8.00897"
        stroke="#00C950"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  document: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9H8"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13H8"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17H8"
        stroke="#00A63E"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  notification: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 18V9.5C19 5.63401 15.866 2.5 12 2.5C8.13401 2.5 5 5.63401 5 9.5V18"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 18H3.5"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 20C13.5 20.8284 12.8284 21.5 12 21.5M12 21.5C11.1716 21.5 10.5 20.8284 10.5 20M12 21.5V20"
        stroke="#00A63E"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  complete: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 7H22V13"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7L13.5 15.5L8.5 10.5L2 17"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pending: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10H22"
        stroke="#00A63E"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  logout: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
    >
      <g clipPath="url(#clip0_824_6605)">
        <path
          d="M93.0975 24.3469C90.5775 15.0713 80.9306 5.4225 71.6531 2.9025C65.9644 1.485 58.3444 0.024375 48 0C37.6556 0.024375 30.0356 1.485 24.3469 2.9025C15.0713 5.4225 5.4225 15.0694 2.9025 24.3469C1.485 30.0356 0.024375 37.6556 0 48C0.024375 58.3444 1.485 65.9644 2.9025 71.6531C5.4225 80.9306 15.0713 90.5775 24.3469 93.0975C30.0356 94.515 37.6594 95.9756 48 96C58.3425 95.9756 65.9644 94.515 71.6531 93.0975C80.9306 90.5775 90.5775 80.9306 93.0975 71.6531C94.515 65.9644 95.9756 58.3406 96 48C95.9756 37.6556 94.515 30.0356 93.0975 24.3469Z"
          fill="#00A63E"
        />
        <path
          d="M48 16.125C41.6957 16.125 35.533 17.9944 30.2912 21.4969C25.0494 24.9994 20.9639 29.9776 18.5514 35.802C16.1388 41.6264 15.5076 48.0354 16.7375 54.2185C17.9674 60.4016 21.0032 66.0812 25.461 70.539C29.9188 74.9968 35.5984 78.0326 41.7815 79.2625C47.9647 80.4924 54.3737 79.8612 60.198 77.4487C66.0224 75.0361 71.0006 70.9506 74.5031 65.7088C78.0056 60.467 79.875 54.3043 79.875 48C79.875 39.5462 76.5168 31.4387 70.539 25.461C64.5613 19.4832 56.4538 16.125 48 16.125Z"
          fill="url(#paint0_linear_824_6605)"
        />
        <path
          d="M66.1873 42.7219L47.0192 62.8444C46.4972 63.3925 45.8699 63.8296 45.175 64.1295C44.48 64.4295 43.7317 64.5861 42.9748 64.59H42.9504C42.1979 64.5899 41.4531 64.4389 40.76 64.1458C40.0669 63.8527 39.4397 63.4236 38.9154 62.8837L28.7473 52.4081C28.1943 51.8872 27.7526 51.2596 27.4488 50.5632C27.145 49.8669 26.9854 49.1163 26.9797 48.3566C26.9739 47.5969 27.1221 46.8439 27.4153 46.143C27.7085 45.4421 28.1406 44.8079 28.6856 44.2786C29.2306 43.7494 29.8772 43.336 30.5863 43.0634C31.2955 42.7908 32.0525 42.6647 32.8117 42.6927C33.5709 42.7207 34.3166 42.9022 35.0037 43.2262C35.6909 43.5503 36.3053 44.0101 36.8098 44.5781L42.9036 50.8575L58.0329 34.9687C58.542 34.4333 59.1516 34.0034 59.8268 33.7035C60.502 33.4037 61.2297 33.2398 61.9683 33.2211C62.7068 33.2025 63.4418 33.3295 64.1313 33.595C64.8208 33.8604 65.4513 34.259 65.9867 34.7681C66.5221 35.2772 66.952 35.8867 67.2519 36.562C67.5517 37.2372 67.7156 37.9649 67.7343 38.7034C67.7529 39.442 67.6259 40.177 67.3604 40.8665C67.095 41.556 66.6964 42.1864 66.1873 42.7219Z"
          fill="url(#paint1_linear_824_6605)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_824_6605"
          x1="70.5431"
          y1="70.5431"
          x2="25.4569"
          y2="25.4569"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7DCAC9" />
          <stop offset="0.264423" stopColor="#00A63E" />
          <stop offset="1" stopColor="#A3D5F3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_824_6605"
          x1="56.7448"
          y1="53.1225"
          x2="38.4748"
          y2="34.8506"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBF6FC" />
          <stop offset="0.57" stopColor="#EEF0FC" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_824_6605">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};

export const MediaButton: React.FC<MediaButtonProps> = ({ type }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      {icons[type]}
    </div>
  );
};
