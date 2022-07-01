const getFormattedWelcomeMessage = () => {
	const element = document.querySelector("#welcome-message");
    return element.textContent = "Welcome to your beautiful website!";
};

// Sample usage - do not modify
console.log(getFormattedWelcomeMessage());