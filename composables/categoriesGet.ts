export default () => {
    const config = useRuntimeConfig()
    const {
        pending,
        data,
        error
    } = useFetch(
        `${config.public.API_URL}/commerces`
    );
    return {
        pending,
        data,
        error
    };
}