const getNavbarElement = () => {
	return document.querySelector('#navbar')
}

const getMainElement = () => {
	return document.querySelector('#main')
}

const getAboutFromFooter = () => {
    return document.querySelector('#footer-wrapper a')
}

const getTheParagraphElement = () => {
    return document.querySelector('#main p')
}


// Sample usage - do not modify
console.log(getNavbarElement());
console.log(getMainElement());
console.log(getAboutFromFooter());
console.log(getTheParagraphElement());