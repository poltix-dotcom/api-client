const push = async () => {
    const title = document.querySelector("#title").value;
    const body = document.querySelector("#body").value;
    let result = await fetch("https://app.sabarajendran.in/send_message", {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        // mode: "no-cors",
    })

    result = await result.json()
    // const result = { Message: "Notification pushed" }
    Swal.fire(
        String(result.Message),
        '',
        'success'
    )
    console.log(result);
}