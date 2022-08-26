const createFullName = (firstName, lastName) => firstName + ' ' + lastName;

console.log(createFullName ('jeff', 'skinner'));


const doubleNumber = number => number * 2;

console.log(doubleNumber(6));


const array = [1, 2, 3, 4, 5];

const getEvenNumbers = (array) => {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
        }
    }
return evenNumbers;
}

console.log(getEvenNumbers(array));







const customers = [
    { name:"sam", address: {street: '1234 W Bell Rd', city: 'Phoenix', zip: '85308', state: 'AZ'}, membershipLevel: 'SILVER', age: 32},
    {
        name:'cam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Perth',
            zip: '85308',
            state: ''
        },
        membershipLevel: 'SILVER',
        age: 32
    },
    {
        name:'beth',
        address: {
            street: '',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 29
    },
    {
        name:'raam',
        address: {
            street: '1234 W Bell Rd',
            city: '',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name:'theam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Peoria',
            zip: '',
            state: 'AZ'
        },
        membershipLevel: 'PLATINUM',
        age: 32
    },
];


function customerPurchaseMostSocks (array){
    let startsWithC = [];
    
    for(i = 0; i < customers.length; i++){
        if (array[i].name.startsWith ('c') || array[i].name.startsWith ('C')){
        startsWithC.push(array[i]);
        
     }
    } 
    let addressDefined =[];
    for(i = 0; i < customers.length; i++){
        if (array[i].address.street != '' && array[i].address.city != '' && array[i].address.zip != '' && array[i].address.state != ''){
            addressDefined.push(array[i]);
        }
    } 
    let cityState =[];
    for(i = 0; i < customers.length; i++){
        if(array[i].address.city === 'Peoria' && array[i].address.state === 'AZ'){
            cityState.push(array[i]);
        }
    }
    let memberLevel =[];
    for(i = 0; i < customers.length; i++){
        if(array[i].membershipLevel === 'GOLD' || array[i].membershipLevel === 'PLATINUM' || array[i].age <= 29){
            memberLevel.push(array[i]);
        }
    }
    
    

    const mostSocks = startsWithC.concat(addressDefined).concat(cityState).concat(memberLevel);
    return mostSocks;
    
}

console.log(customerPurchaseMostSocks(customers));


