class Generator {
    constructor(input, linkButton, sendButton, resultDiv) {
        this.input = document.querySelector(input);
        this.linkButton = document.querySelector(linkButton);
        this.sendButton = document.querySelector(sendButton);
        this.resultDiv = document.querySelector(resultDiv);
        this.link;
        this.phoneNumber;
    }

    events() {
        this.linkButton.addEventListener('click', this.generateLink);
        this.sendButton.addEventListener('click', this.goTolink);
        this.input.addEventListener('keyup', this.formatText);
    }

    formatText() {
        const inputText = this.input.value;
        if (inputText.length > 2 && !inputText.includes('(')) {
            this.input.value = `(${inputText.slice(0, 2)}) ${inputText.slice(2)}`;
        }
        if (inputText.length > 10) {
            console.log(this.input.value)
            console.log(inputText)
            this.input.value = `${inputText.slice(0, 5)}${inputText.slice(5, 10)}-${inputText.slice(10)}`;
        }
    }

    generateLink() {
        console.log('aa')
    }

    goTolink() {
        console.log('bb')
    }

    bindEvents() {
        this.formatText = this.formatText.bind(this);
    }

    init() {
        this.bindEvents();
        this.events();
    }
}

const generator = new Generator (
    '#phone-number-input',
    '#link-btn',
    '#send-btn',
    '#link-result'
)

generator.init();