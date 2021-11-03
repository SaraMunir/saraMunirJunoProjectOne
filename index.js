const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('did something work?')
    
    let userName = document.querySelector('#Name').value;
    let userComment = document.querySelector('#Comment').value;
    const warningPost = document.createElement('p');
    const warningContainer =document.querySelector('.warningCntr');
    
    if (userName ===""){
        document.querySelector('#Name').focus();
        warningPost.className = "warning";
        warningContainer.innerHTML = '<p class="warning">Please provide your name</p>'
        return
    }
    if (userComment ===""){
        document.querySelector('#Comment').focus();
        warningPost.className = "warning";
        warningContainer.innerHTML = '<p class="warning">Please leave a comment</p>'
        return
    }
    if (userName && userComment){
        warningContainer.innerHTML = ''
        const commentSection = document.querySelector('.commentsSection')
        const newDiv = document.createElement('div')
        const newDivImg = document.createElement('img')
        const newSubDiv = document.createElement('div')
        const newSubDivDatePosted = document.createElement('h4')
        const newSubDivParagraph = document.createElement('p')
        const d = new Date;
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November","December"];
        var s = ["th", "st", "nd", "rd"];
        let n = d.getDate()
        let v = n % 100;
        let ordinal = n + (s[(v - 20) % 10] || s[v] || s[0])
        const todaysDate = `${dayNames[d.getDate()]} ${monthNames[d.getMonth()]} ${ordinal}, ${d.getFullYear()}`;

        newDiv.className = "articleItemsCard flexCard";
        newSubDivDatePosted.className = "cardPostedDate";
        newDivImg.src = "https://via.placeholder.com/92"
        newDiv.appendChild(newDivImg);
        newDiv.appendChild(newSubDiv);
        newSubDiv.appendChild(newSubDivDatePosted);
        newSubDiv.appendChild(newSubDivParagraph);
        newSubDivDatePosted.innerText= `${todaysDate} by ${userName}`
        newSubDivParagraph.innerText= `${userComment}`
        commentSection.appendChild(newDiv);
        document.querySelector('#Name').value = ''
        document.querySelector('#Comment').value = ''
    }
})