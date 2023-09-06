export default (categorySelected: Number) => {
    const {
        data,
        error,
        pending
    } =  useFetch(() => `http://api.local/bottin/categories/byparent/${categorySelected}`);
    return {
        pending,
        data,
        error
    };
}