
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItNmLE2nm2NYAEh3VNSH00cwCD6UkIR3fXQ&s',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1113667778664, 'marywinkle@gmail.com'],
        isAvailable: true
        
    },

    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6GtRXRaDFlZzDRhDBb6t3WThiZ2Sp9obZg&s',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+116856795534, 'garydavis@hotmail.com'],
        isAvailable: false 
    },

    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlZo727G2zM_cq9fG5PcVHs4tyclyog_IaA&s',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 17',
            city: 'Chicago',
            code: 35433,
            country: 'United States',
        },
        contact: [+12455455454574, 'liloroiyce@hotmail.com'],
        isAvailable: true 
    },
    
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}

let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'
