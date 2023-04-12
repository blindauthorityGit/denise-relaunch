import { FaFacebook, FaInstagram } from "react-icons/fa";

const menuItems = [
    {
        title: "Bäckerei",
        slug: "baeckerei",
        subMenu: false,
        subMenuItems: [
            {
                title: "Winterakademie 2023",
                slug: "about",
            },
            {
                title: "Frühlingsakademie 2023",
                slug: "sammlungen",
            },
            {
                title: "Sommerakademie 2023",
                slug: "https://cdn.sanity.io/files/7all625u/dev/5a6f73b99aceb4c681ca63eb1b1ac1f447064ae7.pdf",
                external: true,
            },
            {
                title: "Herbstakademie 2023",
                slug: "blog",
            },
        ],
    },
    {
        title: "Denise",
        slug: "denise",
        subMenu: false,
    },
    {
        title: "Weingebäck",
        slug: "weingebaeck",
        subMenu: false,
    },
    {
        title: "Kontakt",
        slug: "kontakt",
        subMenu: false,
    },
];
const socialMedia = [
    {
        title: "Facebook",
        link: "http://www.facebook.com/piz1000",
        icon: <FaFacebook></FaFacebook>,
    },
    {
        title: "Instagram",
        link: "http://www.instagram.com",
        icon: <FaInstagram></FaInstagram>,
    },
];

export { menuItems, socialMedia };
