class Generator {
    constructor(input, linkButton, sendButton, resultDiv) {
        this.input = document.querySelector(input);
        this.linkButton = document.querySelector(linkButton);
        this.sendButton = document.querySelector(sendButton);
        this.resultDiv = document.querySelector(resultDiv);
        this.clearNumber;
        this.link;
        this.isValid = false;
    }

    events() {
        this.linkButton.addEventListener('click', this.generateLink);
        this.sendButton.addEventListener('click', this.goTolink);
        this.input.addEventListener('input', this.formatText);
    }

    formatText() {
        const regex = /(\d{2})(\d{4,5})(\d{4})/;
        this.clearNumber = this.input.value.replace(/\D/g, '');
        this.input.value = this.clearNumber.replace(regex, '($1) $2-$3');

        if (this.clearNumber.length == 11) {
            this.input.style.color = '#008000';
            this.input.style.borderColor = '#008000';
            this.isValid = true;
        } else {
            this.input.style.color = '#000';
            this.input.style.borderColor = '#ff0000';
            this.isValid = false;
        };
    }

    generateLink() {
        if (this.isValid) {}
    }

    goTolink() {
        if (this.isValid) {
            window.open(`https://wa.me/55${this.clearNumber}`)
        }
    }

    bindEvents() {
        this.formatText = this.formatText.bind(this);
        this.goTolink = this.goTolink.bind(this);
        this.generateLink = this.generateLink.bind(this);
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