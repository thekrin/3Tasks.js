var st = document.getElementById("start");
st.style.display = 'none';

function showbd() {
    var Text = "Body'ni gormek isteyirsiniz?"
    if (confirm(Text) === true) {
        st.style.display = 'block'
    } else {
        st.style.display = 'none'
    }
}