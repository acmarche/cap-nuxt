export default (categorySelected: Number) => {
    const config = useRuntimeConfig()

    const {
        data,
        error,
        pending,
        refresh
    } = useFetch(() => `${config.public.API_URL}/fiches/cap/rubrique/${categorySelected}`);
    return {
        pending,
        data,
        error,
        refresh
    };
}