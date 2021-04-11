let img = document.querySelector('img');
let mack = document.querySelector('#mack');
let aaron = document.querySelector('#aaron');
let paragraph = document.querySelector('p');

mack.addEventListener('click', () => {
	img.src = 'images/mack.png';
	paragraph.innerText = 'Hello! My name is Mackenzie Snider. I am a student at Fanshawe college and I am currently enrolled in the Interactive Media Design program. This BIO page was made to fulfill the requirements for an assignment in my MMED-1055 course. The course is a lot of fun! Every class we get to learn about JavaScript. While I am not the best coder in the world, I am trying my absolute hardest to produce the best work I possibly can. I love video editing. It is one of my biggest passions, along-side hockey. I hope to one day be a professional video editor. While I do not know where I will end up, I do know that if I actively pursue and dedicate enough time to my work, I will achieve my dreams. Also, I am a Pittsburg Penguins fan.';
});

aaron.addEventListener('click', () => {
	img.src = 'images/guyStock.png';
	paragraph.innerText = 'Hello, my name is Aaron Frenz. I am very cool, but I could NEVER be as cool as my creator, Mackenzie Snider. See… I am just a stock image of some random dude off the internet. While I may be dashingly handsome, I absolutely contributed nothing to this project. All of this work was completed by my creator, father and friend Mackenzie. I guess I should say a little something about myself! I do not really understand sports. It’s a sad life I have. I have been TOLD that if I do not support the great Pittsburg Penguins, then I will be deleted off of this website and replaced with “Lorem Ipsum”. I am scared. Help.';
});
