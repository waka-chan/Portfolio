'use strict'

import { caseStudyPassword } from "./secret.js"

window.checkPassword = function checkPassword() {
    const password = document.getElementById('exampleInputPassword1').value
    console.log(password)
    if (password === caseStudyPassword) {
        console.log('SUCCESS')
        window.location.href = "http://127.0.0.1:5502/caseStudy1.html"

        // window.location.href = "https://wakakoux.com/caseStudy1.html"
    } else {
        console.log('FAILED')
    }
}