import React from 'react';
import './Footer.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const currentRoute = usePathname()
    return (
        <>
            <div className='lg:hidden relative mt-6 flex-col flex'>
                <div className='h-[40px] w-full bg-black '>

                </div>
                <div className='absolute bg-black z-10 h-[80px] left-1/2 transform -translate-x-1/2 w-[80px] rounded-[20px]' >

                </div>
                <div className='h-[60px] bg-[#191919] w-full'>

                </div>

                <div className='absolute z-20 w-full top-5'>
                    <div className='flex w-full justify-center'>
                        {currentRoute === "/collab"
                            ?
                            <Link href="/merge" className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                    <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M23.4997 14.9525L29.7207 20.8463V29.346C29.7207 29.9465 29.2164 30.375 28.6709 30.375H24.8994V25.865C24.8994 25.1516 24.2727 24.5732 23.4997 24.5732C22.7266 24.5732 22.0999 25.1516 22.0999 25.865V30.375H18.3284C17.783 30.375 17.2786 29.9465 17.2786 29.346V20.8463L23.4997 14.9525ZM14.4791 23.4584C13.9413 23.7906 13.207 23.7428 12.7248 23.3093C12.171 22.8115 12.1594 21.9936 12.6988 21.4826L14.8762 19.4197L21.6309 13.0203C21.631 13.0203 21.6309 13.0203 21.6309 13.0203C22.6587 12.0466 24.3407 12.0466 25.3684 13.0203C25.3684 13.0203 25.3684 13.0203 25.3684 13.0203L28.8362 16.3057V15.4219C28.8362 14.7084 29.4629 14.1301 30.2359 14.1301C31.009 14.1301 31.6357 14.7084 31.6357 15.4219V18.9579L34.3005 21.4826C34.8399 21.9936 34.8283 22.8115 34.2746 23.3093C33.7924 23.7428 33.0581 23.7906 32.5202 23.4583V29.346C32.5202 31.309 30.8312 32.9585 28.6709 32.9585H18.3284C16.1681 32.9585 14.4791 31.3091 14.4791 29.346V23.4584Z" fill="white" />
                                </svg>
                            </Link>
                            :
                            <Link href="/collab" className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                    <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                    <path opacity="0.3" d="M34.6001 22.8039C34.6001 23.7855 34.3008 24.7451 33.74 25.5613C33.1793 26.3775 32.3823 27.0136 31.4498 27.3892C30.5173 27.7649 29.4912 27.8632 28.5013 27.6717C27.5114 27.4802 26.6021 27.0075 25.8884 26.3134C25.8738 26.2992 25.8597 26.2846 25.846 26.2696L20.7547 20.6786C20.3242 20.2677 19.7786 19.9896 19.1862 19.8793C18.5938 19.7689 17.9811 19.8311 17.425 20.0581C16.8689 20.2851 16.3941 20.6668 16.0601 21.1553C15.7262 21.6438 15.5481 22.2173 15.5481 22.8039C15.5481 23.3905 15.7262 23.964 16.0601 24.4525C16.3941 24.941 16.8689 25.3227 17.425 25.5497C17.9811 25.7768 18.5938 25.839 19.1862 25.7286C19.7786 25.6182 20.3242 25.3401 20.7547 24.9293L21.0171 24.6411C21.106 24.5435 21.2137 24.4639 21.3342 24.4068C21.4547 24.3498 21.5856 24.3163 21.7194 24.3084C21.8532 24.3005 21.9873 24.3183 22.114 24.3608C22.2407 24.4033 22.3575 24.4697 22.4579 24.5561C22.5582 24.6426 22.6401 24.7474 22.6988 24.8645C22.7575 24.9817 22.7918 25.109 22.8 25.2391C22.8081 25.3692 22.7898 25.4996 22.7461 25.6229C22.7024 25.7461 22.6341 25.8598 22.5453 25.9573L22.2609 26.2696C22.2472 26.2846 22.2331 26.2992 22.2185 26.3134C21.5049 27.0075 20.5956 27.4802 19.6056 27.6717C18.6157 27.8632 17.5896 27.7649 16.6571 27.3893C15.7246 27.0136 14.9276 26.3775 14.3669 25.5613C13.8061 24.7451 13.5068 23.7855 13.5068 22.8039C13.5068 21.8223 13.8061 20.8628 14.3669 20.0466C14.9276 19.2304 15.7246 18.5943 16.6571 18.2186C17.5896 17.843 18.6157 17.7447 19.6056 17.9362C20.5956 18.1277 21.5049 18.6004 22.2185 19.2945C22.2331 19.3087 22.2472 19.3233 22.2609 19.3383L27.3522 24.9293C27.7827 25.3402 28.3283 25.6182 28.9207 25.7286C29.5131 25.839 30.1258 25.7768 30.6819 25.5497C31.238 25.3227 31.7129 24.941 32.0468 24.4525C32.3807 23.964 32.5588 23.3905 32.5588 22.8039C32.5588 22.2173 32.3807 21.6438 32.0468 21.1553C31.7129 20.6668 31.238 20.2851 30.6819 20.0581C30.1258 19.8311 29.5131 19.7689 28.9207 19.8793C28.3283 19.9896 27.7827 20.2677 27.3522 20.6786L27.0898 20.9668C26.9103 21.1638 26.6577 21.2835 26.3875 21.2994C26.1173 21.3154 25.8517 21.2263 25.649 21.0517C25.4464 20.8772 25.3233 20.6315 25.307 20.3687C25.2906 20.106 25.3822 19.8476 25.5617 19.6505L25.846 19.3383C25.8597 19.3233 25.8738 19.3087 25.8884 19.2945C26.6021 18.6004 27.5114 18.1277 28.5013 17.9362C29.4912 17.7447 30.5173 17.843 31.4498 18.2186C32.3823 18.5943 33.1793 19.2304 33.74 20.0466C34.3008 20.8628 34.6001 21.8223 34.6001 22.8039Z" fill="white" />
                                </svg>
                            </Link>
                        }

                        {currentRoute === '/historical' ?
                            <Link href="/merge" className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                    <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M23.4997 14.9525L29.7207 20.8463V29.346C29.7207 29.9465 29.2164 30.375 28.6709 30.375H24.8994V25.865C24.8994 25.1516 24.2727 24.5732 23.4997 24.5732C22.7266 24.5732 22.0999 25.1516 22.0999 25.865V30.375H18.3284C17.783 30.375 17.2786 29.9465 17.2786 29.346V20.8463L23.4997 14.9525ZM14.4791 23.4584C13.9413 23.7906 13.207 23.7428 12.7248 23.3093C12.171 22.8115 12.1594 21.9936 12.6988 21.4826L14.8762 19.4197L21.6309 13.0203C21.631 13.0203 21.6309 13.0203 21.6309 13.0203C22.6587 12.0466 24.3407 12.0466 25.3684 13.0203C25.3684 13.0203 25.3684 13.0203 25.3684 13.0203L28.8362 16.3057V15.4219C28.8362 14.7084 29.4629 14.1301 30.2359 14.1301C31.009 14.1301 31.6357 14.7084 31.6357 15.4219V18.9579L34.3005 21.4826C34.8399 21.9936 34.8283 22.8115 34.2746 23.3093C33.7924 23.7428 33.0581 23.7906 32.5202 23.4583V29.346C32.5202 31.309 30.8312 32.9585 28.6709 32.9585H18.3284C16.1681 32.9585 14.4791 31.3091 14.4791 29.346V23.4584Z" fill="white" />
                                </svg>
                            </Link>
                            :
                            <Link href="/historical">
                                <div className='mx-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                        <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M24.3275 17.5125L23.7913 19.1626C23.3057 20.6572 21.913 21.6691 20.3415 21.6691H18.6064L20.0101 22.6889C21.2815 23.6126 21.8135 25.2499 21.3278 26.7445L20.7917 28.3946L22.1954 27.3748C23.4667 26.4511 25.1883 26.4511 26.4596 27.3748L27.8633 28.3946L27.3271 26.7445C26.8415 25.2499 27.3735 23.6126 28.6449 22.6889L30.0486 21.6691H28.3135C26.742 21.6691 25.3493 20.6572 24.8637 19.1626L24.3275 17.5125ZM25.7074 14.7164C25.2731 13.3797 23.3819 13.3797 22.9476 14.7164L21.7214 18.4901C21.5272 19.0879 20.9701 19.4927 20.3415 19.4927H16.3737C14.9681 19.4927 14.3837 21.2913 15.5208 22.1175L18.7309 24.4497C19.2394 24.8192 19.4522 25.4741 19.2579 26.0719L18.0318 29.8456C17.5975 31.1823 19.1275 32.2939 20.2646 31.4678L23.4746 29.1355C23.9832 28.766 24.6718 28.766 25.1803 29.1355L28.3904 31.4678C29.5275 32.2939 31.0575 31.1823 30.6232 29.8456L29.397 26.0719C29.2028 25.4741 29.4156 24.8192 29.9241 24.4497L33.1342 22.1175C34.2713 21.2913 33.6869 19.4927 32.2813 19.4927H28.3135C27.6849 19.4927 27.1278 19.0879 26.9336 18.4901L25.7074 14.7164Z" fill="white" />
                                    </svg>
                                </div>
                            </Link>
                        }




                        {currentRoute === "/merge" ? (
                            <Link href="/merge" className=''>
                                <svg className='mt-[-25%]' xmlns="http://www.w3.org/2000/svg" width="103" height="104" viewBox="0 0 103 104" fill="none">
                                    <g filter="url(#filter0_d_1323_1268)">
                                        <rect x="26" y="22.5938" width="51" height="51" rx="18" fill="url(#paint0_linear_1323_1268)" shape-rendering="crispEdges" />
                                        <rect x="26.75" y="23.3438" width="49.5" height="49.5" rx="17.25" stroke="#1FED8B" stroke-width="1.5" shape-rendering="crispEdges" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5 38.494L58.4444 45.0731V54.5612C58.4444 55.2315 57.8814 55.7098 57.2725 55.7098H53.0625V50.6754C53.0625 49.879 52.3629 49.2334 51.5 49.2334C50.6371 49.2334 49.9375 49.879 49.9375 50.6754V55.7098H45.7274C45.1186 55.7098 44.5556 55.2315 44.5556 54.5612V45.0731L51.5 38.494ZM41.4306 47.9889C40.8301 48.3599 40.0105 48.3064 39.4722 47.8225C38.8541 47.2668 38.8411 46.3539 39.4432 45.7834L41.8738 43.4807L49.414 36.3372C49.414 36.3372 49.414 36.3372 49.414 36.3372C50.5612 35.2503 52.4388 35.2502 53.586 36.3371C53.586 36.3372 53.586 36.3371 53.586 36.3371L57.457 40.0046V39.018C57.457 38.2216 58.1566 37.576 59.0195 37.576C59.8825 37.576 60.582 38.2216 60.582 39.018V42.9652L63.5567 45.7834C64.1589 46.3539 64.1459 47.2668 63.5278 47.8225C62.9895 48.3064 62.1698 48.3599 61.5694 47.9889V54.5612C61.5694 56.7525 59.6841 58.5938 57.2725 58.5938H45.7274C43.316 58.5938 41.4306 56.7525 41.4306 54.5612V47.9889Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_d_1323_1268" x="0" y="0.59375" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1323_1268" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="15" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.929412 0 0 0 0 0.545098 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1323_1268" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1323_1268" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_1323_1268" x1="51" y1="37.0938" x2="47.5" y2="162.594" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1FED8B" />
                                            <stop offset="1" stop-color="#1FED8B" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        ) : currentRoute === "/historical" ? (
                            <Link href="/historical">
                                <div className=''>
                                    <svg className='mt-[-25%]' xmlns="http://www.w3.org/2000/svg" width="103" height="104" viewBox="0 0 103 104" fill="none">
                                        <g filter="url(#filter0_d_1323_1295)">
                                            <rect x="26" y="22.5938" width="51" height="51" rx="18" fill="url(#paint0_linear_1323_1295)" shape-rendering="crispEdges" />
                                            <rect x="26.75" y="23.3438" width="49.5" height="49.5" rx="17.25" stroke="#1FED8B" stroke-width="1.5" shape-rendering="crispEdges" />
                                        </g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.4208 41.0468L50.7926 42.9802C50.2236 44.7313 48.5918 45.9169 46.7506 45.9169H44.7177L46.3624 47.1118C47.8519 48.1941 48.4752 50.1124 47.9063 51.8635L47.2781 53.7968L48.9227 52.6019C50.4123 51.5197 52.4293 51.5197 53.9189 52.6019L55.5635 53.7969L54.9353 51.8635C54.3664 50.1124 54.9897 48.194 56.4792 47.1118L58.1239 45.9169H56.091C54.2498 45.9169 52.618 44.7313 52.049 42.9802L51.4208 41.0468ZM53.0376 37.7709C52.5287 36.2046 50.3129 36.2046 49.804 37.7709L48.3674 42.1922C48.1398 42.8927 47.4871 43.3669 46.7506 43.3669H42.1017C40.4549 43.3669 39.7701 45.4743 41.1025 46.4422L44.8635 49.1748C45.4593 49.6077 45.7087 50.375 45.4811 51.0755L44.0445 55.4968C43.5356 57.0631 45.3282 58.3655 46.6605 57.3975L50.4216 54.6649C51.0174 54.232 51.8242 54.232 52.42 54.6649L56.1811 57.3975C57.5134 58.3655 59.306 57.0631 58.7971 55.4968L57.3605 51.0755C57.1329 50.375 57.3823 49.6077 57.9781 49.1748L61.7391 46.4422C63.0714 45.4743 62.3867 43.3669 60.7399 43.3669H56.091C55.3545 43.3669 54.7018 42.8927 54.4742 42.1922L53.0376 37.7709Z" fill="white" />
                                        <defs>
                                            <filter id="filter0_d_1323_1295" x="0" y="0.59375" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1323_1295" />
                                                <feOffset dy="4" />
                                                <feGaussianBlur stdDeviation="15" />
                                                <feComposite in2="hardAlpha" operator="out" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.929412 0 0 0 0 0.545098 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1323_1295" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1323_1295" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_1323_1295" x1="51" y1="37.0938" x2="47.5" y2="162.594" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#1FED8B" />
                                                <stop offset="1" stop-color="#1FED8B" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </Link>
                        ) : currentRoute === "/collab" ? (
                            <Link href="/collab" className=''>
                                <svg className='mt-[-25%]' xmlns="http://www.w3.org/2000/svg" width="103" height="104" viewBox="0 0 103 104" fill="none">
                                    <g filter="url(#filter0_d_1323_1300)">
                                        <rect x="26" y="22.5938" width="51" height="51" rx="18" fill="url(#paint0_linear_1323_1300)" shape-rendering="crispEdges" />
                                        <rect x="26.75" y="23.3438" width="49.5" height="49.5" rx="17.25" stroke="#1FED8B" stroke-width="1.5" shape-rendering="crispEdges" />
                                    </g>
                                    <path d="M66.8004 46.4514C66.8004 47.7963 66.3903 49.111 65.622 50.2292C64.8538 51.3475 63.7618 52.2191 62.4842 52.7337C61.2066 53.2484 59.8007 53.3831 58.4444 53.1207C57.0881 52.8583 55.8423 52.2107 54.8644 51.2597C54.8445 51.2402 54.8251 51.2203 54.8064 51.1997L47.8307 43.5394C47.2409 42.9765 46.4933 42.5955 45.6817 42.4443C44.8701 42.293 44.0307 42.3783 43.2687 42.6893C42.5067 43.0004 41.8562 43.5233 41.3987 44.1926C40.9412 44.8619 40.6972 45.6477 40.6972 46.4514C40.6972 47.255 40.9412 48.0408 41.3987 48.7101C41.8562 49.3794 42.5067 49.9024 43.2687 50.2134C44.0307 50.5245 44.8701 50.6097 45.6817 50.4585C46.4933 50.3072 47.2409 49.9263 47.8307 49.3633L48.1903 48.9685C48.312 48.8348 48.4597 48.7257 48.6248 48.6475C48.7899 48.5693 48.9692 48.5235 49.1525 48.5127C49.3358 48.5019 49.5195 48.5263 49.6931 48.5845C49.8667 48.6427 50.0268 48.7337 50.1643 48.8521C50.3018 48.9705 50.4139 49.1141 50.4943 49.2746C50.5747 49.4352 50.6219 49.6096 50.633 49.7878C50.6441 49.9661 50.619 50.1448 50.5591 50.3136C50.4992 50.4825 50.4058 50.6382 50.284 50.7719L49.8944 51.1997C49.8757 51.2202 49.8563 51.2402 49.8364 51.2597C48.8585 52.2107 47.6127 52.8583 46.2564 53.1207C44.9001 53.3831 43.4942 53.2484 42.2166 52.7337C40.939 52.2191 39.847 51.3475 39.0787 50.2292C38.3105 49.111 37.9004 47.7963 37.9004 46.4514C37.9004 45.1065 38.3105 43.7917 39.0787 42.6735C39.847 41.5552 40.939 40.6837 42.2166 40.169C43.4942 39.6543 44.9001 39.5197 46.2564 39.782C47.6127 40.0444 48.8585 40.6921 49.8364 41.6431C49.8563 41.6625 49.8757 41.6825 49.8944 41.703L56.8701 49.3633C57.4599 49.9263 58.2075 50.3072 59.0191 50.4585C59.8307 50.6097 60.6701 50.5245 61.4321 50.2134C62.1941 49.9024 62.8446 49.3794 63.3021 48.7101C63.7596 48.0408 64.0036 47.2551 64.0036 46.4514C64.0036 45.6477 63.7596 44.8619 63.3021 44.1926C62.8446 43.5233 62.1941 43.0004 61.4321 42.6893C60.6701 42.3783 59.8307 42.293 59.0191 42.4443C58.2075 42.5955 57.4599 42.9765 56.8701 43.5394L56.5105 43.9342C56.2646 44.2043 55.9185 44.3682 55.5483 44.3901C55.1781 44.4119 54.8142 44.2898 54.5365 44.0507C54.2589 43.8115 54.0903 43.4749 54.0678 43.1149C54.0454 42.7548 54.1709 42.4009 54.4168 42.1309L54.8064 41.703C54.8251 41.6825 54.8445 41.6625 54.8644 41.643C55.8423 40.6921 57.0881 40.0444 58.4444 39.782C59.8007 39.5197 61.2065 39.6543 62.4842 40.169C63.7618 40.6837 64.8537 41.5553 65.622 42.6735C66.3903 43.7918 66.8004 45.1065 66.8004 46.4514Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_d_1323_1300" x="0" y="0.59375" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1323_1300" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="15" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.929412 0 0 0 0 0.545098 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1323_1300" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1323_1300" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_1323_1300" x1="51" y1="37.0938" x2="47.5" y2="162.594" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1FED8B" />
                                            <stop offset="1" stop-color="#1FED8B" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        ) : currentRoute === '/wallet' ? (
                            <Link href="/wallet" className=''>
                                <svg className='mt-[-25%]' xmlns="http://www.w3.org/2000/svg" width="103" height="104" viewBox="0 0 103 104" fill="none">
                                    <g filter="url(#filter0_d_1323_1291)">
                                        <rect x="26" y="22.5938" width="51" height="51" rx="18" fill="url(#paint0_linear_1323_1291)" shape-rendering="crispEdges" />
                                        <rect x="26.75" y="23.3438" width="49.5" height="49.5" rx="17.25" stroke="#1FED8B" stroke-width="1.5" shape-rendering="crispEdges" />
                                    </g>
                                    <path d="M59.1497 42.8369V41.9739C59.1497 40.7656 59.1497 40.1615 58.9027 39.7C58.6855 39.294 58.3387 38.964 57.9123 38.7571C57.4275 38.522 56.7927 38.522 55.5234 38.522H45.7777C44.5083 38.522 43.8737 38.522 43.3889 38.7571C42.9624 38.964 42.6157 39.294 42.3984 39.7C42.1514 40.1615 42.1514 40.7656 42.1514 41.9739V42.8369M42.1514 42.8369V52.3299C42.1514 53.5382 42.1514 54.1424 42.3984 54.6039C42.6157 55.0098 42.9624 55.3399 43.3889 55.5467C43.8737 55.7819 44.5083 55.7819 45.7777 55.7819H58.9231C60.1924 55.7819 60.8271 55.7819 61.3119 55.5467C61.7384 55.3399 62.0851 55.0098 62.3024 54.6039C62.5494 54.1424 62.5494 53.5382 62.5494 52.3299V46.2889C62.5494 45.0806 62.5494 44.4765 62.3024 44.015C62.0851 43.609 61.7384 43.2789 61.3119 43.0721C60.8271 42.8369 60.1924 42.8369 58.9231 42.8369H42.1514ZM62.5494 47.1519H60.283C59.0312 47.1519 58.0165 48.1178 58.0165 49.3094C58.0165 50.501 59.0312 51.4669 60.283 51.4669H62.5494" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <filter id="filter0_d_1323_1291" x="0" y="0.59375" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1323_1291" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="15" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.929412 0 0 0 0 0.545098 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1323_1291" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1323_1291" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_1323_1291" x1="51" y1="37.0938" x2="47.5" y2="162.594" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1FED8B" />
                                            <stop offset="1" stop-color="#1FED8B" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        ) : currentRoute === '/group' ? (
                            <Link href="/group" className=''>
                                <svg className='mt-[-25%]' xmlns="http://www.w3.org/2000/svg" width="103" height="104" viewBox="0 0 103 104" fill="none">
                                    <g filter="url(#filter0_d_1323_1287)">
                                        <rect x="26" y="22.5938" width="51" height="51" rx="18" fill="url(#paint0_linear_1323_1287)" shape-rendering="crispEdges" />
                                        <rect x="26.75" y="23.3438" width="49.5" height="49.5" rx="17.25" stroke="#1FED8B" stroke-width="1.5" shape-rendering="crispEdges" />
                                    </g>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.793 34.7381C52.1394 34.5456 52.5606 34.5456 52.907 34.7381L64.3766 41.1101C64.7408 41.3124 64.9666 41.6962 64.9666 42.1127C64.9666 42.5293 64.7408 42.9131 64.3766 43.1154L61.5935 44.6615L64.3766 46.2077C64.7408 46.41 64.9666 46.7938 64.9666 47.2104C64.9666 47.6269 64.7408 48.0107 64.3766 48.213L61.5935 49.7592L64.3766 51.3053C64.7408 51.5076 64.9666 51.8914 64.9666 52.308C64.9666 52.7245 64.7408 53.1083 64.3766 53.3106L52.907 59.6826C52.5606 59.8751 52.1394 59.8751 51.793 59.6826L40.3233 53.3106C39.9592 53.1083 39.7334 52.7245 39.7334 52.308C39.7334 51.8914 39.9592 51.5076 40.3233 51.3053L43.1065 49.7592L40.3233 48.213C39.9592 48.0107 39.7334 47.6269 39.7334 47.2104C39.7334 46.7938 39.9592 46.41 40.3233 46.2077L43.1065 44.6615L40.3233 43.1154C39.9592 42.9131 39.7334 42.5293 39.7334 42.1127C39.7334 41.6962 39.9592 41.3124 40.3233 41.1101L51.793 34.7381ZM45.4682 45.9736L43.2421 47.2104L52.35 52.2703L61.4579 47.2104L59.2318 45.9736L52.907 49.4874C52.5606 49.6798 52.1394 49.6798 51.793 49.4874L45.4682 45.9736ZM45.4682 51.0712L43.2421 52.308L52.35 57.3679L61.4579 52.308L59.2318 51.0712L52.907 54.585C52.5606 54.7774 52.1394 54.7774 51.793 54.585L45.4682 51.0712ZM43.2421 42.1127L52.35 47.1727L61.4579 42.1127L52.35 37.0528L43.2421 42.1127Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_d_1323_1287" x="0" y="0.59375" width="103" height="103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1323_1287" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="15" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.929412 0 0 0 0 0.545098 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1323_1287" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1323_1287" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_1323_1287" x1="51" y1="37.0938" x2="47.5" y2="162.594" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1FED8B" />
                                            <stop offset="1" stop-color="#1FED8B" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        ) : <></>}


                        {currentRoute === "/wallet"
                            ?
                            <Link href="/merge" className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                    <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M23.4997 14.9525L29.7207 20.8463V29.346C29.7207 29.9465 29.2164 30.375 28.6709 30.375H24.8994V25.865C24.8994 25.1516 24.2727 24.5732 23.4997 24.5732C22.7266 24.5732 22.0999 25.1516 22.0999 25.865V30.375H18.3284C17.783 30.375 17.2786 29.9465 17.2786 29.346V20.8463L23.4997 14.9525ZM14.4791 23.4584C13.9413 23.7906 13.207 23.7428 12.7248 23.3093C12.171 22.8115 12.1594 21.9936 12.6988 21.4826L14.8762 19.4197L21.6309 13.0203C21.631 13.0203 21.6309 13.0203 21.6309 13.0203C22.6587 12.0466 24.3407 12.0466 25.3684 13.0203C25.3684 13.0203 25.3684 13.0203 25.3684 13.0203L28.8362 16.3057V15.4219C28.8362 14.7084 29.4629 14.1301 30.2359 14.1301C31.009 14.1301 31.6357 14.7084 31.6357 15.4219V18.9579L34.3005 21.4826C34.8399 21.9936 34.8283 22.8115 34.2746 23.3093C33.7924 23.7428 33.0581 23.7906 32.5202 23.4583V29.346C32.5202 31.309 30.8312 32.9585 28.6709 32.9585H18.3284C16.1681 32.9585 14.4791 31.3091 14.4791 29.346V23.4584Z" fill="white" />
                                </svg>
                            </Link>
                            :
                            <Link href="/wallet" className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                    <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                    <g opacity="0.3">
                                        <path d="M30.5613 18.9895V18.1927C30.5613 17.077 30.5613 16.5192 30.3332 16.0931C30.1326 15.7182 29.8124 15.4135 29.4187 15.2225C28.971 15.0054 28.385 15.0054 27.213 15.0054H18.2145C17.0425 15.0054 16.4565 15.0054 16.0088 15.2225C15.6151 15.4135 15.2949 15.7182 15.0943 16.0931C14.8662 16.5192 14.8662 17.077 14.8662 18.1927V18.9895M33.7003 22.9736H31.6076C30.4518 22.9736 29.5149 23.8655 29.5149 24.9657C29.5149 26.0659 30.4518 26.9578 31.6076 26.9578H33.7003M14.8662 18.9895V27.7546C14.8662 28.8702 14.8662 29.4281 15.0943 29.8542C15.2949 30.229 15.6151 30.5338 16.0088 30.7247C16.4565 30.9419 17.0425 30.9419 18.2145 30.9419H30.352C31.524 30.9419 32.11 30.9419 32.5577 30.7247C32.9514 30.5338 33.2716 30.229 33.4722 29.8542C33.7003 29.4281 33.7003 28.8702 33.7003 27.7546V22.1768C33.7003 21.0611 33.7003 20.5033 33.4722 20.0772C33.2716 19.7023 32.9514 19.3976 32.5577 19.2066C32.11 18.9895 31.524 18.9895 30.352 18.9895H14.8662Z" fill="#464646" />
                                        <path d="M30.5613 18.9895V18.1927C30.5613 17.077 30.5613 16.5192 30.3332 16.0931C30.1326 15.7182 29.8124 15.4135 29.4187 15.2225C28.971 15.0054 28.385 15.0054 27.213 15.0054H18.2145C17.0425 15.0054 16.4565 15.0054 16.0088 15.2225C15.6151 15.4135 15.2949 15.7182 15.0943 16.0931C14.8662 16.5192 14.8662 17.077 14.8662 18.1927V18.9895M14.8662 18.9895V27.7546C14.8662 28.8702 14.8662 29.4281 15.0943 29.8542C15.2949 30.229 15.6151 30.5338 16.0088 30.7247C16.4565 30.9419 17.0425 30.9419 18.2145 30.9419H30.352C31.524 30.9419 32.11 30.9419 32.5577 30.7247C32.9514 30.5338 33.2716 30.229 33.4722 29.8542C33.7003 29.4281 33.7003 28.8702 33.7003 27.7546V22.1768C33.7003 21.0611 33.7003 20.5033 33.4722 20.0772C33.2716 19.7023 32.9514 19.3976 32.5577 19.2066C32.11 18.9895 31.524 18.9895 30.352 18.9895H14.8662ZM33.7003 22.9736H31.6076C30.4518 22.9736 29.5149 23.8655 29.5149 24.9657C29.5149 26.0659 30.4518 26.9578 31.6076 26.9578H33.7003" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            </Link>
                        }


                        {currentRoute === "/group"
                            ?
                            <Link href="/merge" className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                    <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M23.4997 14.9525L29.7207 20.8463V29.346C29.7207 29.9465 29.2164 30.375 28.6709 30.375H24.8994V25.865C24.8994 25.1516 24.2727 24.5732 23.4997 24.5732C22.7266 24.5732 22.0999 25.1516 22.0999 25.865V30.375H18.3284C17.783 30.375 17.2786 29.9465 17.2786 29.346V20.8463L23.4997 14.9525ZM14.4791 23.4584C13.9413 23.7906 13.207 23.7428 12.7248 23.3093C12.171 22.8115 12.1594 21.9936 12.6988 21.4826L14.8762 19.4197L21.6309 13.0203C21.631 13.0203 21.6309 13.0203 21.6309 13.0203C22.6587 12.0466 24.3407 12.0466 25.3684 13.0203C25.3684 13.0203 25.3684 13.0203 25.3684 13.0203L28.8362 16.3057V15.4219C28.8362 14.7084 29.4629 14.1301 30.2359 14.1301C31.009 14.1301 31.6357 14.7084 31.6357 15.4219V18.9579L34.3005 21.4826C34.8399 21.9936 34.8283 22.8115 34.2746 23.3093C33.7924 23.7428 33.0581 23.7906 32.5202 23.4583V29.346C32.5202 31.309 30.8312 32.9585 28.6709 32.9585H18.3284C16.1681 32.9585 14.4791 31.3091 14.4791 29.346V23.4584Z" fill="white" />
                                </svg>
                            </Link>
                            :
                            <Link href="/group" className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="48" viewBox="0 0 47 48" fill="none">
                                    <rect y="0.256348" width="47" height="47" rx="15" fill="#464646" />
                                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M23.8113 12.4123C24.1047 12.2493 24.4613 12.2493 24.7547 12.4123L34.4669 17.8079C34.7752 17.9792 34.9664 18.3042 34.9664 18.6569C34.9664 19.0096 34.7752 19.3346 34.4669 19.5059L32.1102 20.8152L34.4669 22.1244C34.7752 22.2957 34.9664 22.6207 34.9664 22.9734C34.9664 23.3262 34.7752 23.6511 34.4669 23.8224L32.1102 25.1317L34.4669 26.441C34.7752 26.6123 34.9664 26.9372 34.9664 27.29C34.9664 27.6427 34.7752 27.9677 34.4669 28.139L24.7547 33.5346C24.4613 33.6976 24.1047 33.6976 23.8113 33.5346L14.0992 28.139C13.7908 27.9677 13.5996 27.6427 13.5996 27.29C13.5996 26.9372 13.7908 26.6123 14.0992 26.441L16.4558 25.1317L14.0992 23.8224C13.7908 23.6511 13.5996 23.3262 13.5996 22.9734C13.5996 22.6207 13.7908 22.2957 14.0992 22.1244L16.4558 20.8152L14.0992 19.5059C13.7908 19.3346 13.5996 19.0096 13.5996 18.6569C13.5996 18.3042 13.7908 17.9792 14.0992 17.8079L23.8113 12.4123ZM18.4557 21.9262L16.5707 22.9734L24.283 27.2581L31.9953 22.9734L30.1103 21.9262L24.7547 24.9016C24.4613 25.0645 24.1047 25.0645 23.8113 24.9016L18.4557 21.9262ZM18.4557 26.2427L16.5707 27.29L24.283 31.5746L31.9953 27.29L30.1103 26.2427L24.7547 29.2181C24.4613 29.3811 24.1047 29.3811 23.8113 29.2181L18.4557 26.2427ZM16.5707 18.6569L24.283 22.9415L31.9953 18.6569L24.283 14.3723L16.5707 18.6569Z" fill="white" />
                                </svg>
                            </Link>
                        }



                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer