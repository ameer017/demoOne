// SIDEBAR
const menuItems = document.querySelectorAll('.menuItems');

// MESSAGES
const messagesNotification = document.querySelector('#messageNotifications');
const messages = document.querySelector('.messages');

// THEME 
const theme = document.querySelector('#theme');
const customizeTheme = document.querySelector('.customizeTheme')

// FONT SIZE
const fontSize = document.querySelectorAll('.chooseSize span')

let root = document.querySelector(':root')

// color
const colorPalette = document.querySelectorAll('.chooseColor span')

// Background
const bgOne = document.querySelector('.bgOne')
const bgTwo = document.querySelector('.bgTwo')
const bgThree = document.querySelector('.bgThree')

// remove active class from menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active');
        

        if(item.id != 'notifications') {
            document.querySelector('.notificationPopup').style.display = 'none';
        } else {
            document.querySelector('.notificationPopup').style.display = 'block';

            document.querySelector('#notifications .notificationCount').style.display = 'none';
        }
    })
})


// MESSAGE CLICK EVENT 
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector('#messageNotifications .notificationCount').style.display = 'none';
    // messagesNotification.querySelector('.notificationCount').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

// THEME 
const openModal = () => {
    customizeTheme.style.display = 'grid';
}

const closeModal = (e) => {
    if(e.target.classList.contains('customizeTheme')) {
        customizeTheme.style.display = 'none'
    }
}

customizeTheme.addEventListener('click', closeModal)
theme.addEventListener('click', openModal)

// remove active class from font size
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}
// fontsizes
fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSizes;
        size.classList.toggle('active');

        if(size.classList.contains('fontSizeOne')) {
            fontSizes = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('fontSizeTwo')) {
            fontSizes = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('fontSizeThree')) {
            fontSizes = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('fontSizeFour')) {
            fontSizes = '19px';
            root.style.setProperty('--sticky-top-left', '5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(size.classList.contains('fontSizeFive')) {
            fontSizes = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        // change font size of root html element
        document.querySelector('html').style.fontSize = fontSizes;
    })
})

// remove active from color
const changeActiveClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}
// Color Palette
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveClass()
        let primary;
        if(color.classList.contains('colorOne')) {
            primary = '252';
        }else if(color.classList.contains('colorTwo')) {
            primary = '52'
        }else if(color.classList.contains('colorThree')) {
            primary = '352'
        }else if(color.classList.contains('colorFour')) {
            primary = '152'
        }else if(color.classList.contains('colorFive')) {
            primary = '50'
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primary)
    })
})

// THEME BG
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change bg 
const changeBackground = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

// active 
bgOne.addEventListener('click', () => {
    bgOne.classList.add('active');

    // remove active class
    bgTwo.classList.remove('active')
    bgThree.classList.remove('active')

    window.location.reload();
    // changeBackground()
})

bgTwo.addEventListener('click', () => {
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';

    bgTwo.classList.add('active');

    // remove active class
    bgOne.classList.remove('active')
    bgThree.classList.remove('active')

    changeBackground()
})

bgThree.addEventListener('click', () => {
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    bgOne.classList.add('active');

    // remove active class
    bgOne.classList.remove('active')
    bgTwo.classList.remove('active')
    changeBackground()
})
