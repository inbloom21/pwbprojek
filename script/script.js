function kirimEmail() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    if (nama == '' || email == '' || pesan == '') {
        alert('Isi data pada form dengan lengkap!');
        return;
    }

    const emailMalaka = 'ibraarifa21@gmail.com';
    const subject = encodeURIComponent(`Email dari ${nama} (Website)`);
    const body = encodeURIComponent(`Nama: ${nama}\nEmail: ${email}\n\nPesan:\n${pesan}`);

    window.location.href = `mailto:${emailMalaka}?subject=${subject}&body=${body}`;
}