 // fungsi untuk membuat format number dalam format indonesia
export default number => {
    // Intl disini adalah singkatan dari Internasional
    const formatNumbering = new Intl.NumberFormat("id-ID");
    
    return formatNumbering.format(number);
};
