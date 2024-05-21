
try {
    document.getElementById("sgBtn1").addEventListener('click', showSignupForm)
    document.getElementById("lgBtn1").addEventListener('click', showLoginForm)
    document.getElementById("sgFrm").style.display = "none"

    function showSignupForm() {
        document.getElementById("lgFrm").style.display = "none"
        let SignupForm = document.getElementById("sgFrm");
        SignupForm.style.display = "flex"

        document.getElementById("right").style.right = "5%"
        document.getElementById("right").style.left = "5%"
        // document.getElementById("right").style.width = "70%";

        let overlay = document.getElementById("overlay")
        overlay.style.flexDirection = "row-reverse"

        let planeTrack = document.getElementById("planeTrack")
        planeTrack.style.transform = "scaleX(-1)"

        let bgBlur = document.getElementsByClassName("bg-blur")
        bgBlur[0].style.backgroundPosition = "-280px -40px"
        // bgBlur.style.backgroundPosition = "-1320px -260px"
    }    

    function showLoginForm() {
        document.getElementById("sgFrm").style.display = "none"
        let LoginForm = document.getElementById("lgFrm");
        LoginForm.style.display = "flex"

        document.getElementById("right").style.left = "70%"
        

        let overlay = document.getElementById("overlay")
        overlay.style.flexDirection = "row"

        let planeTrack = document.getElementById("planeTrack")
        planeTrack.style.transform = "scaleX(1)"

        let bgBlur = document.getElementsByClassName("bg-blur")
        bgBlur[0].style.backgroundPosition = "-1200px -250px"
        // bgBlur.style.backgroundPosition = "-1320px -260px"
    } 
} catch (e){
    console.log(e)
}


try {
    try {
        document.getElementById("card1").addEventListener('mouseenter', showInfo)
        document.getElementById("card1").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 1 not found " +e)
    }
    try {
        document.getElementById("card2").addEventListener('mouseenter', showInfo)
        document.getElementById("card2").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 2 not found " +e)
    }
    try {
        document.getElementById("card3").addEventListener('mouseenter', showInfo)
        document.getElementById("card3").addEventListener('mouseleave', showInfo)
    } catch(e){
        console.log("Card 3 not found " +e)
    }
    try {
        document.getElementById("card4").addEventListener('mouseenter', hideInfo)
        document.getElementById("card4").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 4 not found " +e)
    }
    try {
        document.getElementById("card5").addEventListener('mouseenter', showInfo)
        document.getElementById("card5").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 5 not found " +e)
    }
    try {
        document.getElementById("card6").addEventListener('mouseenter', showInfo)
        document.getElementById("card6").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 6 not found " +e)
    }
    try {
        document.getElementById("card7").addEventListener('mouseenter', showInfo)
        document.getElementById("card7").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 7 not found " +e)
    }
    try {
        document.getElementById("card8").addEventListener('mouseenter', showInfo)
        document.getElementById("card8").addEventListener('mouseleave', showInfo)
    } catch(e){
        console.log("Card 8 not found " +e)
    }
    try {
        document.getElementById("card9").addEventListener('mouseenter', hideInfo)
        document.getElementById("card9").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 9 not found " +e)
    }
    try {
        document.getElementById("card10").addEventListener('mouseenter', showInfo)
        document.getElementById("card10").addEventListener('mouseleave', hideInfo)
    } catch(e){
        console.log("Card 10 not found " +e)
    }
    


    function showInfo(e) {
        if (e.target.id == "card1")  {
            document.getElementById("card1").style.height = "200px"
            document.getElementsByClassName("more-info")[0].style.opacity = "1"
        } else if (e.target.id == "card2")  {
            document.getElementById("card2").style.height = "200px"
            document.getElementsByClassName("more-info")[1].style.opacity = "1"
        } else if (e.target.id == "card3")  {
            document.getElementById("card3").style.height = "200px"
            document.getElementsByClassName("more-info")[2].style.opacity = "1"
        } else if (e.target.id == "card4")  {
            document.getElementById("card4").style.height = "200px"
            document.getElementsByClassName("more-info")[3].style.opacity = "1"
        } else if (e.target.id == "card5")  {
            document.getElementById("card5").style.height = "200px"
            document.getElementsByClassName("more-info")[4].style.opacity = "1"
        } else if (e.target.id == "card6")  {
            document.getElementById("card6").style.height = "200px"
            document.getElementsByClassName("more-info")[5].style.opacity = "1"
        } else if (e.target.id == "card7")  {
            document.getElementById("card7").style.height = "200px"
            document.getElementsByClassName("more-info")[6].style.opacity = "1"
        } else if (e.target.id == "card8")  {
            document.getElementById("card8").style.height = "200px"
            document.getElementsByClassName("more-info")[7].style.opacity = "1"
        }       
    }

    function hideInfo(e) {
        if (e.target.id == "card1")  {
            document.getElementById("card1").style.height = "150px"
            document.getElementsByClassName("more-info")[0].style.opacity = "0"
        } else if (e.target.id == "card2")  {
            document.getElementById("card2").style.height = "150px"
            document.getElementsByClassName("more-info")[1].style.opacity = "0"
        } else if (e.target.id == "card3")  {
            document.getElementById("card3").style.height = "150px"
            document.getElementsByClassName("more-info")[2].style.opacity = "0"
        } else if (e.target.id == "card4")  {
            document.getElementById("card4").style.height = "150px"
            document.getElementsByClassName("more-info")[3].style.opacity = "0"
        } else if (e.target.id == "card5")  {
            document.getElementById("card5").style.height = "150px"
            document.getElementsByClassName("more-info")[4].style.opacity = "0"
        } else if (e.target.id == "card6")  {
            document.getElementById("card6").style.height = "150px"
            document.getElementsByClassName("more-info")[5].style.opacity = "0"
        } else if (e.target.id == "card7")  {
            document.getElementById("card7").style.height = "150px"
            document.getElementsByClassName("more-info")[6].style.opacity = "0"
        } else if (e.target.id == "card8")  {
            document.getElementById("card8").style.height = "150px"
            document.getElementsByClassName("more-info")[7].style.opacity = "0"
        }        
    }
} catch (e) {
    console.log(e)
}

try {
    // For Flight Search Page
    // For From 
    const selectElementTo = document.getElementById('to');
    selectElementTo.addEventListener('change', function() {
    const tlabel = document.getElementById('tlabel');
    if (selectElementTo.value !== '') {
        tlabel.style.transform = "translate(-235px, 8px)"
        tlabel.style.fontSize = "0.9rem"
    } else {
        tlabel.style.transform = "translate(-225px, 22px)"
        tlabel.style.fontSize = "1rem"
    }})

    // For From 
    const selectElementFrom = document.getElementById('from');
    selectElementFrom.addEventListener('change', function() {
    const flabel = document.getElementById('flabel');
    if (selectElementFrom.value !== '') {
        flabel.style.transform = "translate(-235px, 8px)"
        flabel.style.fontSize = "0.9rem"
    } else {
        flabel.style.transform = "translate(-225px, 22px)"
        flabel.style.fontSize = "1rem"
    }})

    // Exchange Form Values
    document.getElementById("exchangeIco").addEventListener('click', exchange)
    let To = document.getElementById('tSelect');
    let From = document.getElementById('fSelect');
    function exchange() {
        let temp = To.value
        To.value = From.value
        From.value = temp
    }
} catch(e) {
    console.log(e)
}

try {
    // For Flight Book Page
    // For From 
    document.getElementById('pname').addEventListener('change', function() {
        const pnameLabel = document.getElementById('pnameLabel');
        if (pnameLabel.value !== '') {
            pnameLabel.style.transform = "translate(10px, 3px)"
            pnameLabel.style.fontSize = "0.9rem"
        } else {
            pnameLabel.style.transform = "translate(-225px, 22px)"
            pnameLabel.style.fontSize = "1rem"
    }})

    document.getElementById('passNum').addEventListener('change', function() {
        const passNumLabel = document.getElementById('passNumLabel');
        if (passNumLabel.value !== '') {
            passNumLabel.style.transform = "translate(10px, 3px)"
            passNumLabel.style.fontSize = "0.9rem"
        } else {
            passNumLabel.style.transform = "translate(-225px, 22px)"
            passNumLabel.style.fontSize = "1rem"
    }})

    document.getElementById('cnicNum').addEventListener('change', function() {
        const cnicNumLabel = document.getElementById('cnicNumLabel');
        if (cnicNumLabel.value !== '') {
            cnicNumLabel.style.transform = "translate(10px, 3px)"
            cnicNumLabel.style.fontSize = "0.9rem"
        } else {
            cnicNumLabel.style.transform = "translate(-225px, 22px)"
            cnicNumLabel.style.fontSize = "1rem"
    }})
    
    // For From 
    const selectElementFrom = document.getElementById('fSelect');
    selectElementFrom.addEventListener('change', function() {
    const flabel = document.getElementById('flabel');
    if (flabel.value !== '') {
        flabel.style.transform = "translate(10px, 3px)"
        flabel.style.fontSize = "0.9rem"
    }

    // For From 
    const selectElementTo = document.getElementById('tSelect');
    selectElementTo.addEventListener('change', function() {
    const tlabel = document.getElementById('tlabel');
    if (tlabel.value !== '') {
        tlabel.style.transform = "translate(10px, 3px)"
        tlabel.style.fontSize = "0.9rem"
    }})

    // Exchange Form Values
    document.getElementById("exchangeIco").addEventListener('click', exchange)
    let To = document.getElementById('tSelect');
    let From = document.getElementById('fSelect');
    function exchange() {
        let temp = To.value
        To.value = From.value
        From.value = temp
    }})
 } catch(e) {
    console.log(e)
 }

 // For Admin Panel
 try {
    document.getElementById("sidebar-menu").addEventListener('click', sideBarReveal)
    document.getElementById("sidebar").addEventListener('mouseleave', hideBarReveal)
    function sideBarReveal () {
        let sidebar = document.getElementById("sidebar")
        sidebar.style.transform = "translateX(0px)"
    }
    function hideBarReveal () {
        let sidebar = document.getElementById("sidebar")
        sidebar.style.transform = "translateX(-300px)"
    }
 } catch(e) {
    console.log("Menu Icon not found !! "+e)
 }

 try {
    try {
        const fname = document.getElementById('fname');
        if (fname.value !== '') {
            document.getElementById('fnameLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('fnameLabel').style.fontSize = "0.9rem"
        }

        const uname = document.getElementById('uname');
        if (uname.value !== '') {
            document.getElementById('unameLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('unameLabel').style.fontSize = "0.9rem"
        }
        
        const email = document.getElementById('email');
        if (email.value !== '') {
            document.getElementById('emailLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('emailLabel').style.fontSize = "0.9rem"
        }

        const password = document.getElementById('password');
        if (password.value !== '') {
            document.getElementById('passwordLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('passwordLabel').style.fontSize = "0.9rem"
        }

        const address = document.getElementById('address');
        if (address.value !== '') {
            document.getElementById('addressLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('addressLabel').style.fontSize = "0.9rem"
        }

        const shift = document.getElementById('shift');
        if (shift.value !== '') {
            document.getElementById('shiftLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('shiftLabel').style.fontSize = "0.9rem"
        }

    } catch (e) {

    }
     
    document.getElementById('fname').addEventListener('change', function() {
        const fnameLabel = document.getElementById('fnameLabel');
        if (fnameLabel.value !== '') {
            fnameLabel.style.transform = "translate(10px, 15px)"
            fnameLabel.style.fontSize = "0.9rem"
        } else {
            fnameLabel.style.transform = "translate(20px, 30px)"
            fnameLabel.style.fontSize = "1rem"
    }})

    document.getElementById('uname').addEventListener('change', function() {
        const uNameLabel = document.getElementById('uNameLabel');
        if (uNameLabel.value !== '') {
            uNameLabel.style.transform = "translate(10px, 15px)"
            uNameLabel.style.fontSize = "0.9rem"
        } else {
            uNameLabel.style.transform = "translate(20px, 30px)"
            uNameLabel.style.fontSize = "1rem"
    }})

    document.getElementById('email').addEventListener('change', function() {
        const emailLabel = document.getElementById('emailLabel');
        if (emailLabel.value !== '') {
            emailLabel.style.transform = "translate(10px, 15px)"
            emailLabel.style.fontSize = "0.9rem"
        } else {
            emailLabel.style.transform = "translate(20px, 30px)"
            emailLabel.style.fontSize = "1rem"
    }})

    document.getElementById('password').addEventListener('change', function() {
        const passwordLabel = document.getElementById('passwordLabel');
        if (passwordLabel.value !== '') {
            passwordLabel.style.transform = "translate(10px, 15px)"
            passwordLabel.style.fontSize = "0.9rem"
        } else {
            passwordLabel.style.transform = "translate(20px, 30px)"
            passwordLabel.style.fontSize = "1rem"
    }})

    document.getElementById('dob').addEventListener('change', function() {
        const dobLabel = document.getElementById('dobLabel');
        if (dobLabel.value !== '') {
            dobLabel.style.transform = "translate(10px, 15px)"
            dobLabel.style.fontSize = "0.9rem"
        } else {
            dobLabel.style.transform = "translate(20px, 30px)"
            dobLabel.style.fontSize = "1rem"
    }})

    document.getElementById('address').addEventListener('change', function() {
        const addressLabel = document.getElementById('addressLabel');
        if (addressLabel.value !== '') {
            addressLabel.style.transform = "translate(10px, 15px)"
            addressLabel.style.fontSize = "0.9rem"
        } else {
            addressLabel.style.transform = "translate(20px, 30px)"
            addressLabel.style.fontSize = "1rem"
    }})

    document.getElementById('shift').addEventListener('change', function() {
        const shiftLabel = document.getElementById('shiftLabel');
        if (shiftLabel.value !== '') {
            shiftLabel.style.transform = "translate(10px, 15px)"
            shiftLabel.style.fontSize = "0.9rem"
        } else {
            shiftLabel.style.transform = "translate(20px, 30px)"
            shiftLabel.style.fontSize = "1rem"
    }})

 } catch(e) {
    console.log("Labels for Staff not found !! "+e)
 }

 
 try {
    try {
        const fNumber = document.getElementById('fNumber');
        if (fNumber.value !== '') {
            document.getElementById('fNumberLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('fNumberLabel').style.fontSize = "0.9rem"
        }

        const fareEc = document.getElementById('fareEc');
        if (fareEc.value !== '') {
            document.getElementById('fareEcLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('fareEcLabel').style.fontSize = "0.9rem"
        }
        
        const fareBc = document.getElementById('fareBc');
        if (fareBc.value !== '') {
            document.getElementById('fareBcLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('fareBcLabel').style.fontSize = "0.9rem"
        }

        const from = document.getElementById('from');
        if (from.value !== '') {
            document.getElementById('fromLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('fromLabel').style.fontSize = "0.9rem"
        }

        const to = document.getElementById('to');
        if (to.value !== '') {
            document.getElementById('toLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('toLabel').style.fontSize = "0.9rem"
        }

        const departure = document.getElementById('departure');
        if (departure.value !== '') {
            document.getElementById('departureLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('departureLabel').style.fontSize = "0.9rem"
        }

        const dTime = document.getElementById('dTime');
        if (dTime.value !== '') {
            document.getElementById('dTimeLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('dTimeLabel').style.fontSize = "0.9rem"
        }

        const aTime = document.getElementById('aTime');
        if (aTime.value !== '') {
            document.getElementById('aTimeLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('aTimeLabel').style.fontSize = "0.9rem"
        }

        const status = document.getElementById('status');
        if (status.value !== '') {
            document.getElementById('statusLabel').style.transform = "translate(10px, 15px)"
            document.getElementById('statusLabel').style.fontSize = "0.9rem"
        }
        
    } catch (e) {
        console.log("Update Flight Form not found !!! "+e)
    }

    document.getElementById('fNumber').addEventListener('change', transform);
    document.getElementById('fareEc').addEventListener('change', transform);
    document.getElementById('fareBc').addEventListener('change', transform);

    document.getElementById('from').addEventListener('change', transform);
    document.getElementById('to').addEventListener('change', transform);

    document.getElementById('dTime').addEventListener('change', transform);

    document.getElementById('status').addEventListener('change', transform);
    
    document.getElementById('aTime').addEventListener('change', transform);
    

    function transform(e) {
        if (e.target.id == "fNumber") {
            let fNumber = document.getElementById('fNumber')
            if (fNumber.value !== '') {
                document.getElementById('fNumberLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('fNumberLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "from") {
            let from = document.getElementById('from')
            if (from.value !== '') {
                document.getElementById('fromLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('fromLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "dTime") {
            let dTime = document.getElementById('dTime')
            if (dTime.value !== '') {
                document.getElementById('dTimeLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('dTimeLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "fareEc") {
            let fareEc = document.getElementById('fareEc')
            if (fareEc.value !== '') {
                document.getElementById('fareEcLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('fareEcLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "status") {
            let status = document.getElementById('status')
            if (status.value !== '') {
                document.getElementById('statusLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('statusLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "departure") {
            console.log("Hey")
            let departure = document.getElementById('departure')
            if (departure.value !== '') {
                console.log("Hey2")
                document.getElementById('departureLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('departureLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "to") {
            let to = document.getElementById('to')
            if (to.value !== '') {
                document.getElementById('toLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('toLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "aTime") {
            let aTime = document.getElementById('aTime')
            if (aTime.value !== '') {
                document.getElementById('aTimeLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('aTimeLabel').style.fontSize = "0.9rem"
            }
        } else if (e.target.id == "fareBc") {
            let fareBc = document.getElementById('fareBc')
            if (fareBc.value !== '') {
                document.getElementById('fareBcLabel').style.transform = "translate(10px, 15px)"
                document.getElementById('fareBcLabel').style.fontSize = "0.9rem"
            }
        }         
    }
 } catch (e) {
    console.log("Labels for Flight not found!! "+e)
 }

 //