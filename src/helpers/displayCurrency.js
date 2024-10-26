const displayVNDCurrency = (num) => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0 // VND typically doesn't use decimals
    });

    return formatter.format(num);
};

export default displayVNDCurrency;
