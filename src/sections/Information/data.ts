import image from 'assets/images/avatar.jpg';

const data = {
    position: 'Pre-Senior Frontend Developer',
    description: 'Tôi là một người trẻ, nhiệt tình, cởi mở và có trách nhiệm',
    options: [
        {
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe h-3 w-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            `,
            text: 'Đông Anh, Hà Nội, Việt Nam',
        },
        {
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047c.42 2.783 1.66 7.83 5.283 11.453c3.805 3.805 9.286 5.456 12.302 6.113c1.165.253 2.198-.655 2.198-1.848v-3.584z"/></svg>
            `,
            text: '0867752667'
        },
    ],
    image: image,
    contacts: [
        {
            title: 'Email',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 14">
                <path fill="currentColor"
                    d="M14.5 13h-13C.67 13 0 12.33 0 11.5v-9C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5ZM1.5 2c-.28 0-.5.22-.5.5v9c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-13Z" />
                <path fill="currentColor"
                    d="M8 8.96c-.7 0-1.34-.28-1.82-.79L.93 2.59c-.19-.2-.18-.52.02-.71c.2-.19.52-.18.71.02l5.25 5.58c.57.61 1.61.61 2.18 0l5.25-5.57c.19-.2.51-.21.71-.02c.2.19.21.51.02.71L9.82 8.18c-.48.51-1.12.79-1.82.79Z" />
                </svg>
            `,
            link: 'mailto:manhngo166@gmail.com'
        },
        {
            title: 'Linkedin',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="M2.913 2.362c.26-.268.403-.626.4-.998A1.417 1.417 0 0 0 1.928 0A1.428 1.428 0 0 0 .532 1.364a1.449 1.449 0 0 0 1.396 1.428a1.42 1.42 0 0 0 .985-.43ZM1.67 4.63c-.587-.013-.987-.022-.987.696v7.992c0 .703.382.689.932.668c.1-.004.205-.008.314-.008c.11 0 .215.004.314.008c.548.02.922.035.922-.668V5.327c0-.718-.392-.71-.976-.696a11.321 11.321 0 0 1-.519 0Zm4.084.015c-.266.053-.437.223-.437.681v7.992c0 .703.367.689.918.668c.1-.004.207-.008.318-.008c.112 0 .218.004.319.008c.554.02.928.035.928-.668V9.056a1.545 1.545 0 0 1 1.577-1.695a1.534 1.534 0 0 1 1.62 1.663v4.261c0 .704.366.69.917.669c.1-.004.207-.008.318-.008c.112 0 .218.004.319.008c.551.02.917.035.917-.668V7.83a3.195 3.195 0 0 0-3.388-3.335a2.674 2.674 0 0 0-2.387 1.066c.011-.394-.117-.916-.436-.916c-.092 0-.233-.005-.393-.01c-.4-.012-.92-.028-1.11.01Z"
                        clip-rule="evenodd" />
                </svg>
            `,
            link: 'https://www.linkedin.com/in/manh-ngo-512a08279/'
        },
        {
            title: 'Github',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <g fill="none">
                        <g clip-path="url(#akarIconsGithubFill0)">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
                                clip-rule="evenodd" />
                        </g>
                        <defs>
                            <clipPath id="akarIconsGithubFill0">
                                <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                        </defs>
                    </g>
                </svg>
            `,
            link: 'https://github.com/manhngo166'
        },
        {
            title: 'Facebook',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24">
                    <g fill="none">
                        <g clip-path="url(#akarIconsFacebookFill0)">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
                                clip-rule="evenodd" />
                        </g>
                        <defs>
                            <clipPath id="akarIconsFacebookFill0">
                                <path fill="#fff" d="M0 0h24v24H0z" />
                            </clipPath>
                        </defs>
                    </g>
                </svg>
            `,
            link: 'https://www.facebook.com/manhnq097/'
        }
    ]
};

export default data;