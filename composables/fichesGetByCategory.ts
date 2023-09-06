export default (categorySelected: Number) => {
    const {
        data,
        error,
        pending,
        refresh
    } = useFetch(() => `http://api.local/bottin/fiches/cap/rubrique/${categorySelected}`);
    return {
        pending,
        data,
        error,
        refresh
    };
}