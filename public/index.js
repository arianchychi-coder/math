document.getElementById("register").addEventListener("click",async function(e) {
    e.preventDefault()


    const form = document.getElementById("registerform")
    if (!form.checkValidity()) {
        alert("plz enter all field")
        return
    }

    const name = form.querySelector("input[name='name']").value
    const phone = form.querySelector("input[name='phone']").value
    const role = form.querySelector("select[name='role']").value
    const companyname = form.querySelector("input[name='companyname']").value


    try {

        const response = await fetch("/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,phone,role,companyname})
        })

        const data = await response.json()

        if (!response.ok) {
            alert(data.message || "Err")
            return
        }
        else{
            alert(data.message)
        }
        
    } catch (error) {
        console.log("Error: ",error)
    }
})