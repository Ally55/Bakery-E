const  prevButton = document.querySelector('.prev-image-button');
const  nextButton = document.querySelector('.next-image-button');
const smallImages = document.querySelectorAll('.circle-image');
const productName = document.querySelector('.product-name');
const catchyResume = document.querySelector('.catchy-resume');
const recipeIngredients = document.querySelector('.recipe-ingredients'); 
const recipeMinutes = document.querySelector('.recipe-minutes');
const recipeImage = document.querySelector('.recipe-image');
let currentRecipeIndex = 0;

const recipes = [
{   
        img: 'assets/images/pancakes.jpg',
        title: 'Tasty Pancakes',
        subtitle: 'Season Favourite',
        description: 'Six pancakes made from flour milled in the Smokies. Served with nuts, warm maple syrup, and real whipped butter. It’s what we are all about!',
        time: 40
    },
    {
        
        img: './assets/images/croissant.jpg',
        title: 'Fluffy Croissants',
        subtitle: 'Snack on the go',
        description: 'Two light croissants being crisp on the outside and fluffy on the inside. They are perfect for a quick breakfast in rushed mornings.',
        time: 20
    },
    {
        img: './assets/images/dessert2.jpg',
        title: 'Various desserts',
        subtitle: 'Delightful Moments',
        description: 'The desserts consist of variations of flavours, textures and appearances. You can choose the right cake for you and your friends depending on tastes.',
        time: 60
    },
    {
        img: './assets/images/pancakes2.jpg',
        title: 'Delicious Pancakes',
        subtitle: 'The Perfect Breakfast for you',
        description: 'Multiple pancakes made with less sugar, but with richest fruits in vitamins such as strawberries, raspberries and cherries.',
        time: 20
    },
    {
        img: './assets/images/dessert1.jpg',
        title: 'Creamy Cake',
        subtitle: 'Perfect for a week day',
        description: 'Made with care by our professional chefs, this excellent cake is highly flavored and particularly rich in sweetness.',
        time: 45
    },
    {
        img: './assets/images/sandwich.jpg',
        title: 'American Sandwich',
        subtitle: 'Perfect being served at any time of the day',
        description: 'The delicious sandwich made with fresh vegetables and natural hand-made souce wrapped in 2 crispy slices of bread.',
        time: 15
    },
    {
        img: './assets/images/sugar.jpg',
        title: 'Sweet donuts',
        subtitle: 'Always include in your day a bit of sweetness',
        description: 'Our favorite donuts subtly flavored with sugar powder are always available in our bakery.',
        time: 25
    }
];

function populateRecipe(currentRecipe){
    productName.textContent = currentRecipe.title;
    catchyResume.textContent = currentRecipe.subtitle;
    recipeIngredients.textContent = currentRecipe.description;
    recipeMinutes.textContent = currentRecipe.time;
    recipeImage.style.backgroundImage = `url(${currentRecipe.img})`;
}


function handlePrevButton() {
    switchBackSmallImages('back');

    const lastIndex = recipes.length - 1;
    if (currentRecipeIndex === 0) {
        currentRecipeIndex = lastIndex;
    }
    else {
        currentRecipeIndex -= 1;
    }
    const currentRecipe = recipes[currentRecipeIndex];
    populateRecipe(currentRecipe);


}

function handleNextButton() {
    switchNextSmallImages('forward');
    
    if (currentRecipeIndex === recipes.length - 1) {
        currentRecipeIndex = 0;
    } else {
        currentRecipeIndex++;
    }
    const currentRecipe = recipes[currentRecipeIndex];
    populateRecipe(currentRecipe);

    
}

function switchBackSmallImages(direction) {
    console.log(currentRecipeIndex);
    if (direction === 'back') {
        const images = [];
        for(let i = 1; i < 4; i++){
            let index = currentRecipeIndex - i;
            if(index < 0) {
                index = recipes.length - (i + 1);
            }
            images.push(recipes[index].img);
        }
        

        smallImages.forEach((img, index) => {
            img.src = images[index];
        });
    }
}

function switchNextSmallImages(direction){
    if (direction === 'forward') {
        {
            const images = [];
            for(let i = 1; i < 4; i++) {
                let index = currentRecipeIndex + i;
                if (index > recipes.length - 1) {
                    index -= recipes.length;
                }
                images.push(recipes[index].img);
            }
            smallImages.forEach((img, index) => {
                img.src = images[index];
            });
             
        }
    }
}

prevButton.addEventListener('click', handlePrevButton);
nextButton.addEventListener('click', handleNextButton);


// Responsive Burger Button
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-responsive');

function handleBurgerButton() {
    if(burger.classList.toggle('is-active')) {
        menu.style.display = 'block';
        
    } else {
        menu.style.display = 'none';
    }
}

burger.addEventListener('click', handleBurgerButton);



