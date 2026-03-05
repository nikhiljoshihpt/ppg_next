export const heroImages = [
    {path: "", size: 24, left: 5, top: 25, },
    {path: "", size: 12, left: 12, top: 61, },
    {path: "", size: 16, left: 30, top: 51, },
    {path: "", size: 8, left: 50, top: 61, },
    {path: "", size: 12, left: 60, top: 61, },
    {path: "", size: 12, left: 50, top: 51, },
    {path: "", size: 12, left: 43, top: 41, },
    {path: "", size: 48, left: 80, top: 38, },
  
    {size: 16, left: 80, top: 15, path: "/assets/images/home/home-bubble-img1.jpg", url: "/work", color: "violet"},
    {size: 48, left: 70, top: 56, path: "/assets/images/home/home-bubble-img2.jpg", url: "/work", color: "indigo"},
    {size: 72, left: 15, top: 11, path: "/assets/images/home/home-bubble-img3.jpg", url: "/work", color: "blue"},
    {size: 56, left: 48, top: 65, path: "/assets/images/home/home-bubble-img4.jpg", url: "/work", color: "green"},
    {size: 96, left: 44, top: 16, path: "/assets/images/home/home-bubble-img5.jpg", url: "/work", color: "yellow"},
    {size: 96, left: 8, top: 61, path: "/assets/images/home/home-bubble-img6.jpg", url: "/work", color: "orange"},
    {size: 64, left: 0, top: 36, path: "/assets/images/home/home-bubble-img7.jpg", url: "/work", color: "red"},
]

export const socials = [
    // {name: "LinkedIn", icon: "linkedin.png", url: "https://linkedin.com/", },
    {name: "Instagram", icon: "instagram.png", url: "https://www.instagram.com/prestige_promotion_group_llc", },
    {name: "Facebook", icon: "facebook.png", url: "https://www.facebook.com/p/Prestige-Promotion-Group-LLC-100063792138258/", },
];

export const formPagesData = [
    {
        tabId: 1,
        tabLabel: 'Side Heros',
        formTitle: 'Data Entry for Side Heros',
        formInputs: [
            {      
                label: 'Order ID',
                type: 'number',
                required: true,
                name: 'orderId',
            },
            {      
                label: 'Image Path',
                type: 'text',
                required: true,
                name: 'imagePath',
            },
            {      
                label: 'Text',
                type: 'text',
                required: true,
                name: 'text',
            },
            // {      
            //     label: 'Active',
            //     type: 'checkbox',
            //     required: false,
            //     name: 'isActive',
            // },
        ],
        dbCollectionId: 'sideHeros',
    },
]

export const coreValues = [
    {image: "", title: "Partnership", subtitle: "We are here for you", details: "We are an extension of your brand, and have a personal stake in its growth."},
    {image: "", title: "Consistency", subtitle: "We are at it, always", details: "We pride ourselves on taking care of the event before, during, and after, every time."},
    {image: "", title: "Reliability", subtitle: "We got your back", details: "40+ brands trust us to be on the ground and represent them to the customer, and we take that seriously."},
    {image: "", title: "Innovation", subtitle: "We lead with creativity", details: "Interactive marketing is a space ripe for creativity and avant garde ideas, and we do our best to create a strategy that works for you."},
    {image: "", title: "Adaptability", subtitle: "We evolve to meet your needs", details: "The events space is dynamic, and we’re flexible to meet every change and challenge."},
]

export const works = [
  {
    title: "Sampling ZOA Energy at the NCAA Division | Men's Basketball Championship in Wichita, KS",
    image: '/assets/images/work/workpage-zoa.jpg',
    slug: 'zoa-wichita',
    description: `<p>The high-energy atmosphere of the NCAA Division I Men's Basketball Championship—better known as March Madness—provided the perfect setting to introduce fans to <b>ZOA Energy</b>, a line of zero-sugar energy drinks. During the First and Second Rounds hosted at INTRUST Bank Arena in Wichita, Kansas, our team engaged enthusiastic crowds over multiple exciting days. As thousands of attendees cheered for bracket-busting games and tournament action, we delivered hands-on sampling experiences—passing out ice-cold samples and sparking positive interactions right in the heart of the festivities.</p> <p>This fast-paced, fan-filled event demonstrated Prestige Promotion Group's skill in creating seamless, on-site activations that connect products with passionate audiences in high-profile, seasonal environments—driving engagement through strategic planning, energetic brand ambassadors, and targeted consumer touchpoints.</p>`,
    // elements: [
    //   {
    //     title: 'Objectives Planning and Execution:',
    //     type: 'list',
    //     listItems: ['Enhanced brand image', ' Engage consumers', 'Increase brand loyalty', 'Boost sales'],
    //   },
    //   {
    //     title: 'Key Components:',
    //     type: 'underline',
    //     listItems: [
    //       {
    //         bullet: 'Venue and Setup:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem voluptatem quam corporis illum cupiditate nesciunt at omnis recusandae alias!',
    //       },
    //       {
    //         bullet: 'Entertainment and Activities:',
    //         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, cum quod alias minima facere ut ipsam explicabo laborum ex labore? Ratione, voluptatem odio.',
    //       },
    //       {
    //         bullet: 'Product sampling and sales:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro reprehenderit perferendis hic impedit possimus expedita nisi ducimus! Hic, fugiat odio?',
    //       },
    //       {
    //         bullet: 'Social Media Integration:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo ipsum recusandae vitae non? Dolorem in adipisci voluptate sit voluptas pariatur quis?',
    //       },
    //       {
    //         bullet: 'Sustainability Efforts:',
    //         text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, consequuntur illo id fugiat dolorum perferendis nihil est repellat repellendus necessitatibus harum voluptate voluptates dolor.',
    //       },
    //     ]
    //   },
    //   {
    //     title: 'Outcomes:',
    //     type: 'underline',
    //     listItems: [
    //       {
    //         bullet: 'Brand Engagement:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem voluptatem quam corporis illum cupiditate nesciunt at omnis recusandae alias!',
    //       },
    //       {
    //         bullet: 'Social Media Impact:',
    //         text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, cum quod alias minima facere ut ipsam explicabo laborum ex labore? Ratione, voluptatem odio.',
    //       },
    //       {
    //         bullet: 'Sales boost:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro reprehenderit perferendis hic impedit possimus expedita nisi ducimus! Hic, fugiat odio?',
    //       },
    //       {
    //         bullet: 'Sustainibility recognition:',
    //         text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo ipsum recusandae vitae non? Dolorem in adipisci voluptate sit voluptas pariatur quis?',
    //       },
    //     ]
    //   }
    // ],
    // conclusion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quibusdam? Repellendus perferendis ut eaque voluptatem, reprehenderit ducimus error animi vel beatae!',
  },
  {
    title: 'Modelo regional sampling drive in partnership with Buffalo Wild Wings.',
    image: '/assets/images/work/workpage-corona.jpg',
    slug: 'corona-premise',
    description: `<p>Buffalo Wild Wings restaurants across the Midwest, served as prime venues for a targeted sampling campaign featuring <b>Modelo</b>.</p><p>In partnership with the brand, our team rolled out an on-site sampling activation at Buffalo Wild Wings locations spanning several Midwest states. Throughout the promotion period, as guests enjoyed games, food, and the lively restaurant atmosphere, we delivered engaging hands-on experiences—offering chilled Modelo samples and fostering positive brand interactions at tables, bars, and high-traffic areas.</p><p>This multi-location initiative showcased Prestige Promotion Group's expertise in coordinating scalable, high-traffic restaurant activations—connecting products with receptive consumers through precise planning, trained brand ambassadors, and strategic engagement during peak times like game days and gatherings.</p>`,
  },
  {
    title: 'Sampling Simply Spiked at the Great Forest Park Balloon Race',
    image: '/assets/images/work/workpage-balloon.jpg',
    slug: 'molson-coors',
    description: `<p>An exciting weekend at the Great Forest Park Balloon Race in St. Louis provided the ideal backdrop for introducing attendees to <b>Simply Spiked</b>, Molson Coors' line of refreshing, alcoholic beverages made with real fruit juice.</p><p>Over two dynamic days, as hundreds of festival-goers enjoyed the iconic balloon glow, competitive races, and family-friendly atmosphere in one of the city's most beloved parks, our team delivered engaging, hands-on sampling experiences. We helped quench thirsts with ice-cold servings right in the heart of the festivities, creating positive brand interactions and memorable moments amid the soaring balloons and vibrant crowds.</p><p>This high-energy event showcased Prestige Promotion Group's ability to execute seamless, on-site activations that connect products with enthusiastic audiences in perfect seasonal settings—delivering results through expert planning, enthusiastic brand ambassadors, and strategic consumer engagement.</p>`,
  },
  {
    title: 'Introducing Señorita THC Beverages at Total Wine & More Locations Across the Midwest',
    image: '/assets/images/work/workpage-veterans.jpg',
    slug: 'soldiers-songs',
    description: `<p>The rollout of <b>Señorita</b>, a line of hemp-derived THC-infused beverages, marked the introduction of a new product category to retail shelves in select Midwest markets.
Working closely with the brand, our team launched a large-scale, in-store sampling campaign at Total Wine & More locations across the midwest.</p><p>Over the course of consistent activations, brand ambassadors focused on both consumer engagement and education—providing hands-on sampling of chilled servings while explaining key aspects of the emerging THC beverage category, including product features, effects, and responsible enjoyment, to help customers unfamiliar with this space make informed choices.</p><p>This multi-location initiative demonstrated Prestige Promotion Group's ability to execute thoughtful, education-driven activations in high-volume retail environments—building consumer familiarity and confidence through strategic partnerships, trained ambassadors, and ongoing sampling that aligned with new product launches and category development.</p>`,
  },
]
