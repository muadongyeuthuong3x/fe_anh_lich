const backendDomain = process.env.REACT_APP_API_URL;

// Function to get the token from local storage
const getToken = () => {
    const data = localStorage.getItem("role_web");
    if (data) {
        const parsedData = JSON.parse(data);
        return parsedData.cookies; // Assuming 'cookies' holds the token
    }
    return null;
};

const SummaryApi = {
    signUP: {
        url: `${backendDomain}/api/signup`,
        method: "post",
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: "post",
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: "get",
        headers: { Authorization: `Bearer ${getToken()}` }, // Add token here
    },
    logout_user: {
        url: `${backendDomain}/api/userLogout`,
        method: 'get',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    allUser: {
        url: `${backendDomain}/api/all-user`,
        method: 'get',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    updateUser: {
        url: `${backendDomain}/api/update-user`,
        method: "post",
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    uploadProduct: {
        url: `${backendDomain}/api/upload-product`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    allProduct: {
        url: `${backendDomain}/api/get-product`,
        method: 'get',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    updateProduct: {
        url: `${backendDomain}/api/update-product`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    categoryProduct: {
        url: `${backendDomain}/api/get-categoryProduct`,
        method: 'get',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    categoryWiseProduct: {
        url: `${backendDomain}/api/category-product`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    productDetails: {
        url: `${backendDomain}/api/product-details`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    addToCartProduct: {
        url: `${backendDomain}/api/addtocart`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    addToCartProductCount: {
        url: `${backendDomain}/api/countAddToCartProduct`,
        method: 'get',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    addToCartProductView: {
        url: `${backendDomain}/api/view-card-product`,
        method: 'get',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    updateCartProduct: {
        url: `${backendDomain}/api/update-cart-product`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    deleteCartProduct: {
        url: `${backendDomain}/api/delete-cart-product`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    searchProduct: {
        url: `${backendDomain}/api/search`,
        method: 'get',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    filterProduct: {
        url: `${backendDomain}/api/filter-product`,
        method: 'post',
        headers: { Authorization: `Bearer ${getToken()}` },
    },
    sliders : {
        url: `${backendDomain}/api/sliders`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`,
        },
    },
    getSliders: {
        url: `${backendDomain}/api/sliders`,
        method: 'get',
    },
};

export default SummaryApi;
