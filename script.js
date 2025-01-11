function toggleBulbs() {
    const isChecked = document.getElementById('toggleSwitch').checked;
    if (isChecked) {
        document.getElementById('b1').style.display = "none";
        document.getElementById('b2').style.display = "block";
    } else {
        document.getElementById('b1').style.display = "block";
        document.getElementById('b2').style.display = "none";
    }
}
