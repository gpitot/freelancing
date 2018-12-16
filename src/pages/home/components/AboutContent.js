

const content = {
    deals : {
        heading: 'Deals',
        id : 'deals', 
        content:  [
            {
                shape:'circle',
                color:'#e301e3',
                heading: '50% off for North Shore locals',
                info : `
                    If your company is based on the North Shore then your total expenditure will be reduced by 50%!
                `,
                icon:`piggy-bank`
            },
            {
                shape:'circle',
                color:'orange',
                heading: `Money back every time you refer us`,
                info : `
                    Every time you succesfully refer a business to us, we will give you back $50 on what you paid! </p>
                    This can go until you have earned back all your money.
                `,
                icon:`dollar-sign`
            },
            {
                shape:'circle',
                color:'lightgreen',
                heading: 'Money back if not 100% satisfied',
                info : `
                    If for any reason you are unsatisfied with our work, you can get a complete refund. 
                `,
                icon:`smile`
            }
        ]
    },
    services : {
        heading: 'Services',
        id : 'services', 
        width: '1200px',
        content:  [
            {
                shape:'square',
                color:'lightgreen',
                heading: 'Custom & Beautiful Designs',
                info : `We focus on giving clients the unique design that can best promote their business.`,
                icon:`handshake`
            },
            {
                shape:'square',
                color:'lightblue',
                heading: 'Built In Analytics ',
                info : `
                    We can deliver a range of detailed analytics on how your customers are using your site. </p>
                    This information can deliver a wealth of information on how to improve your business further. 
                `,
                icon:`chart-bar`
            },
            {
                shape:'square',
                color:'orange',
                heading: 'Booking and scheduling software',
                info : `
                    Let your customers book appointments online. </p> This will reduce queues and provide a more enjoyable experience
                    for your clients. 
                `,
                icon:`calendar-alt`
            },
            {
                shape:'square',
                color:'tomato',
                heading: 'Mobile application',
                info : `
                    Do you want a companion mobile app to increase retainment and engagement?  
                `,
                icon:`mobile-alt`
            },
            {
                shape:'square',
                color:'pink',
                heading: 'Hosting',
                info : `
                    Don't want to deal with the fuss of hosting your website? We can do it.
                `,
                icon:`landmark`
            }
        ]
    },
    aboutus :  {
        heading: 'About us',
        id: 'about',
        content:  [
            {
                shape:'circle',
                color:'lightgreen',
                heading: 'Experienced',
                info : `
                    We have experience with business both large and small. </p> We are a team of dedicated and resourceful web developers and designers, 
                    with a wide range of skills. 
                `,
                icon:`user-tie`
            },
            {
                shape:'circle',
                color:'yellow',
                heading: 'Refreshing',
                info : `
                    Want a website that is different? 
                    Something new?
                    We can do it.
                `,
                icon:`cocktail`
            },
            {
                shape:'circle',
                color:'#9d9dee',
                heading: 'Local',
                info : `
                    We are based here on the beaches, so whenever you want to chat face to face - we can do it. 
                `,
                icon:`compass`
            }
        ]
    }
}


export function Content(type) {
    return content[type];
}