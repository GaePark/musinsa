let checkNumber = (event) => {
    if(event.key >= 0 && phoneEvent1.key <= 9) {
        return true
    }
    
    return false
}

let phonechange1 = () => {
    let phone1 = document.getElementById("phone1").value

    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

let phonechange2 = () => {
    let phone2 = document.getElementById("phone2").value

    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}

let phonechange3 = () => {
    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value

    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
        document.getElementById("certification").removeAttribute("disabled")
        document.getElementById("certification").style = "background-color: #fff; color: #000; font-weight: border; border: 2px solid #000; cursor: pointer"
    }
}

let tokenbtn = () => {
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token

    document.getElementById("submit").removeAttribute("disabled")
    document.getElementById("submit").style = "border: none; background: #000; color: #fff; font-weight: 600; cursor: pointer"
    document.getElementById("certification").setAttribute("disabled", true)
    document.getElementById("certification").style = ""
    tokenCount()
}

let started
let tokenCount = () => {
    let time = 10
    started = setInterval(() => {
        
        if(time >= 0) {
            min = Math.floor(time/60)
            sec = String(time%60).padStart(2, "0")
            document.getElementById("timer").innerText = min + ":" + sec
            time -= 1
        } else {
            document.getElementById("token").innerText = "000000"
            document.getElementById("timer").innerText = "3:00"
            document.getElementById("submit").setAttribute("disabled", true)
            document.getElementById("submit").style = ""
            clearInterval(started)
        }
    }, 1000);
    
}

let timebtn = () => {
    document.getElementById("token").innerText = "000000"
    document.getElementById("timer").innerText = "3:00"
    document.getElementById("submit").setAttribute("disabled", true)
    document.getElementById("submit").style = ""
    clearInterval(started)

    alert("인증이 완료되었습니다.")
    document.getElementById("signup").removeAttribute("disabled")
    document.getElementById("signup").style = "border: none; background: #000; color: #fff; font-weight: 600; cursor: pointer"
}

let signupbtn = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let checked = true

    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일을 입력해 주세요"
        checked = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if(name === "") {
        document.getElementById("error__name").innerText = "이름을 입력해 주세요"
        checked = false
    } else {
        document.getElementById("error__name").innerText = ""
    }

    if(pw1 === "") {
        document.getElementById("error__pw1").innerText = "비밀번호를 입력해 주세요"
        checked = false
    } else {
        document.getElementById("error__pw1").innerText = ""
    }
    if(pw2 === "") {
        document.getElementById("error__pw2").innerText = "비밀번호를 입력해 주세요"
        checked = false
    } else {
        document.getElementById("error__pw2").innerText = ""
    }

    if(pw1 !== pw2) {
        document.getElementById("error__pw1").innerText = "비밀번호가 일치하지 않습니다."
        checked = false
    }

    if(checked === true) {
        alert(name + "님 환영합니다.")
        location.href = "index.html"
    }
}