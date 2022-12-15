const androidButton = document.getElementById('androidOn');
const iosButton = document.getElementById('iosOn');
const androidIndicator = document.querySelector('.open-indicator--android');
const iosIndicator = document.querySelector('.open-indicator--ios');
const androidImage = document.querySelector('.greeting-container__image--android');
const iosImage = document.querySelector('.greeting-container__image--phone');
const androidContainer = document.querySelector('.android-container');
const iosContainer = document.querySelector('.ios-container');

androidButton.addEventListener('click', () => {
    androidIndicator.classList.add('open-indicator--active');
    iosIndicator.classList.remove('open-indicator--active');
    androidImage.classList.add('greeting-container__image--choosen');
    iosImage.classList.remove('greeting-container__image--choosen');
    iosContainer.classList.add('js--hidden');
    androidContainer.classList.remove('js--hidden');
});
iosButton.addEventListener('click', () => {
    androidIndicator.classList.remove('open-indicator--active');
    iosIndicator.classList.add('open-indicator--active');
    androidImage.classList.remove('greeting-container__image--choosen');
    iosImage.classList.add('greeting-container__image--choosen');
    iosContainer.classList.remove('js--hidden');
    androidContainer.classList.add('js--hidden');
});


// Choose Tab incase of complex url
const pageLink = window.location.href;

if (pageLink.includes('android-ios-guide#ios')) {
    androidIndicator.classList.remove('open-indicator--active');
    iosIndicator.classList.add('open-indicator--active');
    androidImage.classList.remove('greeting-container__image--choosen');
    iosImage.classList.add('greeting-container__image--choosen');
    iosContainer.classList.remove('js--hidden');
    androidContainer.classList.add('js--hidden');
} else {
    androidIndicator.classList.add('open-indicator--active');
    iosIndicator.classList.remove('open-indicator--active');
    androidImage.classList.add('greeting-container__image--choosen');
    iosImage.classList.remove('greeting-container__image--choosen');
    iosContainer.classList.add('js--hidden');
    androidContainer.classList.remove('js--hidden');
}