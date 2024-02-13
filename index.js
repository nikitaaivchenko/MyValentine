if (document.getElementById("noButton")) {
        document
            .getElementById("noButton")
            .addEventListener("click", function () {
                    const yesButton = document.querySelector(
                        'button[onclick*="thankyou.html"]'
                    );
                    const currentFontSize = parseInt(
                        window.getComputedStyle(yesButton).fontSize
                    );
                    yesButton.style.fontSize = currentFontSize + 10 + "px";
            });
}

const date = document.getElementById("date");

const sendData = (data) => {
    const url = 'https://valentine.free.beeceptor.com/my/api/path';
    const dataToSend = { data: data };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
        .then(response => response.json())
        .then(data => console.log('Response from server:', data))
        .catch(error => console.error('Error:', error));

}

const checkInput = (inputId, buttonId) => {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);

    if (input.value.trim() === '') {
        button.setAttribute('disabled', 'disabled');
    } else {
        button.removeAttribute('disabled');
    }
}

const checkCheckbox = (buttonElement) => {
    const button = document.getElementById(buttonElement);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    const isAnyCheckboxChecked = Array.from(checkboxes).some(function(checkbox) {
        return checkbox.checked;
    });

    if (!isAnyCheckboxChecked) {
        button.setAttribute('disabled', 'disabled');
        console.log(button);
    } else {
        button.removeAttribute('disabled');
    }
}

const getDate = () => {
    sendData(date.value);
}

let selectedItems = [];

const handleButtonClick = (href) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    selectedItems = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    console.log('Обране:', selectedItems);
    location.href=href;
    if (selectedItems) {
        sendData(selectedItems);
    }
}
