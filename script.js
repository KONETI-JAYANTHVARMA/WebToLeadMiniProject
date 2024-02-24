function beforeSubmit()
{
    let outputdate = document.querySelector(".outputdates");
    let inputdate = document.querySelector(".inputdates");
    console.log(inputdate.value);
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    console.log(formattedDate);
    outputdate.value = formattedDate;
}