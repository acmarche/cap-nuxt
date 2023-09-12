export default (categorySelected: Number) => {
    const config = useRuntimeConfig()

    const {
        pending: pendingFiches,
        data: fiches,
        error: errorFiches
    } = useLazyFetch(
        `${config.public.API_URL}/fiches/rubrique/${categorySelected}`
    );
    return {
        pendingFiches,
        fiches,
        errorFiches
    };
}