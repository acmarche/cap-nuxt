export default (categorySelected: Number) => {
    const config = useRuntimeConfig()
    const {
        data,
        error,
        pending
    } =  useFetch(() => `${config.public.API_URL}/categories/byparent/${categorySelected}`);
    return {
        pending,
        data,
        error
    };
}